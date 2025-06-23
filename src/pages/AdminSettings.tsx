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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Settings,
  Shield,
  Database,
  Mail,
  Bell,
  Globe,
  DollarSign,
  Users,
  FileText,
  Key,
  AlertTriangle,
  Save,
  RefreshCw,
  Download,
  Upload,
  Server,
  Lock,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
} from "lucide-react";

const AdminSettings = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  // Platform Settings State
  const [platformSettings, setPlatformSettings] = useState({
    siteName: "SkillSwap",
    siteDescription: "Connect, Learn, and Teach with Peers",
    maintenanceMode: false,
    allowRegistrations: true,
    requireEmailVerification: true,
    enableTwoFactor: false,
    sessionTimeout: 24,
    maxFileSize: 10,
    supportedFileTypes: "jpg,png,gif,pdf,doc,docx",
  });

  const [securitySettings, setSecuritySettings] = useState({
    passwordMinLength: 8,
    passwordRequireSpecial: true,
    loginAttempts: 3,
    lockoutDuration: 30,
    enableRateLimiting: true,
    enableIpBlocking: true,
    enableCaptcha: false,
    sessionSecurity: "standard",
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    adminAlerts: true,
    moderationAlerts: true,
    systemAlerts: true,
    userReportAlerts: true,
    autoModeration: true,
  });

  const [paymentSettings, setPaymentSettings] = useState({
    enablePayments: true,
    currency: "USD",
    platformFee: 5,
    payoutSchedule: "weekly",
    minimumPayout: 10,
    paymentMethods: ["stripe", "paypal"],
    taxCalculation: true,
  });

  const [emailTemplates, setEmailTemplates] = useState([
    {
      id: 1,
      name: "Welcome Email",
      subject: "Welcome to SkillSwap!",
      lastModified: "2024-01-10",
      status: "active",
    },
    {
      id: 2,
      name: "Password Reset",
      subject: "Reset Your Password",
      lastModified: "2024-01-08",
      status: "active",
    },
    {
      id: 3,
      name: "Session Reminder",
      subject: "Your session starts in 1 hour",
      lastModified: "2024-01-05",
      status: "active",
    },
    {
      id: 4,
      name: "Report Notification",
      subject: "Content has been reported",
      lastModified: "2024-01-03",
      status: "draft",
    },
  ]);

  const [apiSettings, setApiSettings] = useState({
    apiKey: "sk_live_51H8F2LGnFv...",
    webhookUrl: "https://api.skillswap.com/webhooks",
    rateLimitRequests: 1000,
    rateLimitWindow: 60,
    enableLogging: true,
    logLevel: "info",
  });

  const handleSave = (section: string) => {
    console.log(`Saving ${section} settings`);
    setUnsavedChanges(false);
    // In a real app, this would call the API
  };

  const handleReset = () => {
    console.log("Resetting settings");
    // Reset to original values
  };

  const handleExportSettings = () => {
    console.log("Exporting settings");
    // Export current settings as JSON
  };

  const handleImportSettings = () => {
    console.log("Importing settings");
    // Import settings from file
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar />

      <main className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Platform Settings
            </h1>
            <p className="text-gray-600">
              Configure platform behavior, security, and integrations
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleExportSettings}>
              <Download className="h-4 w-4 mr-2" />
              Export Config
            </Button>
            <Button variant="outline" onClick={handleImportSettings}>
              <Upload className="h-4 w-4 mr-2" />
              Import Config
            </Button>
            {unsavedChanges && (
              <Button onClick={() => handleSave("all")}>
                <Save className="h-4 w-4 mr-2" />
                Save All Changes
              </Button>
            )}
          </div>
        </div>

        {/* Unsaved Changes Alert */}
        {unsavedChanges && (
          <Card className="border-yellow-200 bg-yellow-50 mb-6">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <p className="text-yellow-800">
                  You have unsaved changes. Remember to save your configuration.
                </p>
                <Button
                  size="sm"
                  onClick={() => handleSave("all")}
                  className="ml-auto"
                >
                  Save Now
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="flex items-center gap-2"
            >
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="email" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              API & Integrations
            </TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Information</CardTitle>
                  <CardDescription>
                    Basic platform settings and branding
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input
                      id="siteName"
                      value={platformSettings.siteName}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          siteName: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea
                      id="siteDescription"
                      value={platformSettings.siteDescription}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          siteDescription: e.target.value,
                        })
                      }
                      rows={3}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
                      <p className="text-sm text-gray-600">
                        Temporarily disable site access
                      </p>
                    </div>
                    <Switch
                      id="maintenanceMode"
                      checked={platformSettings.maintenanceMode}
                      onCheckedChange={(checked) =>
                        setPlatformSettings({
                          ...platformSettings,
                          maintenanceMode: checked,
                        })
                      }
                    />
                  </div>
                  <Button onClick={() => handleSave("general")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save General Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Registration</CardTitle>
                  <CardDescription>
                    Control user registration and verification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="allowRegistrations">
                        Allow New Registrations
                      </Label>
                      <p className="text-sm text-gray-600">
                        Enable new user sign-ups
                      </p>
                    </div>
                    <Switch
                      id="allowRegistrations"
                      checked={platformSettings.allowRegistrations}
                      onCheckedChange={(checked) =>
                        setPlatformSettings({
                          ...platformSettings,
                          allowRegistrations: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="requireEmailVerification">
                        Require Email Verification
                      </Label>
                      <p className="text-sm text-gray-600">
                        Users must verify email before accessing platform
                      </p>
                    </div>
                    <Switch
                      id="requireEmailVerification"
                      checked={platformSettings.requireEmailVerification}
                      onCheckedChange={(checked) =>
                        setPlatformSettings({
                          ...platformSettings,
                          requireEmailVerification: checked,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="sessionTimeout">
                      Session Timeout (hours)
                    </Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={platformSettings.sessionTimeout}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          sessionTimeout: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>File Upload Settings</CardTitle>
                  <CardDescription>
                    Configure file upload limits and types
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="maxFileSize">Maximum File Size (MB)</Label>
                    <Input
                      id="maxFileSize"
                      type="number"
                      value={platformSettings.maxFileSize}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          maxFileSize: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="supportedFileTypes">
                      Supported File Types
                    </Label>
                    <Input
                      id="supportedFileTypes"
                      value={platformSettings.supportedFileTypes}
                      onChange={(e) =>
                        setPlatformSettings({
                          ...platformSettings,
                          supportedFileTypes: e.target.value,
                        })
                      }
                      placeholder="jpg,png,pdf,doc"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      Comma-separated list of allowed file extensions
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Current platform health</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Database Online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Email Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Payment Gateway</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span>SMS Service</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Check System Health
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Security Settings */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password Policy</CardTitle>
                  <CardDescription>
                    Configure password requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="passwordMinLength">
                      Minimum Password Length
                    </Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={securitySettings.passwordMinLength}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          passwordMinLength: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="passwordRequireSpecial">
                        Require Special Characters
                      </Label>
                      <p className="text-sm text-gray-600">
                        Force special characters in passwords
                      </p>
                    </div>
                    <Switch
                      id="passwordRequireSpecial"
                      checked={securitySettings.passwordRequireSpecial}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          passwordRequireSpecial: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableTwoFactor">
                        Enable Two-Factor Authentication
                      </Label>
                      <p className="text-sm text-gray-600">
                        Require 2FA for admin accounts
                      </p>
                    </div>
                    <Switch
                      id="enableTwoFactor"
                      checked={platformSettings.enableTwoFactor}
                      onCheckedChange={(checked) =>
                        setPlatformSettings({
                          ...platformSettings,
                          enableTwoFactor: checked,
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Login Security</CardTitle>
                  <CardDescription>
                    Protect against unauthorized access
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="loginAttempts">
                      Max Failed Login Attempts
                    </Label>
                    <Input
                      id="loginAttempts"
                      type="number"
                      value={securitySettings.loginAttempts}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          loginAttempts: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="lockoutDuration">
                      Lockout Duration (minutes)
                    </Label>
                    <Input
                      id="lockoutDuration"
                      type="number"
                      value={securitySettings.lockoutDuration}
                      onChange={(e) =>
                        setSecuritySettings({
                          ...securitySettings,
                          lockoutDuration: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableCaptcha">Enable CAPTCHA</Label>
                      <p className="text-sm text-gray-600">
                        Show CAPTCHA after failed attempts
                      </p>
                    </div>
                    <Switch
                      id="enableCaptcha"
                      checked={securitySettings.enableCaptcha}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          enableCaptcha: checked,
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Advanced Security</CardTitle>
                  <CardDescription>
                    Additional security measures
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableRateLimiting">
                        Enable Rate Limiting
                      </Label>
                      <p className="text-sm text-gray-600">
                        Limit API requests per user
                      </p>
                    </div>
                    <Switch
                      id="enableRateLimiting"
                      checked={securitySettings.enableRateLimiting}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          enableRateLimiting: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableIpBlocking">
                        Enable IP Blocking
                      </Label>
                      <p className="text-sm text-gray-600">
                        Block suspicious IP addresses
                      </p>
                    </div>
                    <Switch
                      id="enableIpBlocking"
                      checked={securitySettings.enableIpBlocking}
                      onCheckedChange={(checked) =>
                        setSecuritySettings({
                          ...securitySettings,
                          enableIpBlocking: checked,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="sessionSecurity">
                      Session Security Level
                    </Label>
                    <Select
                      value={securitySettings.sessionSecurity}
                      onValueChange={(value) =>
                        setSecuritySettings({
                          ...securitySettings,
                          sessionSecurity: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="strict">Strict</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={() => handleSave("security")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Security Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Settings */}
          <TabsContent value="notifications">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Channels</CardTitle>
                  <CardDescription>
                    Configure notification delivery methods
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="emailNotifications">
                        Email Notifications
                      </Label>
                      <p className="text-sm text-gray-600">
                        Send notifications via email
                      </p>
                    </div>
                    <Switch
                      id="emailNotifications"
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          emailNotifications: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pushNotifications">
                        Push Notifications
                      </Label>
                      <p className="text-sm text-gray-600">
                        Browser push notifications
                      </p>
                    </div>
                    <Switch
                      id="pushNotifications"
                      checked={notificationSettings.pushNotifications}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          pushNotifications: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="smsNotifications">
                        SMS Notifications
                      </Label>
                      <p className="text-sm text-gray-600">
                        Send critical alerts via SMS
                      </p>
                    </div>
                    <Switch
                      id="smsNotifications"
                      checked={notificationSettings.smsNotifications}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          smsNotifications: checked,
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Admin Alerts</CardTitle>
                  <CardDescription>
                    Configure admin notification preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="adminAlerts">General Admin Alerts</Label>
                      <p className="text-sm text-gray-600">
                        Platform updates and system alerts
                      </p>
                    </div>
                    <Switch
                      id="adminAlerts"
                      checked={notificationSettings.adminAlerts}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          adminAlerts: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="moderationAlerts">
                        Moderation Alerts
                      </Label>
                      <p className="text-sm text-gray-600">
                        User reports and content flags
                      </p>
                    </div>
                    <Switch
                      id="moderationAlerts"
                      checked={notificationSettings.moderationAlerts}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          moderationAlerts: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="systemAlerts">System Alerts</Label>
                      <p className="text-sm text-gray-600">
                        Server errors and performance issues
                      </p>
                    </div>
                    <Switch
                      id="systemAlerts"
                      checked={notificationSettings.systemAlerts}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          systemAlerts: checked,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="autoModeration">Auto-Moderation</Label>
                      <p className="text-sm text-gray-600">
                        Automatically handle minor violations
                      </p>
                    </div>
                    <Switch
                      id="autoModeration"
                      checked={notificationSettings.autoModeration}
                      onCheckedChange={(checked) =>
                        setNotificationSettings({
                          ...notificationSettings,
                          autoModeration: checked,
                        })
                      }
                    />
                  </div>
                  <Button onClick={() => handleSave("notifications")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payments Settings */}
          <TabsContent value="payments">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Configuration</CardTitle>
                  <CardDescription>
                    Configure payment processing and fees
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enablePayments">Enable Payments</Label>
                      <p className="text-sm text-gray-600">
                        Allow monetary transactions on platform
                      </p>
                    </div>
                    <Switch
                      id="enablePayments"
                      checked={paymentSettings.enablePayments}
                      onCheckedChange={(checked) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          enablePayments: checked,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="currency">Default Currency</Label>
                    <Select
                      value={paymentSettings.currency}
                      onValueChange={(value) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          currency: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="CAD">
                          CAD - Canadian Dollar
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="platformFee">Platform Fee (%)</Label>
                    <Input
                      id="platformFee"
                      type="number"
                      value={paymentSettings.platformFee}
                      onChange={(e) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          platformFee: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="minimumPayout">Minimum Payout Amount</Label>
                    <Input
                      id="minimumPayout"
                      type="number"
                      value={paymentSettings.minimumPayout}
                      onChange={(e) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          minimumPayout: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payout Settings</CardTitle>
                  <CardDescription>
                    Configure how and when users get paid
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="payoutSchedule">Payout Schedule</Label>
                    <Select
                      value={paymentSettings.payoutSchedule}
                      onValueChange={(value) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          payoutSchedule: value,
                        })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="manual">Manual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="taxCalculation">
                        Enable Tax Calculation
                      </Label>
                      <p className="text-sm text-gray-600">
                        Automatically calculate taxes on earnings
                      </p>
                    </div>
                    <Switch
                      id="taxCalculation"
                      checked={paymentSettings.taxCalculation}
                      onCheckedChange={(checked) =>
                        setPaymentSettings({
                          ...paymentSettings,
                          taxCalculation: checked,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label>Supported Payment Methods</Label>
                    <div className="space-y-2 mt-2">
                      {["stripe", "paypal", "bank_transfer", "crypto"].map(
                        (method) => (
                          <div
                            key={method}
                            className="flex items-center space-x-2"
                          >
                            <input
                              type="checkbox"
                              id={method}
                              checked={paymentSettings.paymentMethods.includes(
                                method,
                              )}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setPaymentSettings({
                                    ...paymentSettings,
                                    paymentMethods: [
                                      ...paymentSettings.paymentMethods,
                                      method,
                                    ],
                                  });
                                } else {
                                  setPaymentSettings({
                                    ...paymentSettings,
                                    paymentMethods:
                                      paymentSettings.paymentMethods.filter(
                                        (m) => m !== method,
                                      ),
                                  });
                                }
                              }}
                            />
                            <Label htmlFor={method} className="capitalize">
                              {method.replace("_", " ")}
                            </Label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <Button onClick={() => handleSave("payments")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Payment Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Email Settings */}
          <TabsContent value="email">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Email Templates</CardTitle>
                  <CardDescription>
                    Manage automated email templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {emailTemplates.map((template) => (
                      <div
                        key={template.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <h4 className="font-semibold">{template.name}</h4>
                          <p className="text-sm text-gray-600">
                            {template.subject}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant={
                                template.status === "active"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {template.status}
                            </Badge>
                            <span className="text-xs text-gray-500">
                              Modified: {template.lastModified}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4 mr-2" />
                            Preview
                          </Button>
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* API & Integrations */}
          <TabsContent value="api">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Configuration</CardTitle>
                  <CardDescription>
                    Manage API keys and access settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="apiKey">API Key</Label>
                    <div className="flex gap-2">
                      <Input
                        id="apiKey"
                        type={showApiKey ? "text" : "password"}
                        value={apiSettings.apiKey}
                        readOnly
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      value={apiSettings.webhookUrl}
                      onChange={(e) =>
                        setApiSettings({
                          ...apiSettings,
                          webhookUrl: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="rateLimitRequests">
                        Rate Limit (requests)
                      </Label>
                      <Input
                        id="rateLimitRequests"
                        type="number"
                        value={apiSettings.rateLimitRequests}
                        onChange={(e) =>
                          setApiSettings({
                            ...apiSettings,
                            rateLimitRequests: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="rateLimitWindow">
                        Rate Limit Window (seconds)
                      </Label>
                      <Input
                        id="rateLimitWindow"
                        type="number"
                        value={apiSettings.rateLimitWindow}
                        onChange={(e) =>
                          setApiSettings({
                            ...apiSettings,
                            rateLimitWindow: parseInt(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Logging & Monitoring</CardTitle>
                  <CardDescription>
                    Configure system logging and monitoring
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="enableLogging">Enable API Logging</Label>
                      <p className="text-sm text-gray-600">
                        Log all API requests and responses
                      </p>
                    </div>
                    <Switch
                      id="enableLogging"
                      checked={apiSettings.enableLogging}
                      onCheckedChange={(checked) =>
                        setApiSettings({
                          ...apiSettings,
                          enableLogging: checked,
                        })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="logLevel">Log Level</Label>
                    <Select
                      value={apiSettings.logLevel}
                      onValueChange={(value) =>
                        setApiSettings({ ...apiSettings, logLevel: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="error">Error</SelectItem>
                        <SelectItem value="warn">Warning</SelectItem>
                        <SelectItem value="info">Info</SelectItem>
                        <SelectItem value="debug">Debug</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => console.log("Generate new API key")}
                    >
                      <Key className="h-4 w-4 mr-2" />
                      Generate New API Key
                    </Button>
                  </div>
                  <Button onClick={() => handleSave("api")}>
                    <Save className="h-4 w-4 mr-2" />
                    Save API Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminSettings;
