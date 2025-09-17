"use client";

import PostCard, { type Post } from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";

export default function PostsPage() {
    const { data: posts, loading, error } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading posts...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Error Loading Posts</h2>
                    <p className="text-gray-600 dark:text-gray-300">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        All Posts
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Discover insights and updates from our community
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts?.map((post, index) => (
                        <PostCard key={post.id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}