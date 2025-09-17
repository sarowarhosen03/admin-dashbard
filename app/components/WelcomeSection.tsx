"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

export default function WelcomeSection() {
    return (
        <FadeIn className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl">
                <motion.h1
                    className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Welcome to Your Dashboard
                </motion.h1>
                <motion.p
                    className="text-gray-600 dark:text-gray-400 text-lg"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Monitor your application&apos;s performance and manage your content with real-time insights.
                </motion.p>
            </div>
        </FadeIn>
    );
}
