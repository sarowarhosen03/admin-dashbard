"use client";

import { motion } from "framer-motion";
import { useRealtimeActivity } from "../hooks/useRealtimeActivity";

export default function RealtimeActivity() {
    const { activities, activeUsers } = useRealtimeActivity();

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'post': return 'bg-blue-500';
            case 'comment': return 'bg-green-500';
            case 'like': return 'bg-red-500';
            case 'share': return 'bg-purple-500';
            case 'profile': return 'bg-orange-500';
            default: return 'bg-gray-500';
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Real-time Activity</h3>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Live</span>
                </div>
            </div>

            {/* Activity Feed */}
            <div className="space-y-3">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.95 }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.05
                        }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md ${getTypeColor(activity.type)}`}>
                            {activity.user.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-900 dark:text-white truncate">
                                <span className="font-semibold">{activity.user}</span> {activity.action}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${getTypeColor(activity.type)} opacity-60`}></div>
                    </motion.div>
                ))}
            </div>

            {/* Live Activity Visualization */}
            <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl relative overflow-hidden">
                {/* Floating Activity Indicators */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-500/60 rounded-full"
                        animate={{
                            x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
                            y: [0, Math.random() * 150 - 75, Math.random() * 150 - 75, 0],
                            scale: [1, 1.5, 0.8, 1],
                            opacity: [0.3, 0.8, 0.4, 0.3],
                        }}
                        transition={{
                            duration: 6 + Math.random() * 4,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.3,
                        }}
                        style={{
                            left: `${15 + (i % 7) * 12}%`,
                            top: `${15 + (i % 5) * 18}%`,
                        }}
                    />
                ))}

                {/* Connection Lines */}
                {[...Array(8)].map((_, i) => {
                    // Use deterministic values instead of Math.random() to prevent hydration mismatch
                    const widths = [20, 18, 25, 22, 19, 24, 21, 23];
                    return (
                        <motion.div
                            key={`line-${i}`}
                            className="absolute h-px bg-gradient-to-r from-blue-400/30 to-purple-400/30"
                            animate={{
                                scaleX: [0, 1, 0],
                                opacity: [0, 0.6, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.6,
                            }}
                            style={{
                                left: `${10 + i * 12}%`,
                                top: `${25 + (i % 4) * 20}%`,
                                width: `${widths[i]}%`,
                            }}
                        />
                    );
                })}

                {/* Central Activity Hub */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                >
                    ⚡
                </motion.div>

                {/* Activity Counter */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg"
                >
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">
                            <motion.span
                                key={activeUsers}
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeUsers}
                            </motion.span>
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">active</span>
                    </div>
                </motion.div>

                {/* Activity Pulse Rings */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={`pulse-${i}`}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-blue-400/30 rounded-full"
                        animate={{
                            scale: [1, 2, 3],
                            opacity: [0.6, 0.3, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 1,
                        }}
                        style={{
                            width: 20 + i * 10,
                            height: 20 + i * 10,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
