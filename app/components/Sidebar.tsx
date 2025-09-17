'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void;
}

interface MenuItem {
    id: string;
    label: string;
    icon: string;
    href: string;
}

const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊', href: '/' },
    { id: 'analytics', label: 'Analytics', icon: '📈', href: '/analytics' },
    { id: 'users', label: 'Users', icon: '👥', href: '/users' },
    { id: 'orders', label: 'Orders', icon: '📦', href: '/orders' },
    { id: 'products', label: 'Products', icon: '🛍️', href: '/products' },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: '/settings' },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
    const [activeItem, setActiveItem] = useState('dashboard');

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onToggle}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                />
            )}

            {/* Sidebar */}
            <motion.aside
                initial={{ x: -300 }}
                animate={{ x: isOpen ? 0 : -300 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl dark:shadow-black/20 z-50 lg:relative lg:translate-x-0 lg:shadow-none ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                            >
                                A
                            </motion.div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Panel</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Dashboard v2.0</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <motion.li key={item.id}>
                                    <motion.a
                                        href={item.href}
                                        onClick={() => setActiveItem(item.id)}
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${activeItem === item.id
                                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-500'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        <span className="text-xl">{item.icon}</span>
                                        <span className="font-medium">{item.label}</span>
                                        {activeItem === item.id && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"
                                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                            />
                                        )}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                U
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Admin User</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">admin@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
