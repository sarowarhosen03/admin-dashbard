"use client";

import { motion } from "framer-motion";
import { type Post } from "./PostCard";

interface PostContentProps {
    post: Post;
}

export default function PostContent({ post }: PostContentProps) {
    return (
        <div className="p-8">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
                {post.title}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="prose prose-lg max-w-none dark:prose-invert"
            >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {post.body}
                </p>
            </motion.div>
        </div>
    );
}
