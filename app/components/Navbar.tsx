'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
    onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
    const { theme, toggleTheme, mounted } = useTheme();
    const isDark = theme === 'dark';

    return (
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
            <div className="flex items-center justify-between">
                {/* Logo and Mobile Menu */}
                <div className="flex items-center space-x-4">
                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={onMenuToggle}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-gray-600 dark:text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </motion.button>

                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            A
                        </div>
                        <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
                    </div>
                </div>

                {/* Right side - Theme toggle and user */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleTheme}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {!mounted ? (
                            // Show a placeholder while mounting to prevent hydration mismatch
                            <div className="w-5 h-5" />
                        ) : isDark ? (
                            // Sun icon for light mode
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                                <path fillRule="evenodd" d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm9-8a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 12a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm12.364-6.364a1 1 0 010 1.414L16.95 8.464a1 1 0 11-1.414-1.414l.414-.414a1 1 0 011.414 0zM8.464 16.95a1 1 0 010 1.414l-.414.414A1 1 0 116.636 17.95l.414-.414a1 1 0 011.414 0zM18.364 17.95a1 1 0 01-1.414 0l-.414-.414A1 1 0 1117.95 16.12l.414.414a1 1 0 010 1.414zM7.05 6.05a1 1 0 010 1.414L6.636 7.88A1 1 0 115.222 6.464l.414-.414a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            // Moon icon for dark mode
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M21.752 15.002A9 9 0 1112.998 2.25a.75.75 0 01.394 1.39 7.5 7.5 0 007.268 10.612.75.75 0 01.392 1.75z" />
                            </svg>
                        )}
                    </motion.button>

                    {/* User Profile */}
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            A
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Admin</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}
