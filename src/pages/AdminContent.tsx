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
  Edit,
  Trash2,
  Plus,
  FileText,
  MessageSquare,
  User,
  Calendar,
  AlertTriangle,
  Shield,
  Download,
  Upload,
  BookOpen,
  Image as ImageIcon,
  Video,
} from "lucide-react";

const AdminContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [contentTypeFilter, setContentTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedContent, setSelectedContent] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Mock content data
  const contentItems = [
    {
      id: 1,
      type: "profile",
      title: "Profile: Advanced React Developer",
      author: "Sarah Chen",
      authorEmail: "sarah@mit.edu",
      content:
        "Experienced React developer with 5+ years in modern web development. Specialized in TypeScript, Redux, and performance optimization.",
      status: "published",
      createdAt: "2024-01-15",
      lastModified: "2024-01-15",
      reports: 0,
      views: 145,
      category: "User Profile",
      tags: ["React", "TypeScript", "Web Development"],
      flags: [],
    },
    {
      id: 2,
      type: "skill_description",
      title: "Machine Learning Fundamentals Course",
      author: "Alex Thompson",
      authorEmail: "alex@stanford.edu",
      content:
        "Comprehensive introduction to ML algorithms, including supervised and unsupervised learning. Learn Python, scikit-learn, and TensorFlow.",
      status: "pending",
      createdAt: "2024-01-14",
      lastModified: "2024-01-14",
      reports: 1,
      views: 23,
      category: "Skill Description",
      tags: ["Machine Learning", "Python", "AI"],
      flags: ["Inappropriate Language"],
    },
    {
      id: 3,
      type: "message",
      title: "Session Request Message",
      author: "Bob Chen",
      authorEmail: "bob@mit.edu",
      content:
        "Hi! I'm interested in learning Spanish. I can offer tutoring in mathematics and statistics in exchange.",
      status: "flagged",
      createdAt: "2024-01-13",
      lastModified: "2024-01-13",
      reports: 2,
      views: 8,
      category: "User Message",
      tags: ["Spanish", "Mathematics"],
      flags: ["Spam", "Inappropriate Content"],
    },
    {
      id: 4,
      type: "bio",
      title: "User Bio: Photography Enthusiast",
      author: "Emily Rodriguez",
      authorEmail: "emily@berkeley.edu",
      content:
        "Passionate photographer specializing in portrait and landscape photography. Teaching composition, lighting, and post-processing techniques.",
      status: "published",
      createdAt: "2024-01-12",
      lastModified: "2024-01-13",
      reports: 0,
      views: 67,
      category: "User Bio",
      tags: ["Photography", "Adobe Lightroom", "Composition"],
      flags: [],
    },
    {
      id: 5,
      type: "review",
      title: "Session Review",
      author: "David Kim",
      authorEmail: "david@yale.edu",
      content:
        "Excellent session! Sarah explained React concepts clearly and provided practical examples. Highly recommend for anyone learning modern web development.",
      status: "published",
      createdAt: "2024-01-11",
      lastModified: "2024-01-11",
      reports: 0,
      views: 34,
      category: "Session Review",
      tags: ["React", "Web Development", "Review"],
      flags: [],
    },
  ];

  const skillCategories = [
    {
      id: 1,
      name: "Technology",
      description: "Programming, web development, and tech skills",
      skillCount: 156,
      userCount: 847,
      status: "active",
      moderator: "Admin Team",
    },
    {
      id: 2,
      name: "Languages",
      description: "Foreign languages and communication skills",
      skillCount: 89,
      userCount: 623,
      status: "active",
      moderator: "Language Team",
    },
    {
      id: 3,
      name: "Creative Arts",
      description: "Design, photography, music, and creative skills",
      skillCount: 67,
      userCount: 445,
      status: "active",
      moderator: "Creative Team",
    },
    {
      id: 4,
      name: "Business",
      description: "Business strategy, marketing, and entrepreneurship",
      skillCount: 45,
      userCount: 332,
      status: "under_review",
      moderator: "Business Team",
    },
  ];

  const contentTemplates = [
    {
      id: 1,
      name: "Skill Description Template",
      usage: "For creating standardized skill descriptions",
      lastUpdated: "2024-01-10",
    },
    {
      id: 2,
      name: "Welcome Message Template",
      usage: "Automated welcome messages for new users",
      lastUpdated: "2024-01-08",
    },
    {
      id: 3,
      name: "Community Guidelines",
      usage: "Platform rules and community standards",
      lastUpdated: "2024-01-05",
    },
  ];

  const filteredContent = contentItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      contentTypeFilter === "all" || item.type === contentTypeFilter;
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const pendingContent = contentItems.filter(
    (item) => item.status === "pending",
  );
  const flaggedContent = contentItems.filter(
    (item) => item.status === "flagged",
  );
  const recentContent = contentItems
    .filter((item) => item.createdAt >= "2024-01-10")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  const handleContentAction = (contentId: number, action: string) => {
    const content = contentItems.find((c) => c.id === contentId);
    console.log(`${action} content:`, content);
    // In a real app, this would call the admin API
  };

  const openContentDetails = (content: any) => {
    setSelectedContent(content);
    setDialogOpen(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "flagged":
        return "bg-red-100 text-red-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case "profile":
        return <User className="h-4 w-4" />;
      case "skill_description":
        return <BookOpen className="h-4 w-4" />;
      case "message":
        return <MessageSquare className="h-4 w-4" />;
      case "bio":
        return <FileText className="h-4 w-4" />;
      case "review":
        return <Flag className="h-4 w-4" />;
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
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
              Content Management
            </h1>
            <p className="text-gray-600">
              Manage user-generated content, skill categories, and platform
              materials
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Content
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Template
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Content</p>
                  <p className="text-2xl font-bold">{contentItems.length}</p>
                </div>
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Review</p>
                  <p className="text-2xl font-bold">{pendingContent.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Flagged Content</p>
                  <p className="text-2xl font-bold">{flaggedContent.length}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Categories</p>
                  <p className="text-2xl font-bold">{skillCategories.length}</p>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">All Content</TabsTrigger>
            <TabsTrigger value="pending">
              Pending ({pendingContent.length})
            </TabsTrigger>
            <TabsTrigger value="flagged">
              Flagged ({flaggedContent.length})
            </TabsTrigger>
            <TabsTrigger value="categories">Skill Categories</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          {/* Search and Filters */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Select
                value={contentTypeFilter}
                onValueChange={setContentTypeFilter}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="profile">Profile</SelectItem>
                  <SelectItem value="skill_description">
                    Skill Description
                  </SelectItem>
                  <SelectItem value="message">Message</SelectItem>
                  <SelectItem value="bio">Bio</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="flagged">Flagged</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* All Content Tab */}
          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>All Content ({filteredContent.length})</CardTitle>
                <CardDescription>
                  Complete list of user-generated content with moderation
                  controls
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Content</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Activity</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredContent.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium truncate max-w-xs">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-600 truncate max-w-xs">
                              {item.content}
                            </p>
                            {item.flags.length > 0 && (
                              <div className="flex gap-1 mt-1">
                                {item.flags.map((flag) => (
                                  <Badge
                                    key={flag}
                                    variant="destructive"
                                    className="text-xs"
                                  >
                                    {flag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {item.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{item.author}</p>
                              <p className="text-sm text-gray-600">
                                {item.authorEmail}
                              </p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {getContentTypeIcon(item.type)}
                            <span className="capitalize">
                              {item.type.replace("_", " ")}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{item.views} views</p>
                            <p className="text-red-600">
                              {item.reports} reports
                            </p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{item.createdAt}</p>
                            <p className="text-gray-600">
                              Modified: {item.lastModified}
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
                                onClick={() => openContentDetails(item)}
                              >
                                <Eye className="h-4 w-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() =>
                                  handleContentAction(item.id, "edit")
                                }
                              >
                                <Edit className="h-4 w-4 mr-2" />
                                Edit Content
                              </DropdownMenuItem>
                              {item.status === "pending" && (
                                <>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleContentAction(item.id, "approve")
                                    }
                                  >
                                    <CheckCircle className="h-4 w-4 mr-2" />
                                    Approve
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() =>
                                      handleContentAction(item.id, "reject")
                                    }
                                    className="text-red-600"
                                  >
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Reject
                                  </DropdownMenuItem>
                                </>
                              )}
                              {item.status === "flagged" && (
                                <DropdownMenuItem
                                  onClick={() =>
                                    handleContentAction(item.id, "resolve")
                                  }
                                >
                                  <Shield className="h-4 w-4 mr-2" />
                                  Resolve Flags
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem
                                onClick={() =>
                                  handleContentAction(item.id, "archive")
                                }
                                className="text-gray-600"
                              >
                                <Trash2 className="h-4 w-4 mr-2" />
                                Archive
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

          {/* Pending Content Tab */}
          <TabsContent value="pending">
            <Card>
              <CardHeader>
                <CardTitle>Pending Content ({pendingContent.length})</CardTitle>
                <CardDescription>
                  Content awaiting moderation approval
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingContent.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {getContentTypeIcon(item.type)}
                            <h4 className="font-semibold">{item.title}</h4>
                            <Badge variant="outline">{item.type}</Badge>
                          </div>
                          <p className="text-gray-700 mb-2">{item.content}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span>By {item.author}</span>
                            <span>Created {item.createdAt}</span>
                            <span>{item.views} views</span>
                          </div>
                          <div className="flex gap-1 mt-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openContentDetails(item)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                          <Button
                            size="sm"
                            onClick={() =>
                              handleContentAction(item.id, "approve")
                            }
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              handleContentAction(item.id, "reject")
                            }
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Flagged Content Tab */}
          <TabsContent value="flagged">
            <Card>
              <CardHeader>
                <CardTitle>Flagged Content ({flaggedContent.length})</CardTitle>
                <CardDescription>
                  Content reported by users requiring review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {flaggedContent.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            <h4 className="font-semibold">{item.title}</h4>
                            <Badge variant="destructive">
                              {item.reports} reports
                            </Badge>
                          </div>
                          <p className="text-gray-700 mb-2">{item.content}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <span>By {item.author}</span>
                            <span>Created {item.createdAt}</span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {item.flags.map((flag) => (
                              <Badge key={flag} variant="destructive">
                                {flag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => openContentDetails(item)}
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            Review
                          </Button>
                          <Button
                            size="sm"
                            onClick={() =>
                              handleContentAction(item.id, "resolve")
                            }
                          >
                            <Shield className="h-4 w-4 mr-2" />
                            Resolve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              handleContentAction(item.id, "remove")
                            }
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skill Categories Tab */}
          <TabsContent value="categories">
            <Card>
              <CardHeader>
                <CardTitle>
                  Skill Categories ({skillCategories.length})
                </CardTitle>
                <CardDescription>
                  Manage platform skill categories and organization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillCategories.map((category) => (
                    <div
                      key={category.id}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-lg">
                              {category.name}
                            </h4>
                            <Badge
                              variant={
                                category.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {category.status.replace("_", " ")}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">
                            {category.description}
                          </p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="font-medium">
                                {category.skillCount}
                              </p>
                              <p className="text-gray-600">Skills</p>
                            </div>
                            <div>
                              <p className="font-medium">
                                {category.userCount}
                              </p>
                              <p className="text-gray-600">Active Users</p>
                            </div>
                            <div>
                              <p className="font-medium">
                                {category.moderator}
                              </p>
                              <p className="text-gray-600">Moderator</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            View Skills
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>
                  Content Templates ({contentTemplates.length})
                </CardTitle>
                <CardDescription>
                  Manage platform content templates and automated messages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contentTemplates.map((template) => (
                    <div
                      key={template.id}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{template.name}</h4>
                          <p className="text-gray-600 text-sm">
                            {template.usage}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Last updated: {template.lastUpdated}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Content Details Dialog */}
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                Content Details: {selectedContent?.title}
              </DialogTitle>
              <DialogDescription>
                Review and moderate user-generated content
              </DialogDescription>
            </DialogHeader>
            {selectedContent && (
              <div className="space-y-6">
                {/* Content Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    {getContentTypeIcon(selectedContent.type)}
                    <Badge variant="outline" className="capitalize">
                      {selectedContent.type.replace("_", " ")}
                    </Badge>
                    <Badge className={getStatusColor(selectedContent.status)}>
                      {selectedContent.status}
                    </Badge>
                  </div>

                  <div>
                    <Label className="text-sm font-medium">Content</Label>
                    <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                      <p>{selectedContent.content}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium">Author</Label>
                      <div className="flex items-center gap-2 mt-1">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            {selectedContent.author
                              .split(" ")
                              .map((n: string) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {selectedContent.author}
                          </p>
                          <p className="text-sm text-gray-600">
                            {selectedContent.authorEmail}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Statistics</Label>
                      <div className="mt-1 space-y-1">
                        <p className="text-sm">{selectedContent.views} views</p>
                        <p className="text-sm text-red-600">
                          {selectedContent.reports} reports
                        </p>
                        <p className="text-sm text-gray-600">
                          Created: {selectedContent.createdAt}
                        </p>
                      </div>
                    </div>
                  </div>

                  {selectedContent.tags.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium">Tags</Label>
                      <div className="flex gap-2 mt-2">
                        {selectedContent.tags.map((tag: string) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedContent.flags.length > 0 && (
                    <div>
                      <Label className="text-sm font-medium text-red-600">
                        Content Flags
                      </Label>
                      <div className="flex gap-2 mt-2">
                        {selectedContent.flags.map((flag: string) => (
                          <Badge key={flag} variant="destructive">
                            {flag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t">
                  {selectedContent.status === "pending" && (
                    <>
                      <Button
                        onClick={() =>
                          handleContentAction(selectedContent.id, "approve")
                        }
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() =>
                          handleContentAction(selectedContent.id, "reject")
                        }
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                  {selectedContent.status === "flagged" && (
                    <Button
                      onClick={() =>
                        handleContentAction(selectedContent.id, "resolve")
                      }
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Resolve Flags
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() =>
                      handleContentAction(selectedContent.id, "edit")
                    }
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Content
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

export default AdminContent;
