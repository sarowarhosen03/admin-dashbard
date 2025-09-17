"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostCardProps {
    post: Post;
    index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{
                scale: 1.02,
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="group"
        >
            <Link href={`/posts/${post.id}`}>
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 leading-relaxed">
                                {post.body}
                            </p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                {post.userId}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            Post ID: {post.id}
                        </span>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                            Read more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
