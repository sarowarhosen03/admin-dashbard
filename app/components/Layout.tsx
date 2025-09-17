'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
            <Navbar onMenuToggle={toggleSidebar} />

            <div className="flex">
                <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

                <div className="flex-1 md:ml-64">
                    <motion.main
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="p-6"
                    >
                        {children}
                    </motion.main>
                </div>
            </div>
        </div>
    );
}
