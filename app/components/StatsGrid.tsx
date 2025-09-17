"use client";

import { motion } from "framer-motion";
import { StaggeredContainer, StaggeredItem } from "./staggered-container";

interface Stat {
    label: string;
    value: string;
    change: string;
    icon: string;
    color: string;
}

interface StatsGridProps {
    stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
    return (
        <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {stats.map((stat) => (
                <StaggeredItem key={stat.label}>
                    <motion.div
                        whileHover={{
                            scale: 1.02,
                            y: -4,
                            transition: { type: "spring", stiffness: 300, damping: 20 },
                        }}
                        className="group relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 from-gray-900 to-gray-600"></div>
                        <div className="relative">
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                                    {stat.icon}
                                </div>
                                <div className="text-right">
                                    <span className="text-sm text-green-600 dark:text-green-400 font-semibold bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                        {stat.change}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 font-medium">{stat.label}</p>
                                <motion.p
                                    className="text-3xl font-bold text-gray-900 dark:text-white"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                >
                                    {stat.value}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </StaggeredItem>
            ))}
        </StaggeredContainer>
    );
}
