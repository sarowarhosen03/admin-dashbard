'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ThemeContextValue {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    setTheme: (t: 'light' | 'dark') => void;
    mounted: boolean;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);
    const [theme, setThemeState] = useState<'light' | 'dark'>('dark'); // Always start with dark

    useEffect(() => {
        setMounted(true);
        // Only read from localStorage after mounting
        const stored = window.localStorage.getItem('theme');
        if (stored === 'light' || stored === 'dark') {
            setThemeState(stored);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        window.localStorage.setItem('theme', theme);
    }, [theme, mounted]);

    const value = useMemo<ThemeContextValue>(() => ({
        theme,
        toggleTheme: () => setThemeState(t => (t === 'dark' ? 'light' : 'dark')),
        setTheme: (t) => setThemeState(t),
        mounted,
    }), [theme, mounted]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}

export function useTheme() {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
    return ctx;
}
