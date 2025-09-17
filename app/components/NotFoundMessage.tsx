"use client";

import Link from "next/link";

interface NotFoundMessageProps {
    title?: string;
    message?: string;
    backHref?: string;
    backText?: string;
}

export default function NotFoundMessage({
    title = "Post Not Found",
    message = "The post you&apos;re looking for doesn&apos;t exist.",
    backHref = "/posts",
    backText = "Back to Posts"
}: NotFoundMessageProps) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="text-gray-500 text-6xl mb-4">📄</div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{message}</p>
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
