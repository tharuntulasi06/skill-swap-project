import { useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  BookOpen,
  MessageSquare,
  Calendar,
  DollarSign,
  Globe,
  Clock,
  Award,
  Download,
  RefreshCw,
  Activity,
} from "lucide-react";

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeMetric, setActiveMetric] = useState("users");

  // Mock analytics data
  const overviewStats = {
    totalUsers: { current: 2847, previous: 2298, change: 23.9 },
    activeUsers: { current: 1923, previous: 1756, change: 9.5 },
    totalSessions: { current: 8472, previous: 7234, change: 17.1 },
    revenue: { current: 24580, previous: 22340, change: 10.0 },
    avgSessionDuration: { current: 45, previous: 42, change: 7.1 },
    completionRate: { current: 94.2, previous: 91.8, change: 2.6 },
  };

  const userGrowthData = [
    { month: "Jul", newUsers: 145, totalUsers: 2156 },
    { month: "Aug", newUsers: 189, totalUsers: 2345 },
    { month: "Sep", newUsers: 234, totalUsers: 2579 },
    { month: "Oct", newUsers: 278, totalUsers: 2847 },
  ];

  const skillCategoryData = [
    { category: "Technology", sessions: 3420, revenue: 8550, growth: 15.2 },
    { category: "Languages", sessions: 2156, revenue: 5390, growth: 12.8 },
    { category: "Creative Arts", sessions: 1843, revenue: 4607, growth: 18.5 },
    { category: "Business", sessions: 1287, revenue: 3217, growth: 8.9 },
    { category: "Academic", sessions: 1098, revenue: 2745, growth: 22.1 },
    { category: "Music", sessions: 876, revenue: 2190, growth: 25.3 },
  ];

  const geographicData = [
    { region: "North America", users: 1428, percentage: 50.2 },
    { region: "Europe", users: 711, percentage: 25.0 },
    { region: "Asia", users: 426, percentage: 15.0 },
    { region: "Others", users: 282, percentage: 9.8 },
  ];

  const deviceData = [
    { device: "Desktop", users: 1708, percentage: 60.0 },
    { device: "Mobile", users: 854, percentage: 30.0 },
    { device: "Tablet", users: 285, percentage: 10.0 },
  ];

  const topMentors = [
    { name: "Sarah Chen", sessions: 127, rating: 4.9, earnings: 3175 },
    { name: "Alex Thompson", sessions: 115, rating: 4.8, earnings: 2875 },
    { name: "Emily Rodriguez", sessions: 98, rating: 4.7, earnings: 2450 },
    { name: "David Kim", sessions: 89, rating: 4.9, earnings: 2225 },
    { name: "Jessica Lee", sessions: 76, rating: 4.8, earnings: 1900 },
  ];

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeIcon = (change: number) => {
    return change >= 0 ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-600" />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-gray-600">
              Comprehensive platform insights and performance metrics
            </p>
          </div>
          <div className="flex gap-3">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">Last 24 Hours</SelectItem>
                <SelectItem value="7d">Last 7 Days</SelectItem>
                <SelectItem value="30d">Last 30 Days</SelectItem>
                <SelectItem value="90d">Last 90 Days</SelectItem>
                <SelectItem value="1y">Last Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold">
                    {overviewStats.totalUsers.current.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.totalUsers.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.totalUsers.change)}`}
                    >
                      {overviewStats.totalUsers.change}% vs last period
                    </span>
                  </div>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Sessions</p>
                  <p className="text-2xl font-bold">
                    {overviewStats.totalSessions.current.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.totalSessions.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.totalSessions.change)}`}
                    >
                      {overviewStats.totalSessions.change}% vs last period
                    </span>
                  </div>
                </div>
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Platform Revenue</p>
                  <p className="text-2xl font-bold">
                    ${overviewStats.revenue.current.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.revenue.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.revenue.change)}`}
                    >
                      {overviewStats.revenue.change}% vs last period
                    </span>
                  </div>
                </div>
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Session Duration</p>
                  <p className="text-2xl font-bold">
                    {overviewStats.avgSessionDuration.current}m
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.avgSessionDuration.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.avgSessionDuration.change)}`}
                    >
                      {overviewStats.avgSessionDuration.change}% vs last period
                    </span>
                  </div>
                </div>
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                  <p className="text-2xl font-bold">
                    {overviewStats.completionRate.current}%
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.completionRate.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.completionRate.change)}`}
                    >
                      {overviewStats.completionRate.change}% vs last period
                    </span>
                  </div>
                </div>
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Users</p>
                  <p className="text-2xl font-bold">
                    {overviewStats.activeUsers.current.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    {getChangeIcon(overviewStats.activeUsers.change)}
                    <span
                      className={`text-sm ${getChangeColor(overviewStats.activeUsers.change)}`}
                    >
                      {overviewStats.activeUsers.change}% vs last period
                    </span>
                  </div>
                </div>
                <Activity className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics Tabs */}
        <Tabs defaultValue="growth" className="space-y-6">
          <TabsList>
            <TabsTrigger value="growth">User Growth</TabsTrigger>
            <TabsTrigger value="skills">Skill Categories</TabsTrigger>
            <TabsTrigger value="geography">Geographic Data</TabsTrigger>
            <TabsTrigger value="mentors">Top Performers</TabsTrigger>
          </TabsList>

          {/* User Growth Tab */}
          <TabsContent value="growth">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Growth Trend</CardTitle>
                  <CardDescription>
                    Monthly new user registrations and total user count
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userGrowthData.map((data, index) => (
                      <div key={data.month} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{data.month}</span>
                          <div className="flex items-center gap-4">
                            <span className="text-sm text-green-600">
                              +{data.newUsers} new
                            </span>
                            <span className="text-sm text-gray-600">
                              {data.totalUsers} total
                            </span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{
                              width: `${(data.totalUsers / 3000) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Device Analytics</CardTitle>
                  <CardDescription>
                    User distribution by device type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deviceData.map((device) => (
                      <div key={device.device} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{device.device}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">
                              {device.users.toLocaleString()}
                            </span>
                            <Badge variant="outline">
                              {device.percentage}%
                            </Badge>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Skill Categories Tab */}
          <TabsContent value="skills">
            <Card>
              <CardHeader>
                <CardTitle>Skill Category Performance</CardTitle>
                <CardDescription>
                  Revenue and session data by skill category
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillCategoryData.map((category) => (
                    <div
                      key={category.category}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold">{category.category}</h4>
                        <p className="text-sm text-gray-600">
                          {category.sessions.toLocaleString()} sessions
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          ${category.revenue.toLocaleString()}
                        </p>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3 text-green-600" />
                          <span className="text-sm text-green-600">
                            {category.growth}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Geographic Data Tab */}
          <TabsContent value="geography">
            <Card>
              <CardHeader>
                <CardTitle>Geographic Distribution</CardTitle>
                <CardDescription>
                  User distribution by geographic region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {geographicData.map((region) => (
                      <div key={region.region} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{region.region}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">
                              {region.users.toLocaleString()}
                            </span>
                            <Badge variant="outline">
                              {region.percentage}%
                            </Badge>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-blue-600 h-3 rounded-full"
                            style={{ width: `${region.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">
                        Interactive map visualization would be displayed here
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Top Performers Tab */}
          <TabsContent value="mentors">
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Mentors</CardTitle>
                <CardDescription>
                  Highest performing mentors by sessions and earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topMentors.map((mentor, index) => (
                    <div
                      key={mentor.name}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-full font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-semibold">{mentor.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">
                              {mentor.sessions} sessions
                            </span>
                            <div className="flex items-center gap-1">
                              <Award className="h-3 w-3 text-yellow-500" />
                              <span className="text-sm">{mentor.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">
                          ${mentor.earnings.toLocaleString()}
                        </p>
                        <p className="text-sm text-gray-600">Total earnings</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminAnalytics;
