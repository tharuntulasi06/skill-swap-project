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
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  User,
  BookOpen,
  MessageSquare,
  Users,
  Star,
  Calendar,
  TrendingUp,
  ArrowRight,
  Code,
  Palette,
  Music,
  Globe,
  Camera,
  Calculator,
} from "lucide-react";

const Dashboard = () => {
  const [connectDialogOpen, setConnectDialogOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);

  // Mock data
  const currentMatches = [
    {
      id: 1,
      name: "Sarah Chen",
      college: "MIT",
      skill: "React Development",
      type: "teaching",
      avatar: "/placeholder.svg",
      rating: 4.9,
      status: "active",
    },
    {
      id: 2,
      name: "Mike Johnson",
      college: "Stanford",
      skill: "UI/UX Design",
      type: "learning",
      avatar: "/placeholder.svg",
      rating: 4.7,
      status: "scheduled",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      college: "Berkeley",
      skill: "Spanish Language",
      type: "teaching",
      avatar: "/placeholder.svg",
      rating: 4.8,
      status: "pending",
    },
  ];

  const topMentors = [
    {
      id: 1,
      name: "Alex Thompson",
      college: "Harvard",
      skill: "Machine Learning",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 127,
    },
    {
      id: 2,
      name: "Jessica Lee",
      college: "Yale",
      skill: "Data Science",
      avatar: "/placeholder.svg",
      rating: 4.8,
      sessions: 89,
    },
    {
      id: 3,
      name: "David Kim",
      college: "Princeton",
      skill: "Web Development",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 156,
    },
    {
      id: 4,
      name: "Maria Garcia",
      college: "Columbia",
      skill: "Photography",
      avatar: "/placeholder.svg",
      rating: 4.7,
      sessions: 78,
    },
    {
      id: 5,
      name: "Chen Wei",
      college: "MIT",
      skill: "Artificial Intelligence",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 203,
    },
    {
      id: 6,
      name: "Sophie Martinez",
      college: "Stanford",
      skill: "UI/UX Design",
      avatar: "/placeholder.svg",
      rating: 4.8,
      sessions: 145,
    },
    {
      id: 7,
      name: "Raj Patel",
      college: "UC Berkeley",
      skill: "Blockchain Development",
      avatar: "/placeholder.svg",
      rating: 4.7,
      sessions: 92,
    },
    {
      id: 8,
      name: "Emma Wilson",
      college: "Oxford",
      skill: "Creative Writing",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 167,
    },
    {
      id: 9,
      name: "Carlos Rodriguez",
      college: "NYU",
      skill: "Digital Marketing",
      avatar: "/placeholder.svg",
      rating: 4.6,
      sessions: 134,
    },
    {
      id: 10,
      name: "Aisha Johnson",
      college: "Carnegie Mellon",
      skill: "Cybersecurity",
      avatar: "/placeholder.svg",
      rating: 4.8,
      sessions: 98,
    },
    {
      id: 11,
      name: "Lucas Brown",
      college: "Caltech",
      skill: "Quantum Computing",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 76,
    },
    {
      id: 12,
      name: "Priya Sharma",
      college: "Cornell",
      skill: "Biotechnology",
      avatar: "/placeholder.svg",
      rating: 4.7,
      sessions: 112,
    },
    {
      id: 13,
      name: "Miguel Santos",
      college: "UCLA",
      skill: "Film Production",
      avatar: "/placeholder.svg",
      rating: 4.8,
      sessions: 87,
    },
    {
      id: 14,
      name: "Zoe Anderson",
      college: "University of Chicago",
      skill: "Economics",
      avatar: "/placeholder.svg",
      rating: 4.7,
      sessions: 156,
    },
    {
      id: 15,
      name: "Kenji Nakamura",
      college: "Tokyo University",
      skill: "Robotics",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 189,
    },
    {
      id: 16,
      name: "Fatima Al-Zahra",
      college: "American University of Cairo",
      skill: "Arabic Language",
      avatar: "/placeholder.svg",
      rating: 4.8,
      sessions: 234,
    },
    {
      id: 17,
      name: "Oliver Clark",
      college: "Cambridge",
      skill: "Philosophy",
      avatar: "/placeholder.svg",
      rating: 4.6,
      sessions: 145,
    },
    {
      id: 18,
      name: "Nina Petrov",
      college: "Moscow State University",
      skill: "Mathematics",
      avatar: "/placeholder.svg",
      rating: 4.9,
      sessions: 178,
    },
  ];

  const suggestedSkills = [
    { name: "JavaScript", icon: Code, color: "bg-yellow-100 text-yellow-800" },
    { name: "Digital Art", icon: Palette, color: "bg-pink-100 text-pink-800" },
    {
      name: "Music Theory",
      icon: Music,
      color: "bg-purple-100 text-purple-800",
    },
    { name: "French", icon: Globe, color: "bg-blue-100 text-blue-800" },
    { name: "Photography", icon: Camera, color: "bg-green-100 text-green-800" },
    {
      name: "Statistics",
      icon: Calculator,
      color: "bg-indigo-100 text-indigo-800",
    },
    { name: "Python", icon: Code, color: "bg-green-100 text-green-800" },
    { name: "React", icon: Code, color: "bg-cyan-100 text-cyan-800" },
    {
      name: "Machine Learning",
      icon: Code,
      color: "bg-purple-100 text-purple-800",
    },
    { name: "Spanish", icon: Globe, color: "bg-orange-100 text-orange-800" },
    { name: "Guitar", icon: Music, color: "bg-amber-100 text-amber-800" },
    {
      name: "Adobe Photoshop",
      icon: Palette,
      color: "bg-blue-100 text-blue-800",
    },
    { name: "Public Speaking", icon: Users, color: "bg-red-100 text-red-800" },
    {
      name: "Data Science",
      icon: Calculator,
      color: "bg-violet-100 text-violet-800",
    },
    { name: "UI/UX Design", icon: Palette, color: "bg-teal-100 text-teal-800" },
    { name: "German", icon: Globe, color: "bg-gray-100 text-gray-800" },
    { name: "Piano", icon: Music, color: "bg-slate-100 text-slate-800" },
    { name: "Video Editing", icon: Camera, color: "bg-rose-100 text-rose-800" },
    {
      name: "Business Strategy",
      icon: TrendingUp,
      color: "bg-emerald-100 text-emerald-800",
    },
    {
      name: "Creative Writing",
      icon: BookOpen,
      color: "bg-lime-100 text-lime-800",
    },
    { name: "Mandarin", icon: Globe, color: "bg-red-100 text-red-800" },
    { name: "Node.js", icon: Code, color: "bg-green-100 text-green-800" },
    { name: "Excel", icon: Calculator, color: "bg-blue-100 text-blue-800" },
    { name: "Marketing", icon: TrendingUp, color: "bg-pink-100 text-pink-800" },
  ];

  const handleConnectClick = (mentor: any) => {
    setSelectedMentor(mentor);
    setConnectDialogOpen(true);
  };

  const handleSendRequest = () => {
    // In a real app, this would send the connection request to the backend
    console.log("Sending connection request to:", selectedMentor?.name);
    setConnectDialogOpen(false);
    setSelectedMentor(null);
    // You could add a toast notification here
  };

  const sidebarItems = [
    { icon: User, label: "My Profile", href: "/profile" },
    { icon: BookOpen, label: "Browse Skills", href: "/browse" },
    { icon: Calendar, label: "Teach Requests", href: "/exchange" },
    { icon: Users, label: "Learn Requests", href: "/exchange" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-[calc(100vh-4rem)]">
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
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-violet-100 mb-4">
                You have 3 active exchanges and 2 new requests waiting for you.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="secondary">
                  <Link to="/browse">Find New Skills</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-white border-white border-2 hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Link to="/exchange">View Requests</Link>
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Exchanges</p>
                      <p className="text-2xl font-bold">12</p>
                    </div>
                    <Users className="h-8 w-8 text-violet-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Skills Taught</p>
                      <p className="text-2xl font-bold">8</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Average Rating</p>
                      <p className="text-2xl font-bold">4.8</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">This Month</p>
                      <p className="text-2xl font-bold">+24%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Current Matches */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Your Current Matches</CardTitle>
                  <CardDescription>
                    People you're currently exchanging skills with
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/exchange">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentMatches.map((match) => (
                    <Card
                      key={match.id}
                      className="border-l-4 border-l-blue-500"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarImage src={match.avatar} />
                            <AvatarFallback>
                              {match.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{match.name}</h4>
                            <p className="text-sm text-gray-600">
                              {match.college}
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Badge
                              variant={
                                match.type === "teaching"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {match.type === "teaching"
                                ? "Teaching"
                                : "Learning"}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{match.rating}</span>
                            </div>
                          </div>
                          <p className="font-medium text-blue-700">
                            {match.skill}
                          </p>
                          <Badge
                            variant="outline"
                            className={
                              match.status === "active"
                                ? "bg-green-50 text-green-700"
                                : match.status === "scheduled"
                                  ? "bg-blue-50 text-blue-700"
                                  : "bg-yellow-50 text-yellow-700"
                            }
                          >
                            {match.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Mentors */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Top Mentors This Week</CardTitle>
                  <CardDescription>
                    Highly rated mentors in your areas of interest
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/browse">
                    Browse All <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full whitespace-nowrap">
                  <div className="flex space-x-4 pb-4">
                    {topMentors.map((mentor) => (
                      <Card key={mentor.id} className="w-64 flex-shrink-0">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={mentor.avatar} />
                              <AvatarFallback>
                                {mentor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">{mentor.name}</h4>
                              <p className="text-sm text-gray-600">
                                {mentor.college}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <p className="font-medium text-blue-700">
                              {mentor.skill}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm">{mentor.rating}</span>
                              </div>
                              <span className="text-sm text-gray-600">
                                {mentor.sessions} sessions
                              </span>
                            </div>
                            <Button size="sm" className="w-full">
                              Connect
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Suggested Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Suggested Skills to Explore</CardTitle>
                <CardDescription>
                  Based on your interests and current learning goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {suggestedSkills.map((skill) => (
                    <Button
                      key={skill.name}
                      variant="outline"
                      className="h-20 flex-col gap-2 hover:scale-105 transition-transform"
                      asChild
                    >
                      <Link
                        to={`/browse?skill=${encodeURIComponent(skill.name)}`}
                      >
                        <div className={`p-2 rounded-lg ${skill.color}`}>
                          <skill.icon className="h-6 w-6" />
                        </div>
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
