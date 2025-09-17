"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Navbar onMenuToggle={toggleSidebar} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

        <div className="w-full flex-1 mx-7 items-center justify-center">
          <FadeIn className="mx-6">{children}</FadeIn>
        </div>
      </div>
    </div>
  );
}
