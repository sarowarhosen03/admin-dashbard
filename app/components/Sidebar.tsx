"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: "📊", href: "/" },
  { id: "users", label: "Users", icon: "👥", href: "/users" },
  { id: "posts", label: "Posts", icon: "📝", href: "/posts" },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [mdUp, setMdUp] = useState(false);
  const pathname = usePathname();

  // Keep sidebar open on md and larger screens
  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 768px)");
    const handler = () => setMdUp(media.matches);
    handler();
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && !mdUp && (
        <div
          onClick={onToggle}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl dark:shadow-black/20 z-50 md:relative md:translate-x-0 md:shadow-none lg:relative lg:translate-x-0 lg:shadow-none ${
          mdUp
            ? "translate-x-0"
            : isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <div
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      pathname === item.href
                        ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border-r-2 border-blue-600 dark:border-blue-500"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 w-full"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      {pathname === item.href && (
                        <div className="ml-auto w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                      )}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
