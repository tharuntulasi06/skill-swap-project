import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoleSwitcher from "./RoleSwitcher";
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
import {
  GraduationCap,
  Search,
  Bell,
  Settings,
  LogOut,
  User,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SkillSwap</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="search"
                placeholder="Search skills, people, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </form>
          </div>

          {/* Right side - Notifications and Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80" align="end">
                <DropdownMenuLabel className="font-semibold text-base border-b pb-2">
                  Notifications
                </DropdownMenuLabel>
                <div className="max-h-96 overflow-y-auto">
                  <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">
                        New skill exchange request
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Sarah Chen wants to learn React from you
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        2 minutes ago
                      </p>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Session confirmed</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Your React session with Alex is confirmed for tomorrow
                        2PM
                      </p>
                      <p className="text-xs text-gray-400 mt-1">1 hour ago</p>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">New message</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Emily sent you a message about Spanish lessons
                      </p>
                      <p className="text-xs text-gray-400 mt-1">3 hours ago</p>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer opacity-60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Session completed</p>
                      <p className="text-xs text-gray-600 mt-1">
                        Your JavaScript session with Mike has been completed
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                    </div>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="flex items-start gap-3 p-4 cursor-pointer opacity-60">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">Profile viewed</p>
                      <p className="text-xs text-gray-600 mt-1">
                        David Kim viewed your profile
                      </p>
                      <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                    </div>
                  </DropdownMenuItem>
                </div>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-center text-blue-600 font-medium">
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="bg-primary text-white">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john@university.edu
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center cursor-pointer"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/settings"
                    className="flex items-center cursor-pointer"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
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

export default Navbar;
