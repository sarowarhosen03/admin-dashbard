"use client";

import Link from "next/link";

interface ErrorMessageProps {
    error: string;
    backHref?: string;
    backText?: string;
}

export default function ErrorMessage({
    error,
    backHref = "/posts",
    backText = "Back to Posts"
}: ErrorMessageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="text-red-500 text-6xl mb-4">⚠️</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Post</h2>
                <p className="text-gray-600 dark:text-gray-300">{error}</p>
                <Link
                    href={backHref}
                    className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    {backText}
                </Link>
            </div>
        </div>
    );
}
