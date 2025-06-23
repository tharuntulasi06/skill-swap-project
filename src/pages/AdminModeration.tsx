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
  CheckCircle,
  XCircle,
  Flag,
  AlertTriangle,
  Shield,
  MessageSquare,
  User,
  Calendar,
  Clock,
  TrendingUp,
  BarChart3,
  Download,
  FileText,
  UserX,
  Ban,
  Mail,
} from "lucide-react";

const AdminModeration = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [reportTypeFilter, setReportTypeFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mock reports data
  const reports = [
    {
      id: 1,
      type: "User Profile",
      reportedBy: {
        name: "Jane Smith",
        email: "jane@stanford.edu",
        id: 123,
      },
      reportedUser: {
        name: "John Doe",
        email: "john@mit.edu",
        id: 456,
      },
      reportedContent: "Inappropriate profile content and fake credentials",
      reason: "Inappropriate Content",
      description:
        "User has posted misleading information about their qualifications and inappropriate images in their profile.",
      severity: "medium",
      status: "pending",
      createdAt: "2024-01-15",
      lastUpdated: "2024-01-15",
      assignedTo: "Moderation Team",
      evidence: ["Screenshot 1", "Screenshot 2"],
      previousReports: 0,
    },
    {
      id: 2,
      type: "Message",
      reportedBy: {
        name: "Mike Johnson",
        email: "mike@berkeley.edu",
        id: 789,
      },
      reportedUser: {
        name: "Sarah Wilson",
        email: "sarah@yale.edu",
        id: 321,
      },
      reportedContent: "Spam message with external links",
      reason: "Spam",
      description:
        "User is sending unsolicited messages with links to external tutoring services, bypassing platform guidelines.",
      severity: "low",
      status: "resolved",
      createdAt: "2024-01-14",
      lastUpdated: "2024-01-14",
      assignedTo: "Auto-Moderation",
      evidence: ["Message thread"],
      previousReports: 2,
      resolution: "Warning sent to user, content removed",
    },
    {
      id: 3,
      type: "Session",
      reportedBy: {
        name: "Emily Chen",
        email: "emily@columbia.edu",
        id: 654,
      },
      reportedUser: {
        name: "Alex Brown",
        email: "alex@nyu.edu",
        id: 987,
      },
      reportedContent: "No-show for scheduled session, no communication",
      reason: "No-show",
      description:
        "Scheduled tutor did not show up for confirmed session and has not responded to messages. This is the third occurrence.",
      severity: "high",
      status: "pending",
      createdAt: "2024-01-13",
      lastUpdated: "2024-01-13",
      assignedTo: "Senior Moderator",
      evidence: ["Session logs", "Message history"],
      previousReports: 3,
    },
    {
      id: 4,
      type: "Harassment",
      reportedBy: {
        name: "Lisa Wang",
        email: "lisa@princeton.edu",
        id: 111,
      },
      reportedUser: {
        name: "David Kim",
        email: "david@harvard.edu",
        id: 222,
      },
      reportedContent:
        "Persistent unwanted messages and inappropriate behavior",
      reason: "Harassment",
      description:
        "User continues to send inappropriate messages despite being asked to stop. Messages contain personal attacks and threats.",
      severity: "high",
      status: "under_review",
      createdAt: "2024-01-12",
      lastUpdated: "2024-01-13",
      assignedTo: "Legal Team",
      evidence: ["Message screenshots", "Email thread"],
      previousReports: 1,
    },
    {
      id: 5,
      type: "Fake Profile",
      reportedBy: {
        name: "Tom Rodriguez",
        email: "tom@caltech.edu",
        id: 333,
      },
      reportedUser: {
        name: "Fake User",
        email: "fake@example.com",
        id: 444,
      },
      reportedContent: "Profile using stolen photos and fake credentials",
      reason: "Identity Theft",
      description:
        "User profile contains stolen photos from a professional website and claims false academic credentials.",
      severity: "high",
      status: "escalated",
      createdAt: "2024-01-11",
      lastUpdated: "2024-01-14",
      assignedTo: "Security Team",
      evidence: ["Reverse image search", "Academic verification"],
      previousReports: 0,
    },
  ];

  const moderationActions = [
    {
      id: 1,
      action: "User Suspended",
      target: "David Kim",
      moderator: "Admin Team",
      reason: "Harassment violation",
      timestamp: "2024-01-15 10:30",
      duration: "7 days",
    },
    {
      id: 2,
      action: "Content Removed",
      target: "Inappropriate post by John Doe",
      moderator: "Auto-Moderation",
      reason: "Community guidelines violation",
      timestamp: "2024-01-15 09:15",
      duration: "Permanent",
    },
    {
      id: 3,
      action: "Warning Issued",
      target: "Sarah Wilson",
      moderator: "Moderation Team",
      reason: "Spam messaging",
      timestamp: "2024-01-14 14:20",
      duration: "N/A",
    },
    {
      id: 4,
      action: "Account Verification Revoked",
      target: "Fake User",
      moderator: "Security Team",
      reason: "Identity verification failed",
      timestamp: "2024-01-13 16:45",
      duration: "Permanent",
    },
  ];

  const moderationStats = {
    totalReports: reports.length,
    pendingReports: reports.filter((r) => r.status === "pending").length,
    resolvedToday: 12,
    averageResolutionTime: "2.3 hours",
    escalatedCases: reports.filter((r) => r.status === "escalated").length,
    autoModerated: 45,
  };

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.reportedUser.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      report.reportedBy.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      report.reason.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      reportTypeFilter === "all" || report.type === reportTypeFilter;
    const matchesSeverity =
      severityFilter === "all" || report.severity === severityFilter;
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;

    return matchesSearch && matchesType && matchesSeverity && matchesStatus;
  });

  const handleReportAction = (reportId: number, action: string) => {
    const report = reports.find((r) => r.id === reportId);
    console.log(`${action} report:`, report);
    // In a real app, this would call the admin API
  };

  const openReportDetails = (report: any) => {
    setSelectedReport(report);
    setDialogOpen(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "under_review":
        return "bg-blue-100 text-blue-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      case "escalated":
        return "bg-red-100 text-red-800";
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
              Reports & Moderation
            </h1>
            <p className="text-gray-600">
              Review user reports, manage content moderation, and maintain
              platform safety
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Reports
            </Button>
            <Button>
              <Shield className="h-4 w-4 mr-2" />
              Safety Guidelines
            </Button>
          </div>
        </div>

        {/* Moderation Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reports</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.totalReports}
                  </p>
                </div>
                <Flag className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.pendingReports}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Resolved Today</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.resolvedToday}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Resolution</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.averageResolutionTime}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Escalated</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.escalatedCases}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Auto-Moderated</p>
                  <p className="text-2xl font-bold">
                    {moderationStats.autoModerated}
                  </p>
                </div>
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="reports" className="space-y-6">
          <TabsList>
            <TabsTrigger value="reports">All Reports</TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({moderationStats.pendingReports})
            </TabsTrigger>
            <TabsTrigger value="escalated">
              Escalated ({moderationStats.escalatedCases})
            </TabsTrigger>
            <TabsTrigger value="actions">Recent Actions</TabsTrigger>
          </TabsList>

          {/* Search and Filters */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select
                value={reportTypeFilter}
                onValueChange={setReportTypeFilter}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Report Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="User Profile">User Profile</SelectItem>
                  <SelectItem value="Message">Message</SelectItem>
                  <SelectItem value="Session">Session</SelectItem>
                  <SelectItem value="Harassment">Harassment</SelectItem>
                  <SelectItem value="Fake Profile">Fake Profile</SelectItem>
                </SelectContent>
              </Select>
              <Select value={severityFilter} onValueChange={setSeverityFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="escalated">Escalated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* All Reports Tab */}
          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>All Reports ({filteredReports.length})</CardTitle>
                <CardDescription>
                  Complete list of user reports with moderation controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Details</TableHead>
                      <TableHead>Reported User</TableHead>
                      <TableHead>Reporter</TableHead>
                      <TableHead>Type & Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredReports.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{report.reason}</p>
                            <p className="text-sm text-gray-600 truncate max-w-xs">
                              {report.description}
                            </p>
                            {report.previousReports > 0 && (
                              <Badge variant="destructive" className="text-xs">
                                {report.previousReports} previous reports
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {report.reportedUser.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">
                                {report.reportedUser.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {report.reportedUser.email}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">
                              {report.reportedBy.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {report.reportedBy.email}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1">
                            <Badge variant="outline">{report.type}</Badge>
                            <Badge
                              className={getSeverityColor(report.severity)}
                            >
                              {report.severity}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(report.status)}>
                            {report.status.replace("_", " ")}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{report.createdAt}</p>
                            <p className="text-gray-600">
                              Updated: {report.lastUpdated}
                            </p>
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
                                onClick={() => openReportDetails(report)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              {report.status === "pending" && (
                                <>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleReportAction(report.id, "resolve")
                                    }
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Resolve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleReportAction(report.id, "escalate")
                                    }
                                  >
                                    <AlertTriangle className="h-4 w-4 mr-2" />
                                    Escalate
                                  </DropdownMenuItem>
                                </>
                              )}
                              <DropdownMenuItem
                                onClick={() =>
                                  handleReportAction(report.id, "contact")
                                }
                              >
                                <Mail className="h-4 w-4 mr-2" />
                                Contact Reporter
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleReportAction(report.id, "dismiss")
                                }
                                className="text-gray-600"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Dismiss
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

          {/* Pending Reports Tab */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>
                  Pending Reports ({moderationStats.pendingReports})
                </CardTitle>
                <CardDescription>
                  Reports requiring immediate attention and action
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports
                    .filter((report) => report.status === "pending")
                    .map((report) => (
                      <div
                        key={report.id}
                        className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge
                                className={getSeverityColor(report.severity)}
                              >
                                {report.severity} severity
                              </Badge>
                              <Badge variant="outline">{report.type}</Badge>
                            </div>
                            <h4 className="font-semibold mb-1">
                              {report.reason}
                            </h4>
                            <p className="text-gray-700 mb-2">
                              {report.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>Reported by: {report.reportedBy.name}</span>
                              <span>Target: {report.reportedUser.name}</span>
                              <span>Created: {report.createdAt}</span>
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openReportDetails(report)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Review
                            </Button>
                            <Button
                              size="sm"
                              onClick={() =>
                                handleReportAction(report.id, "resolve")
                              }
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Resolve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                handleReportAction(report.id, "escalate")
                              }
                            >
                              <AlertTriangle className="h-4 w-4 mr-2" />
                              Escalate
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Escalated Reports Tab */}
          <TabsContent value="escalated">
            <Card>
              <CardHeader>
                <CardTitle>
                  Escalated Reports ({moderationStats.escalatedCases})
                </CardTitle>
                <CardDescription>
                  High-priority cases requiring senior moderation or legal
                  review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports
                    .filter((report) => report.status === "escalated")
                    .map((report) => (
                      <div
                        key={report.id}
                        className="p-4 bg-red-50 border border-red-200 rounded-lg"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <AlertTriangle className="h-5 w-5 text-red-600" />
                              <Badge variant="destructive">ESCALATED</Badge>
                              <Badge variant="outline">{report.type}</Badge>
                            </div>
                            <h4 className="font-semibold mb-1">
                              {report.reason}
                            </h4>
                            <p className="text-gray-700 mb-2">
                              {report.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                              <span>Assigned to: {report.assignedTo}</span>
                              <span>
                                Evidence: {report.evidence.length} items
                              </span>
                            </div>
                            <div className="text-sm text-red-600">
                              Previous reports: {report.previousReports}
                            </div>
                          </div>
                          <div className="flex gap-2 ml-4">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => openReportDetails(report)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Full Review
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() =>
                                handleReportAction(report.id, "suspend")
                              }
                            >
                              <UserX className="h-4 w-4 mr-2" />
                              Suspend User
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Actions Tab */}
          <TabsContent value="actions">
            <Card>
              <CardHeader>
                <CardTitle>Recent Moderation Actions</CardTitle>
                <CardDescription>
                  Log of recent moderation decisions and actions taken
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moderationActions.map((action) => (
                    <div
                      key={action.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold">{action.action}</h4>
                          <p className="text-sm text-gray-600">
                            Target: {action.target}
                          </p>
                          <p className="text-sm text-gray-600">
                            Reason: {action.reason}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        <p>By {action.moderator}</p>
                        <p>{action.timestamp}</p>
                        <p>Duration: {action.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Report Details Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                Report Details: {selectedReport?.reason}
              </DialogTitle>
              <DialogDescription>
                Complete information and moderation tools for this report
              </DialogDescription>
            </DialogHeader>
            {selectedReport && (
              <div className="space-y-6">
                {/* Report Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">Report Type</Label>
                      <div className="flex gap-2 mt-1">
                        <Badge variant="outline">{selectedReport.type}</Badge>
                        <Badge
                          className={getSeverityColor(selectedReport.severity)}
                        >
                          {selectedReport.severity} severity
                        </Badge>
                        <Badge
                          className={getStatusColor(selectedReport.status)}
                        >
                          {selectedReport.status.replace("_", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Description</Label>
                      <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                        <p>{selectedReport.description}</p>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">
                        Reported Content
                      </Label>
                      <div className="mt-1 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p>{selectedReport.reportedContent}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">
                        Reported User
                      </Label>
                      <div className="flex items-center gap-3 mt-1 p-3 bg-gray-50 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {selectedReport.reportedUser.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {selectedReport.reportedUser.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedReport.reportedUser.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Reporter</Label>
                      <div className="flex items-center gap-3 mt-1 p-3 bg-gray-50 rounded-lg">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>
                            {selectedReport.reportedBy.name
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {selectedReport.reportedBy.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedReport.reportedBy.email}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Created</Label>
                        <p className="text-sm mt-1">
                          {selectedReport.createdAt}
                        </p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">
                          Last Updated
                        </Label>
                        <p className="text-sm mt-1">
                          {selectedReport.lastUpdated}
                        </p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">
                          Assigned To
                        </Label>
                        <p className="text-sm mt-1">
                          {selectedReport.assignedTo}
                        </p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">
                          Previous Reports
                        </Label>
                        <p className="text-sm mt-1">
                          {selectedReport.previousReports}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Evidence */}
                {selectedReport.evidence.length > 0 && (
                  <div>
                    <Label className="text-sm font-medium">Evidence</Label>
                    <div className="flex gap-2 mt-2">
                      {selectedReport.evidence.map((item: string) => (
                        <Badge key={item} variant="secondary">
                          <FileText className="h-3 w-3 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Resolution */}
                {selectedReport.resolution && (
                  <div>
                    <Label className="text-sm font-medium">Resolution</Label>
                    <div className="mt-1 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p>{selectedReport.resolution}</p>
                    </div>
                  </div>
                )}

                {/* Moderation Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  {selectedReport.status === "pending" && (
                    <>
                      <Button
                        onClick={() =>
                          handleReportAction(selectedReport.id, "resolve")
                        }
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Resolve Report
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          handleReportAction(selectedReport.id, "escalate")
                        }
                      >
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Escalate
                      </Button>
                    </>
                  )}
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleReportAction(selectedReport.id, "suspend_user")
                    }
                  >
                    <UserX className="h-4 w-4 mr-2" />
                    Suspend User
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleReportAction(selectedReport.id, "contact")
                    }
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Users
                  </Button>
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

export default AdminModeration;
