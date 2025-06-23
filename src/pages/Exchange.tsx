import { useState } from "react";
import Navbar from "@/components/Navbar";
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  BookOpen,
  MessageSquare,
  Check,
  X,
  MoreVertical,
  Plus,
  Filter,
  Star,
  GraduationCap,
  MapPin,
  Video,
  Coffee,
} from "lucide-react";
import { format } from "date-fns";

const Exchange = () => {
  const [activeTab, setActiveTab] = useState("incoming");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data for exchange requests
  const incomingRequests = [
    {
      id: 1,
      requester: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        college: "MIT",
        year: "Senior",
        rating: 4.9,
        location: "Cambridge, MA",
      },
      skill: "React Development",
      offeringSkill: "Machine Learning",
      message:
        "Hi! I'd love to learn React from you. I can teach you ML concepts in return. I have experience with TensorFlow and PyTorch.",
      date: "2024-01-15",
      time: "14:00",
      duration: "60 minutes",
      type: "video_call",
      status: "pending",
      createdAt: "2 hours ago",
      urgency: "normal",
    },
    {
      id: 2,
      requester: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg",
        college: "Stanford",
        year: "Graduate",
        rating: 4.8,
        location: "Palo Alto, CA",
      },
      skill: "JavaScript Fundamentals",
      offeringSkill: "Data Science",
      message:
        "I'm struggling with async JavaScript and would appreciate your help. I can teach you data analysis with Python and pandas.",
      date: "2024-01-16",
      time: "16:30",
      duration: "45 minutes",
      type: "in_person",
      status: "pending",
      createdAt: "5 hours ago",
      urgency: "high",
    },
    {
      id: 3,
      requester: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        college: "Berkeley",
        year: "Junior",
        rating: 4.7,
        location: "Berkeley, CA",
      },
      skill: "Node.js",
      offeringSkill: "Spanish Language",
      message:
        "I need help with Node.js backend development. I'm a native Spanish speaker and can help you become fluent!",
      date: "2024-01-18",
      time: "10:00",
      duration: "90 minutes",
      type: "video_call",
      status: "pending",
      createdAt: "1 day ago",
      urgency: "normal",
    },
  ];

  const outgoingRequests = [
    {
      id: 4,
      recipient: {
        name: "David Kim",
        avatar: "/placeholder.svg",
        college: "Harvard",
        year: "Senior",
        rating: 4.9,
        location: "Cambridge, MA",
      },
      skill: "Photography",
      offeringSkill: "Web Development",
      message:
        "I'd love to learn photography composition and editing techniques. I can help you with modern web development frameworks in return.",
      date: "2024-01-17",
      time: "13:00",
      duration: "60 minutes",
      type: "in_person",
      status: "accepted",
      createdAt: "Yesterday",
      urgency: "normal",
    },
    {
      id: 5,
      recipient: {
        name: "Jessica Lee",
        avatar: "/placeholder.svg",
        college: "Yale",
        year: "Graduate",
        rating: 4.8,
        location: "New Haven, CT",
      },
      skill: "Business Strategy",
      offeringSkill: "Technical Skills",
      message:
        "I'm interested in learning about business strategy and startup management. I can teach you programming and technical skills.",
      date: "2024-01-20",
      time: "15:00",
      duration: "75 minutes",
      type: "video_call",
      status: "pending",
      createdAt: "3 days ago",
      urgency: "low",
    },
    {
      id: 6,
      recipient: {
        name: "Marco Silva",
        avatar: "/placeholder.svg",
        college: "Columbia",
        year: "Junior",
        rating: 4.6,
        location: "New York, NY",
      },
      skill: "Guitar",
      offeringSkill: "Programming",
      message:
        "I've always wanted to learn guitar! I can help you with programming and software development.",
      date: "2024-01-19",
      time: "18:00",
      duration: "60 minutes",
      type: "in_person",
      status: "declined",
      createdAt: "2 days ago",
      urgency: "normal",
    },
  ];

  const scheduledSessions = [
    {
      id: 7,
      partner: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        college: "MIT",
      },
      skill: "React Development",
      yourSkill: "Machine Learning",
      date: "2024-01-15",
      time: "14:00",
      duration: "60 minutes",
      type: "video_call",
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-def-ghi",
    },
    {
      id: 8,
      partner: {
        name: "David Kim",
        avatar: "/placeholder.svg",
        college: "Harvard",
      },
      skill: "Photography",
      yourSkill: "Web Development",
      date: "2024-01-17",
      time: "13:00",
      duration: "60 minutes",
      type: "in_person",
      status: "confirmed",
      location: "Harvard Square Coffee, Cambridge MA",
    },
  ];

  const availableSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
    "Data Science",
    "UI/UX Design",
    "Photography",
    "Spanish",
    "French",
    "German",
    "Business Strategy",
    "Marketing",
    "Guitar",
    "Piano",
    "Adobe Photoshop",
    "Figma",
    "TypeScript",
    "Vue.js",
    "Angular",
  ];

  const filterRequests = (requests: any[], status: string) => {
    if (status === "all") return requests;
    return requests.filter((req) => req.status === status);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "declined":
        return "bg-red-100 text-red-800";
      case "confirmed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "border-l-red-500";
      case "normal":
        return "border-l-blue-500";
      case "low":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  const handleAcceptRequest = (requestId: number) => {
    // In a real app, this would call an API
    console.log("Accepting request:", requestId);
  };

  const handleDeclineRequest = (requestId: number) => {
    // In a real app, this would call an API
    console.log("Declining request:", requestId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Skill Exchange
            </h1>
            <p className="text-gray-600">
              Manage your teaching and learning requests
            </p>
          </div>
          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Request
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Create Exchange Request</DialogTitle>
                <DialogDescription>
                  Request to learn a skill and offer something in return
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="skill-to-learn">
                      Skill I want to learn
                    </Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a skill" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSkills.map((skill) => (
                          <SelectItem key={skill} value={skill}>
                            {skill}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="skill-to-offer">Skill I can offer</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a skill" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableSkills.map((skill) => (
                          <SelectItem key={skill} value={skill}>
                            {skill}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Preferred Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate
                            ? format(selectedDate, "PPP")
                            : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 24 }, (_, i) => (
                          <SelectItem
                            key={i}
                            value={`${i.toString().padStart(2, "0")}:00`}
                          >
                            {`${i.toString().padStart(2, "0")}:00`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="duration">Session Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1.5 hours</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="type">Session Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video_call">Video Call</SelectItem>
                        <SelectItem value="in_person">In Person</SelectItem>
                        <SelectItem value="phone_call">Phone Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Introduce yourself and explain what you'd like to learn..."
                    rows={4}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setIsCreateDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button onClick={() => setIsCreateDialogOpen(false)}>
                    Send Request
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Requests</p>
                  <p className="text-2xl font-bold">
                    {
                      incomingRequests.filter((r) => r.status === "pending")
                        .length
                    }
                  </p>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Scheduled Sessions</p>
                  <p className="text-2xl font-bold">
                    {scheduledSessions.length}
                  </p>
                </div>
                <CalendarIcon className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Exchanges</p>
                  <p className="text-2xl font-bold">47</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <Star className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="incoming">
                Incoming Requests ({incomingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="outgoing">
                Outgoing Requests ({outgoingRequests.length})
              </TabsTrigger>
              <TabsTrigger value="scheduled">
                Scheduled Sessions ({scheduledSessions.length})
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="incoming">
            <div className="space-y-4">
              {filterRequests(incomingRequests, filterStatus).map((request) => (
                <Card
                  key={request.id}
                  className={`border-l-4 ${getUrgencyColor(request.urgency)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={request.requester.avatar} />
                          <AvatarFallback>
                            {request.requester.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              {request.requester.name}
                            </h3>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                            {request.urgency === "high" && (
                              <Badge variant="destructive" className="text-xs">
                                Urgent
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4" />
                              <span>
                                {request.requester.college} •{" "}
                                {request.requester.year}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{request.requester.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{request.requester.rating}</span>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-4 mb-2">
                              <Badge
                                variant="default"
                                className="bg-blue-100 text-blue-800"
                              >
                                Wants to learn: {request.skill}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-green-200 text-green-800"
                              >
                                Offers: {request.offeringSkill}
                              </Badge>
                            </div>
                            <p className="text-gray-700 text-sm">
                              {request.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>
                                {request.date} at {request.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{request.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {request.type === "video_call" ? (
                                <Video className="h-4 w-4" />
                              ) : (
                                <Coffee className="h-4 w-4" />
                              )}
                              <span>
                                {request.type === "video_call"
                                  ? "Video Call"
                                  : "In Person"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {request.createdAt}
                        </span>
                        {request.status === "pending" && (
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDeclineRequest(request.id)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleAcceptRequest(request.id)}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Accept
                            </Button>
                          </div>
                        )}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="h-4 w-4 mr-2" />
                              View Profile
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="outgoing">
            <div className="space-y-4">
              {filterRequests(outgoingRequests, filterStatus).map((request) => (
                <Card
                  key={request.id}
                  className={`border-l-4 ${getUrgencyColor(request.urgency)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={request.recipient.avatar} />
                          <AvatarFallback>
                            {request.recipient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              Request to {request.recipient.name}
                            </h3>
                            <Badge className={getStatusColor(request.status)}>
                              {request.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-4 w-4" />
                              <span>
                                {request.recipient.college} •{" "}
                                {request.recipient.year}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{request.recipient.rating}</span>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-4 mb-2">
                              <Badge
                                variant="default"
                                className="bg-blue-100 text-blue-800"
                              >
                                Want to learn: {request.skill}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-green-200 text-green-800"
                              >
                                Offering: {request.offeringSkill}
                              </Badge>
                            </div>
                            <p className="text-gray-700 text-sm">
                              {request.message}
                            </p>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>
                                {request.date} at {request.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{request.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          {request.createdAt}
                        </span>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Send Message
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="h-4 w-4 mr-2" />
                              View Profile
                            </DropdownMenuItem>
                            {request.status === "pending" && (
                              <DropdownMenuItem className="text-red-600">
                                Cancel Request
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="scheduled">
            <div className="space-y-4">
              {scheduledSessions.map((session) => (
                <Card
                  key={session.id}
                  className="border-l-4 border-l-green-500"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={session.partner.avatar} />
                          <AvatarFallback>
                            {session.partner.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-lg">
                              Session with {session.partner.name}
                            </h3>
                            <Badge className="bg-green-100 text-green-800">
                              {session.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {session.partner.college}
                          </p>
                          <div className="bg-green-50 rounded-lg p-3 mb-3">
                            <div className="flex items-center gap-4 mb-2">
                              <Badge
                                variant="default"
                                className="bg-blue-100 text-blue-800"
                              >
                                Learning: {session.skill}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="border-green-200 text-green-800"
                              >
                                Teaching: {session.yourSkill}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="h-4 w-4" />
                              <span>
                                {session.date} at {session.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{session.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {session.type === "video_call" ? (
                                <Video className="h-4 w-4" />
                              ) : (
                                <Coffee className="h-4 w-4" />
                              )}
                              <span>
                                {session.type === "video_call"
                                  ? "Video Call"
                                  : "In Person"}
                              </span>
                            </div>
                          </div>
                          {session.meetingLink && (
                            <div className="mt-3">
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={session.meetingLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Meeting
                                </a>
                              </Button>
                            </div>
                          )}
                          {session.location && (
                            <div className="mt-2 text-sm text-gray-600">
                              <MapPin className="h-4 w-4 inline mr-1" />
                              {session.location}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          Chat
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <CalendarIcon className="h-4 w-4 mr-2" />
                              Reschedule
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <User className="h-4 w-4 mr-2" />
                              View Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Cancel Session
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Exchange;
