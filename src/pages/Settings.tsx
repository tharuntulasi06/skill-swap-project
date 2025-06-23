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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  User,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Sun,
  Camera,
  Save,
  Trash2,
  Eye,
  EyeOff,
  AlertTriangle,
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    emailExchange: true,
    emailMessages: true,
    emailReminders: true,
    pushExchange: true,
    pushMessages: false,
    pushReminders: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showEmail: false,
    showLocation: true,
    allowDirectMessages: true,
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications({ ...notifications, [key]: value });
  };

  const handlePrivacyChange = (key: string, value: boolean | string) => {
    setPrivacy({ ...privacy, [key]: value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Privacy & Security
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Account
            </TabsTrigger>
          </TabsList>

          {/* Profile Settings */}
          <TabsContent value="profile">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your public profile information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-blue-100 text-blue-700 text-xl">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm">
                        <Camera className="h-4 w-4 mr-2" />
                        Change Photo
                      </Button>
                      <p className="text-sm text-gray-600">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="john@university.edu"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-4">
                    <h4 className="font-medium">Education</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="college">College/University</Label>
                        <Input
                          id="college"
                          defaultValue="Stanford University"
                        />
                      </div>
                      <div>
                        <Label htmlFor="year">Year</Label>
                        <Select defaultValue="junior">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="freshman">Freshman</SelectItem>
                            <SelectItem value="sophomore">Sophomore</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="major">Major</Label>
                        <Input id="major" defaultValue="Computer Science" />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue="Palo Alto, CA" />
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      rows={4}
                      defaultValue="Passionate about full-stack development and machine learning. Love teaching others and learning new technologies."
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Brief description for your profile (max 500 characters)
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    <div>
                      <Label>Skills I Can Teach</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="default">JavaScript</Badge>
                        <Badge variant="default">React</Badge>
                        <Badge variant="default">Node.js</Badge>
                        <Badge variant="default">Python</Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 px-2"
                        >
                          + Add Skill
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label>Skills I Want to Learn</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Machine Learning</Badge>
                        <Badge variant="outline">Data Science</Badge>
                        <Badge variant="outline">DevOps</Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-6 px-2"
                        >
                          + Add Skill
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notification Settings */}
          <TabsContent value="notifications">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Choose what updates you receive via email
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-exchange">Exchange Requests</Label>
                      <p className="text-sm text-gray-600">
                        Get notified when someone requests a skill exchange
                      </p>
                    </div>
                    <Switch
                      id="email-exchange"
                      checked={notifications.emailExchange}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("emailExchange", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-messages">New Messages</Label>
                      <p className="text-sm text-gray-600">
                        Get notified when you receive new messages
                      </p>
                    </div>
                    <Switch
                      id="email-messages"
                      checked={notifications.emailMessages}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("emailMessages", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="email-reminders">Session Reminders</Label>
                      <p className="text-sm text-gray-600">
                        Get reminded about upcoming sessions
                      </p>
                    </div>
                    <Switch
                      id="email-reminders"
                      checked={notifications.emailReminders}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("emailReminders", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                  <CardDescription>
                    Real-time notifications in your browser
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-exchange">Exchange Updates</Label>
                      <p className="text-sm text-gray-600">
                        Instant notifications for exchange activities
                      </p>
                    </div>
                    <Switch
                      id="push-exchange"
                      checked={notifications.pushExchange}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("pushExchange", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-messages">Messages</Label>
                      <p className="text-sm text-gray-600">
                        Real-time message notifications
                      </p>
                    </div>
                    <Switch
                      id="push-messages"
                      checked={notifications.pushMessages}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("pushMessages", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="push-reminders">Reminders</Label>
                      <p className="text-sm text-gray-600">
                        Session and deadline reminders
                      </p>
                    </div>
                    <Switch
                      id="push-reminders"
                      checked={notifications.pushReminders}
                      onCheckedChange={(checked) =>
                        handleNotificationChange("pushReminders", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Privacy & Security */}
          <TabsContent value="privacy">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control who can see your information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="visibility">Profile Visibility</Label>
                    <Select
                      value={privacy.profileVisibility}
                      onValueChange={(value) =>
                        handlePrivacyChange("profileVisibility", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="students">Students Only</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-email">Show Email Address</Label>
                      <p className="text-sm text-gray-600">
                        Display your email on your public profile
                      </p>
                    </div>
                    <Switch
                      id="show-email"
                      checked={privacy.showEmail}
                      onCheckedChange={(checked) =>
                        handlePrivacyChange("showEmail", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="show-location">Show Location</Label>
                      <p className="text-sm text-gray-600">
                        Display your location on your profile
                      </p>
                    </div>
                    <Switch
                      id="show-location"
                      checked={privacy.showLocation}
                      onCheckedChange={(checked) =>
                        handlePrivacyChange("showLocation", checked)
                      }
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="direct-messages">
                        Allow Direct Messages
                      </Label>
                      <p className="text-sm text-gray-600">
                        Let other users send you direct messages
                      </p>
                    </div>
                    <Switch
                      id="direct-messages"
                      checked={privacy.allowDirectMessages}
                      onCheckedChange={(checked) =>
                        handlePrivacyChange("allowDirectMessages", checked)
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    Manage your account security settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="Enter current password"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() =>
                          setShowCurrentPassword(!showCurrentPassword)
                        }
                      >
                        {showCurrentPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="Enter new password"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Account Settings */}
          <TabsContent value="account">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                  <CardDescription>
                    Manage your account details and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Account Type</Label>
                      <p className="text-sm text-gray-600">Student Account</p>
                    </div>
                    <div>
                      <Label>Member Since</Label>
                      <p className="text-sm text-gray-600">September 2023</p>
                    </div>
                    <div>
                      <Label>Total Sessions</Label>
                      <p className="text-sm text-gray-600">42 completed</p>
                    </div>
                    <div>
                      <Label>Current Rating</Label>
                      <p className="text-sm text-gray-600">4.8 stars</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Language & Region</CardTitle>
                  <CardDescription>
                    Set your language and timezone preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="pst">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pst">
                          Pacific Standard Time (PST)
                        </SelectItem>
                        <SelectItem value="est">
                          Eastern Standard Time (EST)
                        </SelectItem>
                        <SelectItem value="cst">
                          Central Standard Time (CST)
                        </SelectItem>
                        <SelectItem value="mst">
                          Mountain Standard Time (MST)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Danger Zone
                  </CardTitle>
                  <CardDescription>
                    Irreversible and destructive actions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Deactivate Account</Label>
                    <p className="text-sm text-gray-600">
                      Temporarily disable your account. You can reactivate it
                      later.
                    </p>
                    <Button variant="outline">Deactivate Account</Button>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <Label>Delete Account</Label>
                    <p className="text-sm text-gray-600">
                      Permanently delete your account and all associated data.
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Are you absolutely sure?</DialogTitle>
                          <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex justify-end gap-2">
                          <Button variant="outline">Cancel</Button>
                          <Button variant="destructive">
                            Yes, delete my account
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Settings;
