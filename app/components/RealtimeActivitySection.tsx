"use client";

import FadeIn from "./FadeIn";
import RealtimeActivity from "./RealtimeActivity";

export default function RealtimeActivitySection() {
    return (
        <FadeIn
            delay={0.6}
            duration={0.6}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg"
        >
            <RealtimeActivity />
        </FadeIn>
    );
}
