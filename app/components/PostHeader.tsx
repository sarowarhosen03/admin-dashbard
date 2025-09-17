"use client";

import { type Post } from "./PostCard";

interface PostHeaderProps {
    post: Post;
}

export default function PostHeader({ post }: PostHeaderProps) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white text-lg font-bold">
                        {post.userId}
                    </div>
                    <div>
                        <p className="text-blue-100 text-sm">Author ID</p>
                        <p className="font-semibold">{post.userId}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-blue-100 text-sm">Post ID</p>
                    <p className="font-semibold text-lg">#{post.id}</p>
                </div>
            </div>
        </div>
    );
}
