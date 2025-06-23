import { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Search,
  Filter,
  MoreVertical,
  Eye,
  UserCheck,
  UserX,
  Mail,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Edit,
  Trash2,
  Download,
  Plus,
  Users,
  Clock,
  Star,
  MessageSquare,
  FileText,
} from "lucide-react";

const AdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mock user data
  const users = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@stanford.edu",
      college: "Stanford University",
      major: "Computer Science",
      year: "Senior",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      status: "active",
      role: "user",
      sessions: 23,
      rating: 4.8,
      earnings: 575,
      verified: true,
      skillsTeaching: ["JavaScript", "React", "Node.js"],
      skillsLearning: ["Machine Learning", "Data Science"],
      violations: 0,
      reports: 0,
    },
    {
      id: 2,
      name: "Bob Chen",
      email: "bob@mit.edu",
      college: "MIT",
      major: "Electrical Engineering",
      year: "Graduate",
      joinDate: "2024-01-14",
      lastActive: "1 day ago",
      status: "pending",
      role: "user",
      sessions: 0,
      rating: 0,
      earnings: 0,
      verified: false,
      skillsTeaching: ["Python", "AI"],
      skillsLearning: ["Web Development"],
      violations: 0,
      reports: 0,
    },
    {
      id: 3,
      name: "Carol Rodriguez",
      email: "carol@berkeley.edu",
      college: "UC Berkeley",
      major: "Business Administration",
      year: "Junior",
      joinDate: "2024-01-13",
      lastActive: "5 minutes ago",
      status: "active",
      role: "mentor",
      sessions: 45,
      rating: 4.9,
      earnings: 1125,
      verified: true,
      skillsTeaching: ["Spanish", "Business Strategy"],
      skillsLearning: ["Digital Marketing"],
      violations: 0,
      reports: 0,
    },
    {
      id: 4,
      name: "David Kim",
      email: "david@yale.edu",
      college: "Yale University",
      major: "Art History",
      year: "Senior",
      joinDate: "2024-01-12",
      lastActive: "3 days ago",
      status: "suspended",
      role: "user",
      sessions: 8,
      rating: 3.2,
      earnings: 200,
      verified: true,
      skillsTeaching: ["Photography"],
      skillsLearning: ["Graphic Design"],
      violations: 2,
      reports: 3,
    },
    {
      id: 5,
      name: "Emma Wilson",
      email: "emma@oxford.edu",
      college: "Oxford University",
      major: "English Literature",
      year: "Graduate",
      joinDate: "2024-01-10",
      lastActive: "1 hour ago",
      status: "active",
      role: "admin",
      sessions: 67,
      rating: 4.7,
      earnings: 1675,
      verified: true,
      skillsTeaching: ["Creative Writing", "Literature"],
      skillsLearning: ["Digital Publishing"],
      violations: 0,
      reports: 0,
    },
  ];

  const suspendedUsers = users.filter((user) => user.status === "suspended");
  const pendingUsers = users.filter((user) => user.status === "pending");
  const recentUsers = users
    .filter((user) => user.joinDate >= "2024-01-10")
    .sort(
      (a, b) => new Date(b.joinDate).getTime() - new Date(a.joinDate).getTime(),
    );

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.college.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    const matchesRole = roleFilter === "all" || user.role === roleFilter;

    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleUserAction = (userId: number, action: string) => {
    const user = users.find((u) => u.id === userId);
    console.log(`${action} user:`, user);
    // In a real app, this would call the admin API
  };

  const openUserDetails = (user: any) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800";
      case "mentor":
        return "bg-blue-100 text-blue-800";
      case "user":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              User Management
            </h1>
            <p className="text-gray-600">
              Manage user accounts, permissions, and platform access
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Users
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Admin
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold">{pendingUsers.length}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Suspended</p>
                  <p className="text-2xl font-bold">{suspendedUsers.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New This Week</p>
                  <p className="text-2xl font-bold">{recentUsers.length}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="pending">
                Pending ({pendingUsers.length})
              </TabsTrigger>
              <TabsTrigger value="suspended">
                Suspended ({suspendedUsers.length})
              </TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
            </TabsList>

            {/* Search and Filters */}
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="mentor">Mentor</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* All Users Tab */}
          <TabsContent value="all">
            <Card>
              <CardHeader>
                <CardTitle>All Users ({filteredUsers.length})</CardTitle>
                <CardDescription>
                  Complete list of platform users with management controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>College & Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src="/placeholder.svg" />
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
                        <TableCell>
                          <div>
                            <p className="font-medium">{user.college}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge
                                variant="outline"
                                className={getRoleColor(user.role)}
                              >
                                {user.role}
                              </Badge>
                              {user.verified && (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{user.sessions} sessions</p>
                            <p className="text-gray-600">
                              ${user.earnings} earned
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {user.rating > 0 ? (
                              <>
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">{user.rating}</span>
                              </>
                            ) : (
                              <span className="text-sm text-gray-400">
                                No rating
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">{user.lastActive}</span>
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
                                onClick={() => openUserDetails(user)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleUserAction(user.id, "message")
                                }
                              >
                                <Mail className="h-4 w-4 mr-2" />
                                Send Message
                              </DropdownMenuItem>
                              {user.status === "pending" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUserAction(user.id, "verify")
                                  }
                                >
                                  <UserCheck className="h-4 w-4 mr-2" />
                                  Verify User
                                </DropdownMenuItem>
                              )}
                              {user.status === "active" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUserAction(user.id, "suspend")
                                  }
                                  className="text-red-600"
                                >
                                  <UserX className="h-4 w-4 mr-2" />
                                  Suspend User
                                </DropdownMenuItem>
                              )}
                              {user.status === "suspended" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleUserAction(user.id, "reactivate")
                                  }
                                  className="text-green-600"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Reactivate
                                </DropdownMenuItem>
                              )}
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

          {/* Pending Users Tab */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Users ({pendingUsers.length})</CardTitle>
                <CardDescription>
                  Users awaiting verification and approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-600">
                            {user.college} • {user.major}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openUserDetails(user)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleUserAction(user.id, "approve")}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleUserAction(user.id, "reject")}
                        >
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Suspended Users Tab */}
          <TabsContent value="suspended">
            <Card>
              <CardHeader>
                <CardTitle>Suspended Users ({suspendedUsers.length})</CardTitle>
                <CardDescription>
                  Users currently suspended from the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suspendedUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-sm text-red-600">
                              {user.violations} violations
                            </span>
                            <span className="text-sm text-red-600">
                              {user.reports} reports
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openUserDetails(user)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          Review Case
                        </Button>
                        <Button
                          size="sm"
                          onClick={() =>
                            handleUserAction(user.id, "reactivate")
                          }
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Reactivate
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleUserAction(user.id, "ban")}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Permanent Ban
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Users Tab */}
          <TabsContent value="recent">
            <Card>
              <CardHeader>
                <CardTitle>Recent Users ({recentUsers.length})</CardTitle>
                <CardDescription>
                  Latest user registrations and new members
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>
                            {user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{user.name}</h4>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <p className="text-sm text-gray-600">
                            Joined {user.joinDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openUserDetails(user)}
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* User Details Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>User Details: {selectedUser?.name}</DialogTitle>
              <DialogDescription>
                Complete user information and account management
              </DialogDescription>
            </DialogHeader>
            {selectedUser && (
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarFallback className="text-lg">
                          {selectedUser.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {selectedUser.name}
                        </h3>
                        <p className="text-gray-600">{selectedUser.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            className={getStatusColor(selectedUser.status)}
                          >
                            {selectedUser.status}
                          </Badge>
                          <Badge className={getRoleColor(selectedUser.role)}>
                            {selectedUser.role}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <Label className="text-gray-600">College</Label>
                        <p className="font-medium">{selectedUser.college}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Major</Label>
                        <p className="font-medium">{selectedUser.major}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Year</Label>
                        <p className="font-medium">{selectedUser.year}</p>
                      </div>
                      <div>
                        <Label className="text-gray-600">Join Date</Label>
                        <p className="font-medium">{selectedUser.joinDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4 text-center">
                          <MessageSquare className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                          <p className="text-2xl font-bold">
                            {selectedUser.sessions}
                          </p>
                          <p className="text-sm text-gray-600">Sessions</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4 text-center">
                          <Star className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
                          <p className="text-2xl font-bold">
                            {selectedUser.rating || "N/A"}
                          </p>
                          <p className="text-sm text-gray-600">Rating</p>
                        </CardContent>
                      </Card>
                    </div>
                    <Card>
                      <CardContent className="p-4 text-center">
                        <p className="text-lg font-bold text-green-600">
                          ${selectedUser.earnings}
                        </p>
                        <p className="text-sm text-gray-600">Total Earnings</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">
                      Skills Teaching
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedUser.skillsTeaching.map((skill: string) => (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">
                      Skills Learning
                    </Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedUser.skillsLearning.map((skill: string) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Safety Info */}
                {(selectedUser.violations > 0 || selectedUser.reports > 0) && (
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-red-600" />
                        <Label className="text-red-800 font-medium">
                          Safety Alerts
                        </Label>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-red-600">
                            {selectedUser.violations} Policy Violations
                          </p>
                        </div>
                        <div>
                          <p className="text-red-600">
                            {selectedUser.reports} User Reports
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => handleUserAction(selectedUser.id, "message")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  {selectedUser.status === "active" ? (
                    <Button
                      variant="destructive"
                      onClick={() =>
                        handleUserAction(selectedUser.id, "suspend")
                      }
                    >
                      <UserX className="h-4 w-4 mr-2" />
                      Suspend User
                    </Button>
                  ) : selectedUser.status === "suspended" ? (
                    <Button
                      onClick={() =>
                        handleUserAction(selectedUser.id, "reactivate")
                      }
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Reactivate
                    </Button>
                  ) : (
                    <Button
                      onClick={() =>
                        handleUserAction(selectedUser.id, "approve")
                      }
                    >
                      <UserCheck className="h-4 w-4 mr-2" />
                      Approve User
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminUsers;
