"use client";

import { motion } from "framer-motion";
import { use } from "react";
import BackButton from "../../components/BackButton";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingSpinner from "../../components/LoadingSpinner";
import NotFoundMessage from "../../components/NotFoundMessage";
import { type Post } from "../../components/PostCard";
import PostContent from "../../components/PostContent";
import PostFooter from "../../components/PostFooter";
import PostHeader from "../../components/PostHeader";
import { useFetch } from "../../hooks/useFetch";

interface PostDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function PostDetailsPage({ params }: PostDetailsPageProps) {
    const { id } = use(params);
    const { data: post, loading, error } = useFetch<Post>(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (loading) {
        return <LoadingSpinner message="Loading post details..." />;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (!post) {
        return <NotFoundMessage />;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <BackButton href="/posts" />

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
                >
                    <PostHeader post={post} />
                    <PostContent post={post} />
                    <PostFooter post={post} />
                </motion.article>
            </div>
        </div>
    );
}
