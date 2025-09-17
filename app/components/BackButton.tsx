"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BackButtonProps {
    href: string;
    text?: string;
}

export default function BackButton({ href, text = "Back to Posts" }: BackButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
        >
            <Link
                href={href}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {text}
            </Link>
        </motion.div>
    );
}
