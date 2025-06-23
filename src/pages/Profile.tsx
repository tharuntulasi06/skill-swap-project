import { useState } from "react";
import { useParams, Link } from "react-router-dom";
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
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Star,
  MessageSquare,
  UserPlus,
  MapPin,
  Calendar,
  GraduationCap,
  Mail,
  Edit,
  BookOpen,
  Award,
  Clock,
  Users,
} from "lucide-react";

const Profile = () => {
  const { userId } = useParams();
  const isOwnProfile = !userId;
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - in real app this would come from API
  const user = {
    id: isOwnProfile ? "current-user" : userId,
    name: isOwnProfile ? "John Doe" : "Sarah Chen",
    email: isOwnProfile ? "john@university.edu" : "sarah@mit.edu",
    college: isOwnProfile ? "Stanford University" : "MIT",
    year: isOwnProfile ? "Junior" : "Senior",
    major: isOwnProfile ? "Computer Science" : "Software Engineering",
    location: isOwnProfile ? "Palo Alto, CA" : "Cambridge, MA",
    avatar: "/placeholder.svg",
    coverImage: "/placeholder.svg",
    bio: isOwnProfile
      ? "Passionate about full-stack development and machine learning. Love teaching others and learning new technologies. Always up for a good coding challenge!"
      : "Experienced React developer with a passion for creating beautiful user interfaces. Mentor at MIT's coding bootcamp.",
    joinDate: "September 2023",
    rating: isOwnProfile ? 4.8 : 4.9,
    totalReviews: isOwnProfile ? 27 : 45,
    totalSessions: isOwnProfile ? 42 : 89,
    responseTime: "< 2 hours",
    skillsTeaching: isOwnProfile
      ? ["JavaScript", "React", "Node.js", "Python", "Git"]
      : ["React", "TypeScript", "UI/UX Design", "Figma", "CSS"],
    skillsLearning: isOwnProfile
      ? ["Machine Learning", "Data Science", "DevOps", "AWS"]
      : ["Machine Learning", "Backend Development", "System Design"],
    achievements: [
      { name: "Top Mentor", description: "Highest rated mentor this month" },
      { name: "Quick Responder", description: "Responds within 2 hours" },
      { name: "Session Master", description: "Completed 50+ sessions" },
    ],
  };

  const reviews = [
    {
      id: 1,
      reviewer: "Mike Johnson",
      avatar: "/placeholder.svg",
      rating: 5,
      skill: "React Development",
      date: "2 days ago",
      comment:
        "Excellent teacher! Sarah explained React hooks in a way that finally made sense to me. Very patient and knowledgeable.",
    },
    {
      id: 2,
      reviewer: "Emma Wilson",
      avatar: "/placeholder.svg",
      rating: 5,
      skill: "JavaScript",
      date: "1 week ago",
      comment:
        "Amazing session on async/await and promises. Sarah's teaching style is very clear and practical.",
    },
    {
      id: 3,
      reviewer: "David Kim",
      avatar: "/placeholder.svg",
      rating: 4,
      skill: "UI/UX Design",
      date: "2 weeks ago",
      comment:
        "Great insights into modern UI patterns. Learned a lot about Figma workflows.",
    },
  ];

  const recentSessions = [
    {
      id: 1,
      student: "Alex Thompson",
      skill: "React Hooks",
      date: "Yesterday",
      duration: "45 min",
      status: "completed",
    },
    {
      id: 2,
      student: "Maria Garcia",
      skill: "JavaScript ES6",
      date: "3 days ago",
      duration: "60 min",
      status: "completed",
    },
    {
      id: 3,
      student: "James Wilson",
      skill: "TypeScript",
      date: "Next Tuesday",
      duration: "30 min",
      status: "scheduled",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        {/* Profile Header */}
        <Card className="mb-8">
          <div className="relative">
            {/* Cover Image */}
            <div className="h-48 bg-violet-500 rounded-t-lg"></div>

            {/* Profile Info */}
            <div className="relative px-6 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
                <Avatar className="h-32 w-32 border-4 border-white -mt-16 mb-4 sm:mb-0">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-2xl bg-violet-100 text-violet-700">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900">
                        {user.name}
                      </h1>
                      <div className="flex items-center gap-4 mt-2 text-gray-600">
                        <div className="flex items-center gap-1">
                          <GraduationCap className="h-4 w-4" />
                          <span>{user.college}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{user.year}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{user.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{user.rating}</span>
                          <span className="text-gray-600">
                            ({user.totalReviews} reviews)
                          </span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-600">
                          {user.totalSessions} sessions completed
                        </span>
                      </div>
                    </div>

                    {!isOwnProfile && (
                      <div className="flex gap-3 mt-4 sm:mt-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Message
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Send Message to {user.name}
                              </DialogTitle>
                              <DialogDescription>
                                Start a conversation about skill exchange
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                  id="subject"
                                  placeholder="What would you like to discuss?"
                                />
                              </div>
                              <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                  id="message"
                                  placeholder="Hi! I'm interested in learning..."
                                  rows={4}
                                />
                              </div>
                              <Button className="w-full">Send Message</Button>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline">
                              <UserPlus className="h-4 w-4 mr-2" />
                              Request Exchange
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Request Skill Exchange</DialogTitle>
                              <DialogDescription>
                                Choose what you'd like to learn from {user.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="skill">Skill to Learn</Label>
                                <select className="w-full p-2 border rounded-md">
                                  {user.skillsTeaching.map((skill) => (
                                    <option key={skill} value={skill}>
                                      {skill}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <Label htmlFor="offer">
                                  What can you offer?
                                </Label>
                                <Input
                                  id="offer"
                                  placeholder="What skill can you teach in return?"
                                />
                              </div>
                              <div>
                                <Label htmlFor="notes">Additional Notes</Label>
                                <Textarea
                                  id="notes"
                                  placeholder="Any specific topics you'd like to focus on?"
                                  rows={3}
                                />
                              </div>
                              <Button className="w-full">Send Request</Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}

                    {isOwnProfile && (
                      <Button variant="outline">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Profile Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">
                  Reviews ({user.totalReviews})
                </TabsTrigger>
                <TabsTrigger value="sessions">Sessions</TabsTrigger>
              </TabsList>

              <TabsContent value="overview">
                <div className="space-y-6">
                  {/* About */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        {user.bio}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Skills I Can Teach */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Skills I Can Teach
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {user.skillsTeaching.map((skill) => (
                          <Badge
                            key={skill}
                            variant="default"
                            className="bg-violet-100 text-violet-800 hover:bg-violet-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skills I Want to Learn */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5" />
                        Skills I Want to Learn
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {user.skillsLearning.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-blue-200 text-blue-800 hover:bg-blue-50"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Achievements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Award className="h-5 w-5" />
                        Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {user.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200"
                          >
                            <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                            <h4 className="font-semibold text-gray-900">
                              {achievement.name}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {achievement.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>
                              {review.reviewer
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">
                                  {review.reviewer}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {review.skill} • {review.date}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? "fill-yellow-400 text-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">{review.comment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="sessions">
                <div className="space-y-4">
                  {recentSessions.map((session) => (
                    <Card key={session.id}>
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>
                                {session.student
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold">
                                {session.student}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {session.skill}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">
                              {session.date}
                            </p>
                            <p className="text-sm text-gray-600">
                              {session.duration}
                            </p>
                            <Badge
                              variant={
                                session.status === "completed"
                                  ? "default"
                                  : "secondary"
                              }
                              className="mt-1"
                            >
                              {session.status}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Stats & Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Response Time</span>
                  </div>
                  <span className="font-semibold">{user.responseTime}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Total Sessions</span>
                  </div>
                  <span className="font-semibold">{user.totalSessions}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Average Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{user.rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm">Member Since</span>
                  </div>
                  <span className="font-semibold">{user.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">
                    {user.major}, {user.college}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{user.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Similar Profiles */}
            {!isOwnProfile && (
              <Card>
                <CardHeader>
                  <CardTitle>Similar Profiles</CardTitle>
                  <CardDescription>
                    Other mentors you might be interested in
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Alex Johnson",
                      skill: "React & TypeScript",
                      rating: 4.7,
                    },
                    {
                      name: "Maria Garcia",
                      skill: "UI/UX Design",
                      rating: 4.9,
                    },
                    {
                      name: "David Kim",
                      skill: "JavaScript & Node.js",
                      rating: 4.6,
                    },
                  ].map((profile, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="text-xs">
                          {profile.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {profile.name}
                        </p>
                        <p className="text-xs text-gray-600 truncate">
                          {profile.skill}
                        </p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">{profile.rating}</span>
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                  >
                    <Link to="/browse">View More</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
