"use client"

import ChartsSection from "./components/ChartsSection"
import RealtimeActivitySection from "./components/RealtimeActivitySection"
import StatsGrid from "./components/StatsGrid"
import WelcomeSection from "./components/WelcomeSection"
import { usePosts } from "./hooks/usePosts"
import { useUsers } from "./hooks/useUsers"

export default function DashboardHome() {

  const { posts } = usePosts();
  const { users } = useUsers();

  const stats = [
    { label: "Total Posts", value: posts.length.toString(), change: "+12%", icon: "📝", color: "from-blue-500 to-blue-600" },
    { label: "Total Users", value: users.length.toString(), change: "+12%", icon: "👥", color: "from-green-500 to-green-600" },
    { label: "Page Views", value: "18,293", change: "+18%", icon: "👁️", color: "from-purple-500 to-purple-600" },
    { label: "Conversion Rate", value: "3.2%", change: "+0.5%", icon: "📊", color: "from-orange-500 to-orange-600" },
  ]

  // Chart data
  const chartData = [
    { month: "Jan", users: 1200, posts: 45 },
    { month: "Feb", users: 1900, posts: 52 },
    { month: "Mar", users: 3000, posts: 48 },
    { month: "Apr", users: 2800, posts: 61 },
    { month: "May", users: 1890, posts: 55 },
    { month: "Jun", users: 2390, posts: 67 },
  ]


  const maxUsers = Math.max(...chartData.map(d => d.users))
  const maxPosts = Math.max(...chartData.map(d => d.posts))

  return (
    <div className="space-y-8">

      <WelcomeSection />

      <StatsGrid stats={stats} />

      <ChartsSection chartData={chartData} maxUsers={maxUsers} maxPosts={maxPosts} />

      <RealtimeActivitySection />
    </div>
  )
}
