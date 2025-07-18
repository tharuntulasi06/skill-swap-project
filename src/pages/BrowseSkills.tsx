import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Search,
  Filter,
  Star,
  MapPin,
  GraduationCap,
  MessageSquare,
  UserPlus,
  SlidersHorizontal,
  Code,
  Palette,
  Music,
  Globe,
  Calculator,
  Briefcase,
  Heart,
  Gamepad2,
  Camera,
  Utensils,
} from "lucide-react";

const BrowseSkills = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || "",
  );
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [ratingFilter, setRatingFilter] = useState([0]);
  const [locationFilter, setLocationFilter] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Mock data for users
  const allUsers = [
    {
      id: 1,
      name: "Sarah Chen",
      college: "MIT",
      year: "Senior",
      location: "Cambridge, MA",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 45,
      sessionCount: 89,
      responseTime: "< 1 hour",
      teachingSkills: ["React", "TypeScript", "UI/UX Design", "Figma"],
      learningSkills: ["Machine Learning", "Python", "Data Science"],
      category: "Technology",
      bio: "Experienced React developer passionate about teaching modern web development.",
      hourlyRate: "$25",
      availability: "Weekdays & Evenings",
    },
    {
      id: 2,
      name: "Alex Thompson",
      college: "Stanford",
      year: "Graduate",
      location: "Palo Alto, CA",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 67,
      sessionCount: 127,
      responseTime: "< 2 hours",
      teachingSkills: ["Machine Learning", "Python", "Data Science", "AI"],
      learningSkills: ["React", "Frontend Development"],
      category: "Technology",
      bio: "ML researcher with industry experience, love sharing knowledge about AI/ML.",
      hourlyRate: "$30",
      availability: "Flexible",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      college: "Berkeley",
      year: "Junior",
      location: "Berkeley, CA",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 34,
      sessionCount: 78,
      responseTime: "< 3 hours",
      teachingSkills: ["Spanish", "French", "Language Learning"],
      learningSkills: ["Programming", "Web Development"],
      category: "Languages",
      bio: "Native Spanish speaker, fluent in French. Love helping others learn languages!",
      hourlyRate: "$20",
      availability: "Weekends",
    },
    {
      id: 4,
      name: "David Kim",
      college: "Harvard",
      year: "Senior",
      location: "Cambridge, MA",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 52,
      sessionCount: 98,
      responseTime: "< 1 hour",
      teachingSkills: ["Photography", "Photo Editing", "Adobe Lightroom"],
      learningSkills: ["Video Editing", "Motion Graphics"],
      category: "Creative",
      bio: "Professional photographer teaching composition and post-processing techniques.",
      hourlyRate: "$35",
      availability: "Weekdays",
    },
    {
      id: 5,
      name: "Jessica Lee",
      college: "Yale",
      year: "Graduate",
      location: "New Haven, CT",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 41,
      sessionCount: 85,
      responseTime: "< 2 hours",
      teachingSkills: ["Business Strategy", "Marketing", "Public Speaking"],
      learningSkills: ["Data Analytics", "Digital Marketing"],
      category: "Business",
      bio: "MBA student with startup experience, passionate about entrepreneurship.",
      hourlyRate: "$28",
      availability: "Evenings",
    },
    {
      id: 6,
      name: "Marco Silva",
      college: "Columbia",
      year: "Junior",
      location: "New York, NY",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviewCount: 29,
      sessionCount: 65,
      responseTime: "< 4 hours",
      teachingSkills: ["Guitar", "Music Theory", "Songwriting"],
      learningSkills: ["Piano", "Music Production"],
      category: "Music",
      bio: "Guitarist for 10+ years, love teaching music theory and improvisation.",
      hourlyRate: "$22",
      availability: "Flexible",
    },
    {
      id: 7,
      name: "Chen Wei",
      college: "Carnegie Mellon",
      year: "Graduate",
      location: "Pittsburgh, PA",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 73,
      sessionCount: 142,
      responseTime: "< 1 hour",
      teachingSkills: [
        "Artificial Intelligence",
        "Deep Learning",
        "TensorFlow",
      ],
      learningSkills: ["Quantum Computing", "Blockchain"],
      category: "Technology",
      bio: "PhD student in AI, published researcher with passion for teaching complex concepts simply.",
      hourlyRate: "$40",
      availability: "Evenings & Weekends",
    },
    {
      id: 8,
      name: "Sophie Martinez",
      college: "Parsons School of Design",
      year: "Senior",
      location: "New York, NY",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 56,
      sessionCount: 91,
      responseTime: "< 2 hours",
      teachingSkills: ["Graphic Design", "Adobe Creative Suite", "Branding"],
      learningSkills: ["Web Design", "Motion Graphics"],
      category: "Creative",
      bio: "Creative director intern with 3+ years freelance experience in branding and design.",
      hourlyRate: "$32",
      availability: "Flexible",
    },
    {
      id: 9,
      name: "Raj Patel",
      college: "University of Waterloo",
      year: "Graduate",
      location: "Waterloo, ON",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 38,
      sessionCount: 76,
      responseTime: "< 3 hours",
      teachingSkills: ["Blockchain", "Solidity", "Cryptocurrency", "Web3"],
      learningSkills: ["DeFi", "Smart Contract Security"],
      category: "Technology",
      bio: "Blockchain developer and crypto enthusiast, building the future of finance.",
      hourlyRate: "$45",
      availability: "Evenings",
    },
    {
      id: 10,
      name: "Emma Wilson",
      college: "Oxford University",
      year: "Graduate",
      location: "Oxford, UK",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 89,
      sessionCount: 167,
      responseTime: "< 1 hour",
      teachingSkills: ["Creative Writing", "Literature", "Academic Writing"],
      learningSkills: ["Digital Publishing", "Content Strategy"],
      category: "Academic",
      bio: "Published author and writing tutor with expertise in fiction and academic writing.",
      hourlyRate: "$35",
      availability: "Mornings & Evenings",
    },
    {
      id: 11,
      name: "Carlos Rodriguez",
      college: "UCLA",
      year: "Senior",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviewCount: 47,
      sessionCount: 134,
      responseTime: "< 4 hours",
      teachingSkills: ["Digital Marketing", "SEO", "Social Media", "Analytics"],
      learningSkills: ["Data Science", "A/B Testing"],
      category: "Business",
      bio: "Marketing professional with experience at tech startups and agencies.",
      hourlyRate: "$28",
      availability: "Weekends",
    },
    {
      id: 12,
      name: "Aisha Johnson",
      college: "Georgia Tech",
      year: "Graduate",
      location: "Atlanta, GA",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 62,
      sessionCount: 98,
      responseTime: "< 2 hours",
      teachingSkills: ["Cybersecurity", "Ethical Hacking", "Network Security"],
      learningSkills: ["Cloud Security", "DevSecOps"],
      category: "Technology",
      bio: "Cybersecurity analyst passionate about making the internet safer for everyone.",
      hourlyRate: "$38",
      availability: "Flexible",
    },
    {
      id: 13,
      name: "Lucas Brown",
      college: "Caltech",
      year: "Graduate",
      location: "Pasadena, CA",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 31,
      sessionCount: 76,
      responseTime: "< 2 hours",
      teachingSkills: ["Quantum Computing", "Physics", "Mathematics"],
      learningSkills: ["Quantum Machine Learning", "Quantum Algorithms"],
      category: "Academic",
      bio: "Physics PhD working on quantum computing applications, love explaining complex physics.",
      hourlyRate: "$50",
      availability: "Evenings",
    },
    {
      id: 14,
      name: "Priya Sharma",
      college: "Johns Hopkins",
      year: "Graduate",
      location: "Baltimore, MD",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 44,
      sessionCount: 112,
      responseTime: "< 3 hours",
      teachingSkills: ["Biotechnology", "Molecular Biology", "Lab Techniques"],
      learningSkills: ["Bioinformatics", "Data Analysis"],
      category: "Academic",
      bio: "Biotech researcher with lab experience, passionate about life sciences education.",
      hourlyRate: "$30",
      availability: "Weekdays",
    },
    {
      id: 15,
      name: "Miguel Santos",
      college: "USC Film School",
      year: "Senior",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 53,
      sessionCount: 87,
      responseTime: "< 2 hours",
      teachingSkills: ["Film Production", "Video Editing", "Cinematography"],
      learningSkills: ["3D Animation", "VFX"],
      category: "Creative",
      bio: "Film student with festival experience, love teaching visual storytelling.",
      hourlyRate: "$35",
      availability: "Afternoons & Weekends",
    },
    {
      id: 16,
      name: "Zoe Anderson",
      college: "University of Chicago",
      year: "Graduate",
      location: "Chicago, IL",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 67,
      sessionCount: 156,
      responseTime: "< 3 hours",
      teachingSkills: ["Economics", "Statistics", "Research Methods"],
      learningSkills: ["Behavioral Economics", "Machine Learning"],
      category: "Academic",
      bio: "Economics PhD candidate specializing in behavioral economics and data analysis.",
      hourlyRate: "$35",
      availability: "Flexible",
    },
    {
      id: 17,
      name: "Kenji Nakamura",
      college: "University of Tokyo",
      year: "Graduate",
      location: "Tokyo, Japan",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 78,
      sessionCount: 189,
      responseTime: "< 1 hour",
      teachingSkills: ["Robotics", "Arduino", "Japanese", "Electronics"],
      learningSkills: ["AI Integration", "IoT"],
      category: "Technology",
      bio: "Robotics engineer and native Japanese speaker, building the future of automation.",
      hourlyRate: "$42",
      availability: "JST Timezone",
    },
    {
      id: 18,
      name: "Fatima Al-Zahra",
      college: "American University of Cairo",
      year: "Graduate",
      location: "Cairo, Egypt",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 95,
      sessionCount: 234,
      responseTime: "< 2 hours",
      teachingSkills: ["Arabic", "Middle Eastern Studies", "Translation"],
      learningSkills: ["Linguistics", "Cultural Studies"],
      category: "Languages",
      bio: "Native Arabic speaker and cultural expert, passionate about cross-cultural communication.",
      hourlyRate: "$25",
      availability: "GMT+2 Timezone",
    },
    {
      id: 19,
      name: "Oliver Clark",
      college: "Cambridge University",
      year: "Graduate",
      location: "Cambridge, UK",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviewCount: 72,
      sessionCount: 145,
      responseTime: "< 4 hours",
      teachingSkills: ["Philosophy", "Critical Thinking", "Essay Writing"],
      learningSkills: ["Ethics in AI", "Political Philosophy"],
      category: "Academic",
      bio: "Philosophy PhD exploring ethics and technology, love deep philosophical discussions.",
      hourlyRate: "$30",
      availability: "GMT Timezone",
    },
    {
      id: 20,
      name: "Nina Petrov",
      college: "Moscow State University",
      year: "Graduate",
      location: "Moscow, Russia",
      avatar: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 84,
      sessionCount: 178,
      responseTime: "< 1 hour",
      teachingSkills: ["Mathematics", "Calculus", "Linear Algebra", "Russian"],
      learningSkills: ["Applied Mathematics", "Cryptography"],
      category: "Academic",
      bio: "Mathematics professor's assistant with olympiad experience, make math accessible to all.",
      hourlyRate: "$28",
      availability: "MSK Timezone",
    },
    {
      id: 21,
      name: "Tyler Johnson",
      college: "University of Michigan",
      year: "Senior",
      location: "Ann Arbor, MI",
      avatar: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 39,
      sessionCount: 93,
      responseTime: "< 3 hours",
      teachingSkills: ["Game Development", "Unity", "C#", "3D Modeling"],
      learningSkills: ["Unreal Engine", "VR Development"],
      category: "Gaming",
      bio: "Indie game developer with published games, passionate about interactive experiences.",
      hourlyRate: "$32",
      availability: "Evenings & Weekends",
    },
    {
      id: 22,
      name: "Isabella Rossi",
      college: "Culinary Institute of America",
      year: "Graduate",
      location: "Hyde Park, NY",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 67,
      sessionCount: 134,
      responseTime: "< 2 hours",
      teachingSkills: ["Italian Cooking", "Pastry Arts", "Food Photography"],
      learningSkills: ["Molecular Gastronomy", "Restaurant Management"],
      category: "Cooking",
      bio: "Professional chef and food photographer, sharing the art of Italian cuisine.",
      hourlyRate: "$45",
      availability: "Afternoons",
    },
    {
      id: 23,
      name: "Ryan O'Connor",
      college: "University of Dublin",
      year: "Senior",
      location: "Dublin, Ireland",
      avatar: "/placeholder.svg",
      rating: 4.6,
      reviewCount: 42,
      sessionCount: 87,
      responseTime: "< 3 hours",
      teachingSkills: ["Personal Training", "Nutrition", "CrossFit"],
      learningSkills: ["Sports Psychology", "Recovery Methods"],
      category: "Health",
      bio: "Certified personal trainer and nutrition coach, helping people achieve fitness goals.",
      hourlyRate: "$35",
      availability: "Mornings & Evenings",
    },
    {
      id: 24,
      name: "Lily Zhang",
      college: "Berklee College of Music",
      year: "Junior",
      location: "Boston, MA",
      avatar: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 58,
      sessionCount: 126,
      responseTime: "< 2 hours",
      teachingSkills: ["Piano", "Music Composition", "Music Theory"],
      learningSkills: ["Electronic Music", "Sound Design"],
      category: "Music",
      bio: "Classical pianist transitioning to electronic music, love teaching music fundamentals.",
      hourlyRate: "$30",
      availability: "Flexible",
    },
  ];

  const skillCategories = [
    { value: "all", label: "All Categories", icon: SlidersHorizontal },
    { value: "Technology", label: "Technology", icon: Code },
    { value: "Creative", label: "Design & Creative", icon: Palette },
    { value: "Languages", label: "Languages", icon: Globe },
    { value: "Music", label: "Music", icon: Music },
    { value: "Business", label: "Business", icon: Briefcase },
    { value: "Academic", label: "Academic", icon: Calculator },
    { value: "Health", label: "Health & Fitness", icon: Heart },
    { value: "Gaming", label: "Gaming", icon: Gamepad2 },
    { value: "Photography", label: "Photography", icon: Camera },
    { value: "Cooking", label: "Cooking", icon: Utensils },
  ];

  const popularSkills = [
    "JavaScript",
    "React",
    "Python",
    "Machine Learning",
    "UI/UX Design",
    "Spanish",
    "Photography",
    "Guitar",
    "Data Science",
    "TypeScript",
    "Business Strategy",
    "French",
    "Adobe Photoshop",
    "Node.js",
    "German",
    "Artificial Intelligence",
    "Blockchain",
    "Creative Writing",
    "Digital Marketing",
    "Cybersecurity",
    "Quantum Computing",
    "Arabic",
    "Italian Cooking",
    "Piano",
    "Video Editing",
    "Japanese",
    "Philosophy",
    "Mathematics",
    "Game Development",
    "Personal Training",
    "Robotics",
    "Economics",
    "Film Production",
    "Biotechnology",
    "Music Theory",
    "Russian",
    "Unity",
    "3D Modeling",
    "SEO",
    "Deep Learning",
    "Mandarin",
    "Adobe Creative Suite",
    "C#",
    "Graphic Design",
    "Public Speaking",
    "Statistics",
    "Nutrition",
    "Sound Design",
  ];

  // Filter and sort users
  const filteredUsers = allUsers
    .filter((user) => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = user.name.toLowerCase().includes(query);
        const matchesSkills = [
          ...user.teachingSkills,
          ...user.learningSkills,
        ].some((skill) => skill.toLowerCase().includes(query));
        const matchesCollege = user.college.toLowerCase().includes(query);
        if (!matchesName && !matchesSkills && !matchesCollege) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && user.category !== selectedCategory) {
        return false;
      }

      // Type filter (teaching vs learning)
      if (selectedType === "teaching") {
        if (searchQuery) {
          const hasTeachingSkill = user.teachingSkills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase()),
          );
          if (!hasTeachingSkill) return false;
        }
      } else if (selectedType === "learning") {
        if (searchQuery) {
          const hasLearningSkill = user.learningSkills.some((skill) =>
            skill.toLowerCase().includes(searchQuery.toLowerCase()),
          );
          if (!hasLearningSkill) return false;
        }
      }

      // Rating filter
      if (user.rating < ratingFilter[0]) return false;

      // Location filter
      if (
        locationFilter &&
        !user.location.toLowerCase().includes(locationFilter.toLowerCase())
      ) {
        return false;
      }

      // Skills filter
      if (selectedSkills.length > 0) {
        const hasSelectedSkill = selectedSkills.some((selectedSkill) =>
          [...user.teachingSkills, ...user.learningSkills].includes(
            selectedSkill,
          ),
        );
        if (!hasSelectedSkill) return false;
      }

      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "sessions":
          return b.sessionCount - a.sessionCount;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (selectedType !== "all") params.set("type", selectedType);
    setSearchParams(params);
  }, [searchQuery, selectedCategory, selectedType, setSearchParams]);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSelectedType("all");
    setRatingFilter([0]);
    setLocationFilter("");
    setSelectedSkills([]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Browse Skills
          </h1>
          <p className="text-gray-600">
            Find mentors and peers to exchange skills with
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-4">
              {/* Main Search */}
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search skills, people, or colleges..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                      {(selectedCategory !== "all" ||
                        selectedType !== "all" ||
                        ratingFilter[0] > 0 ||
                        locationFilter ||
                        selectedSkills.length > 0) && (
                        <Badge className="ml-2 h-5 w-5 p-0 text-xs">
                          {[
                            selectedCategory !== "all" ? 1 : 0,
                            selectedType !== "all" ? 1 : 0,
                            ratingFilter[0] > 0 ? 1 : 0,
                            locationFilter ? 1 : 0,
                            selectedSkills.length,
                          ].reduce((a, b) => a + b, 0)}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px]">
                    <SheetHeader>
                      <SheetTitle>Filter Results</SheetTitle>
                      <SheetDescription>
                        Refine your search to find the perfect skill exchange
                        partner
                      </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      {/* Category Filter */}
                      <div>
                        <h4 className="font-medium mb-3">Category</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {skillCategories.map((category) => (
                            <Button
                              key={category.value}
                              variant={
                                selectedCategory === category.value
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() =>
                                setSelectedCategory(category.value)
                              }
                              className="justify-start"
                            >
                              <category.icon className="h-4 w-4 mr-2" />
                              {category.label}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div>
                        <h4 className="font-medium mb-3">Looking for</h4>
                        <Select
                          value={selectedType}
                          onValueChange={setSelectedType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="teaching">
                              People who teach this skill
                            </SelectItem>
                            <SelectItem value="learning">
                              People who want to learn this skill
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Rating Filter */}
                      <div>
                        <h4 className="font-medium mb-3">Minimum Rating</h4>
                        <div className="px-2">
                          <Slider
                            value={ratingFilter}
                            onValueChange={setRatingFilter}
                            max={5}
                            min={0}
                            step={0.5}
                            className="w-full"
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>Any</span>
                            <span>{ratingFilter[0]} stars</span>
                            <span>5 stars</span>
                          </div>
                        </div>
                      </div>

                      {/* Location Filter */}
                      <div>
                        <h4 className="font-medium mb-3">Location</h4>
                        <Input
                          placeholder="Enter city or state"
                          value={locationFilter}
                          onChange={(e) => setLocationFilter(e.target.value)}
                        />
                      </div>

                      {/* Popular Skills */}
                      <div>
                        <h4 className="font-medium mb-3">Popular Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {popularSkills.map((skill) => (
                            <Badge
                              key={skill}
                              variant={
                                selectedSkills.includes(skill)
                                  ? "default"
                                  : "outline"
                              }
                              className="cursor-pointer"
                              onClick={() => handleSkillToggle(skill)}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <Button
                          onClick={clearFilters}
                          variant="outline"
                          className="flex-1"
                        >
                          Clear All
                        </Button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="sessions">Most Sessions</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                  </SelectContent>
                </Select>

                {/* Active Filters */}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {
                      skillCategories.find((c) => c.value === selectedCategory)
                        ?.label
                    }
                    <button
                      onClick={() => setSelectedCategory("all")}
                      className="ml-2 text-xs"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedType !== "all" && (
                  <Badge variant="secondary" className="px-3 py-1">
                    {selectedType === "teaching" ? "Teaching" : "Learning"}
                    <button
                      onClick={() => setSelectedType("all")}
                      className="ml-2 text-xs"
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                    <button
                      onClick={() => handleSkillToggle(skill)}
                      className="ml-2 text-xs"
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Found {filteredUsers.length} skill exchange{" "}
            {filteredUsers.length === 1 ? "partner" : "partners"}
          </p>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredUsers.map((user) => (
            <Card
              key={user.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} />
                    <AvatarFallback className="bg-blue-100 text-blue-700 text-lg">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">
                      {user.name}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
                      <GraduationCap className="h-4 w-4" />
                      <span className="truncate">
                        {user.college} • {user.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{user.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{user.rating}</span>
                        <span className="text-sm text-gray-600">
                          ({user.reviewCount})
                        </span>
                      </div>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-600">
                        {user.sessionCount} sessions
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {user.bio}
                </p>

                {/* Skills */}
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Can Teach
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {user.teachingSkills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="default"
                          className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {user.teachingSkills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.teachingSkills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">
                      Wants to Learn
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {user.learningSkills.slice(0, 3).map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs border-blue-200 text-blue-800"
                        >
                          {skill}
                        </Badge>
                      ))}
                      {user.learningSkills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{user.learningSkills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="text-xs text-gray-500 mb-4 space-y-1">
                  <div>Response time: {user.responseTime}</div>
                  <div>Rate: {user.hourlyRate}/hour</div>
                  <div>Available: {user.availability}</div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/profile/${user.id}`}>View Profile</Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <UserPlus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No matches found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear all filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More (if needed) */}
        {filteredUsers.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Results
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BrowseSkills;
