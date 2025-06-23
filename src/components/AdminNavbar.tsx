import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Search,
  Bell,
  Settings,
  LogOut,
  User,
  Shield,
  AlertTriangle,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/admin/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Mock admin notifications
  const adminNotifications = [
    {
      id: 1,
      type: "urgent",
      title: "High Priority Report",
      message: "User harassment report requires immediate attention",
      time: "2 min ago",
      icon: AlertTriangle,
      color: "bg-red-500",
    },
    {
      id: 2,
      type: "info",
      title: "New User Surge",
      message: "50+ new registrations in the last hour",
      time: "15 min ago",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      id: 3,
      type: "warning",
      title: "System Performance",
      message: "Server response time above threshold",
      time: "1 hour ago",
      icon: BarChart3,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      type: "info",
      title: "Content Flagged",
      message: "3 new content moderation requests",
      time: "2 hours ago",
      icon: MessageSquare,
      color: "bg-purple-500",
    },
  ];

  const urgentCount = adminNotifications.filter(
    (n) => n.type === "urgent",
  ).length;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Admin Badge */}
          <Link to="/admin/dashboard" className="flex items-center gap-2">
            <div className="bg-red-600 rounded-lg p-2">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">SkillSwap</span>
              <Badge variant="destructive" className="text-xs">
                ADMIN
              </Badge>
            </div>
          </Link>

          {/* Admin Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search users, content, reports..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 border-red-200 focus:border-red-400"
              />
            </form>
          </div>

          {/* Right side - Admin Controls */}
          <div className="flex items-center gap-4">
            {/* Quick Actions */}
            <Button variant="outline" size="sm" asChild>
              <Link to="/dashboard">
                <User className="h-4 w-4 mr-2" />
                User View
              </Link>
            </Button>

            {/* Admin Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {urgentCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                      {urgentCount}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="font-semibold text-base border-b pb-2">
                  Admin Notifications
                </DropdownMenuLabel>
                <div className="max-h-96 overflow-y-auto">
                  {adminNotifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className="flex items-start gap-3 p-4 cursor-pointer"
                    >
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${notification.color}`}
                      ></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <notification.icon className="h-4 w-4" />
                          <p className="font-medium text-sm">
                            {notification.title}
                          </p>
                          {notification.type === "urgent" && (
                            <Badge variant="destructive" className="text-xs">
                              URGENT
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 mb-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-400">
                          {notification.time}
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-red-600 font-medium">
                  View All Admin Alerts
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Admin Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10 border-2 border-red-200">
                    <AvatarImage src="/placeholder.svg" alt="Admin Profile" />
                    <AvatarFallback className="bg-red-100 text-red-700">
                      AD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Admin User
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      admin@skillswap.com
                    </p>
                    <Badge variant="destructive" className="w-fit text-xs mt-1">
                      Administrator
                    </Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Admin Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/admin/settings"
                    className="flex items-center cursor-pointer"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Platform Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/dashboard"
                    className="flex items-center cursor-pointer text-blue-600"
                  >
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Switch to User View
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-red-600"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
