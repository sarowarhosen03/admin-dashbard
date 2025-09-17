"use client";

import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner";
import UserModal from "../components/UserModal";
import UsersTable from "../components/UsersTable";
import { useUsers, type User } from "../hooks/useUsers";

export default function UsersPage() {
    const { users, loading, error } = useUsers();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserClick = (user: User) => {
        setSelectedUser(user);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedUser(null);
    };

    if (loading) {
        return <LoadingSpinner message="Loading users..." />;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Users Directory
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Manage and view user information from our community
                    </p>
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Showing {users.length} users
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Click on any row to view details
                        </div>
                    </div>
                </div>

                <UsersTable users={users} onUserClick={handleUserClick} />

                <UserModal
                    user={selectedUser}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </div>
        </div>
    );
}