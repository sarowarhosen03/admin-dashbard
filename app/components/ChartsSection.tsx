"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface ChartData {
    month: string;
    users: number;
    posts: number;
}

interface ChartsSectionProps {
    chartData: ChartData[];
    maxUsers: number;
    maxPosts: number;
}

export default function ChartsSection({ chartData, maxUsers, maxPosts }: ChartsSectionProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Users Chart */}
            <FadeIn
                delay={0.4}
                duration={0.6}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">User Growth</h3>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div className="h-64 flex items-end justify-between space-x-2">
                    {chartData.map((data, index) => (
                        <motion.div
                            key={data.month}
                            className="flex flex-col items-center flex-1"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        >
                            <div className="w-full flex flex-col items-center">
                                <motion.div
                                    className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg relative group cursor-pointer"
                                    style={{ height: `${(data.users / maxUsers) * 200}px` }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {data.users.toLocaleString()}
                                    </div>
                                </motion.div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">{data.month}</span>
                        </motion.div>
                    ))}
                </div>
            </FadeIn>

            {/* Posts Chart */}
            <FadeIn
                delay={0.5}
                duration={0.6}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Posts Published</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="h-64 flex items-end justify-between space-x-2">
                    {chartData.map((data, index) => (
                        <motion.div
                            key={data.month}
                            className="flex flex-col items-center flex-1"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                        >
                            <div className="w-full flex flex-col items-center">
                                <motion.div
                                    className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg relative group cursor-pointer"
                                    style={{ height: `${(data.posts / maxPosts) * 200}px` }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                        {data.posts}
                                    </div>
                                </motion.div>
                            </div>
                            <span className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">{data.month}</span>
                        </motion.div>
                    ))}
                </div>
            </FadeIn>
        </div>
    );
}
