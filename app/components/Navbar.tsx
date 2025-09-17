'use client';

import { motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import LoginModal from './LoginModal';
import { useTheme } from './ThemeProvider';

interface NavbarProps {
    onMenuToggle: () => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
    const { theme, toggleTheme, mounted } = useTheme();
    const isDark = theme === 'dark';
    const { status, data } = useSession();
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (status === "unauthenticated") {
            setShowLoginModal(true);
        }
    }, [status]);
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
                    {status === "authenticated" ? (
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg ring-2 ring-white dark:ring-gray-800">
                                    {data?.user?.name?.charAt(0) || "A"}
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                    {data?.user?.name || "Admin"}
                                </span>
                                <button
                                    onClick={() => signOut()}
                                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                                >
                                    Sign out
                                </button>
                            </div>
                        </div>
                    ) : (
                        <motion.button
                            onClick={() => setShowLoginModal(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                        >
                            Sign In
                        </motion.button>
                    )}
                </div>
            </div>

            {/* Login Modal */}
            <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
            />
        </nav>
    );
}
