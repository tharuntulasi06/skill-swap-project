import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  BookOpen,
  MessageSquare,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Eye,
  MoreVertical,
  UserCheck,
  UserX,
  Flag,
  Shield,
  BarChart3,
  Activity,
  Calendar,
  Award,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock admin data
  const platformStats = {
    totalUsers: 2847,
    activeUsers: 1923,
    totalSessions: 8472,
    completedSessions: 7891,
    pendingRequests: 247,
    reportedIssues: 12,
    monthlyGrowth: 24,
    averageRating: 4.7,
  };

  const recentUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@stanford.edu",
      college: "Stanford University",
      joinDate: "2024-01-15",
      status: "active",
      sessions: 23,
      rating: 4.8,
      verified: true,
    },
    {
      id: 2,
      name: "Bob Chen",
      email: "bob@mit.edu",
      college: "MIT",
      joinDate: "2024-01-14",
      status: "pending",
      sessions: 0,
      rating: 0,
      verified: false,
    },
    {
      id: 3,
      name: "Carol Rodriguez",
      email: "carol@berkeley.edu",
      college: "UC Berkeley",
      joinDate: "2024-01-13",
      status: "active",
      sessions: 15,
      rating: 4.6,
      verified: true,
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@yale.edu",
      college: "Yale University",
      joinDate: "2024-01-12",
      status: "suspended",
      sessions: 8,
      rating: 3.2,
      verified: true,
    },
  ];

  const reportedContent = [
    {
      id: 1,
      type: "User Profile",
      reporter: "Jane Smith",
      reported: "John Doe",
      reason: "Inappropriate profile content",
      date: "2024-01-15",
      status: "pending",
      severity: "medium",
    },
    {
      id: 2,
      type: "Message",
      reporter: "Mike Johnson",
      reported: "Sarah Wilson",
      reason: "Spam messages",
      date: "2024-01-14",
      status: "resolved",
      severity: "low",
    },
    {
      id: 3,
      type: "Session",
      reporter: "Emily Chen",
      reported: "Alex Brown",
      reason: "No-show for scheduled session",
      date: "2024-01-13",
      status: "pending",
      severity: "high",
    },
  ];

  const skillCategories = [
    { name: "Technology", count: 847, growth: "+12%" },
    { name: "Languages", count: 623, growth: "+8%" },
    { name: "Creative Arts", count: 445, growth: "+15%" },
    { name: "Business", count: 332, growth: "+6%" },
    { name: "Academic", count: 289, growth: "+10%" },
    { name: "Music", count: 187, growth: "+18%" },
  ];

  const sessionAnalytics = [
    { month: "Oct", sessions: 1240, completed: 1156 },
    { month: "Nov", sessions: 1387, completed: 1298 },
    { month: "Dec", sessions: 1523, completed: 1445 },
    { month: "Jan", sessions: 1689, completed: 1612 },
  ];

  const sidebarItems = [
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Users, label: "User Management", href: "/admin/users" },
    { icon: BookOpen, label: "Content Management", href: "/admin/content" },
    { icon: Flag, label: "Reports & Moderation", href: "/admin/moderation" },
    { icon: Settings, label: "Platform Settings", href: "/admin/settings" },
  ];

  const handleUserAction = (userId: number, action: string) => {
    console.log(`${action} user ${userId}`);
    // In a real app, this would call the admin API
  };

  const handleReportAction = (reportId: number, action: string) => {
    console.log(`${action} report ${reportId}`);
    // In a real app, this would call the admin API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Admin Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-[calc(100vh-4rem)]">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-red-600" />
              <span className="font-semibold text-gray-900">Admin Panel</span>
            </div>
          </div>
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage your SkillSwap platform and community
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Announcement
                </Button>
              </div>
            </div>

            {/* Platform Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Users</p>
                      <p className="text-2xl font-bold">
                        {platformStats.totalUsers.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600">
                        +{platformStats.monthlyGrowth}% this month
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Sessions</p>
                      <p className="text-2xl font-bold">
                        {platformStats.totalSessions.toLocaleString()}
                      </p>
                      <p className="text-xs text-green-600">
                        {platformStats.completedSessions} completed
                      </p>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Pending Requests</p>
                      <p className="text-2xl font-bold">
                        {platformStats.pendingRequests}
                      </p>
                      <p className="text-xs text-yellow-600">Needs attention</p>
                    </div>
                    <Calendar className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Reported Issues</p>
                      <p className="text-2xl font-bold">
                        {platformStats.reportedIssues}
                      </p>
                      <p className="text-xs text-red-600">Requires review</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Dashboard Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">User Management</TabsTrigger>
                <TabsTrigger value="content">Content Moderation</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Recent Users */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Users</CardTitle>
                      <CardDescription>
                        Latest user registrations and activity
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentUsers.slice(0, 5).map((user) => (
                          <div
                            key={user.id}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback>
                                  {user.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">
                                  {user.college}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant={
                                  user.status === "active"
                                    ? "default"
                                    : user.status === "pending"
                                      ? "secondary"
                                      : "destructive"
                                }
                              >
                                {user.status}
                              </Badge>
                              {user.verified && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skill Categories */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Popular Skill Categories</CardTitle>
                      <CardDescription>
                        Most active skill exchange categories
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {skillCategories.map((category) => (
                          <div
                            key={category.name}
                            className="flex items-center justify-between"
                          >
                            <div>
                              <p className="font-medium">{category.name}</p>
                              <p className="text-sm text-gray-600">
                                {category.count} active exchanges
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className="text-green-700 border-green-200"
                            >
                              {category.growth}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Users Tab */}
              <TabsContent value="users">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>User Management</CardTitle>
                      <CardDescription>
                        Manage user accounts and permissions
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>User</TableHead>
                          <TableHead>College</TableHead>
                          <TableHead>Join Date</TableHead>
                          <TableHead>Sessions</TableHead>
                          <TableHead>Rating</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentUsers.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>
                                    {user.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">{user.name}</p>
                                  <p className="text-sm text-gray-600">
                                    {user.email}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{user.college}</TableCell>
                            <TableCell>{user.joinDate}</TableCell>
                            <TableCell>{user.sessions}</TableCell>
                            <TableCell>
                              {user.rating > 0 ? user.rating : "N/A"}
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={
                                    user.status === "active"
                                      ? "default"
                                      : user.status === "pending"
                                        ? "secondary"
                                        : "destructive"
                                  }
                                >
                                  {user.status}
                                </Badge>
                                {user.verified && (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                )}
                              </div>
                            </TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreVertical className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUserAction(user.id, "view")
                                    }
                                  >
                                    <Eye className="h-4 w-4 mr-2" />
                                    View Profile
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUserAction(user.id, "verify")
                                    }
                                  >
                                    <UserCheck className="h-4 w-4 mr-2" />
                                    Verify User
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleUserAction(user.id, "suspend")
                                    }
                                    className="text-red-600"
                                  >
                                    <UserX className="h-4 w-4 mr-2" />
                                    Suspend User
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Content Moderation Tab */}
              <TabsContent value="content">
                <Card>
                  <CardHeader>
                    <CardTitle>Content Moderation</CardTitle>
                    <CardDescription>
                      Review reported content and user behavior
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Type</TableHead>
                          <TableHead>Reporter</TableHead>
                          <TableHead>Reported User</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Severity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {reportedContent.map((report) => (
                          <TableRow key={report.id}>
                            <TableCell>
                              <Badge variant="outline">{report.type}</Badge>
                            </TableCell>
                            <TableCell>{report.reporter}</TableCell>
                            <TableCell>{report.reported}</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {report.reason}
                            </TableCell>
                            <TableCell>{report.date}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  report.severity === "high"
                                    ? "destructive"
                                    : report.severity === "medium"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {report.severity}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  report.status === "resolved"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {report.status}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    handleReportAction(report.id, "resolve")
                                  }
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() =>
                                    handleReportAction(report.id, "dismiss")
                                  }
                                >
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Analytics Tab */}
              <TabsContent value="analytics">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Session Analytics</CardTitle>
                      <CardDescription>
                        Monthly session completion trends
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {sessionAnalytics.map((data) => (
                          <div
                            key={data.month}
                            className="flex items-center justify-between"
                          >
                            <span className="font-medium">{data.month}</span>
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-gray-600">
                                {data.sessions} total
                              </span>
                              <span className="text-sm text-green-600">
                                {data.completed} completed
                              </span>
                              <div className="w-24 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-green-600 h-2 rounded-full"
                                  style={{
                                    width: `${(data.completed / data.sessions) * 100}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Platform Health</CardTitle>
                      <CardDescription>
                        Key performance indicators
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span>Average Rating</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold">
                              {platformStats.averageRating}
                            </span>
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Award
                                  key={i}
                                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>User Satisfaction</span>
                          <span className="font-bold text-green-600">94%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Response Time</span>
                          <span className="font-bold">2.3 hours avg</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Platform Uptime</span>
                          <span className="font-bold text-green-600">
                            99.9%
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
