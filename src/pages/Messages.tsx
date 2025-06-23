import { useState, useRef, useEffect } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Send,
  Search,
  MoreVertical,
  Phone,
  Video,
  Info,
  Star,
  Calendar,
  Paperclip,
  Image as ImageIcon,
  Smile,
  Clock,
  CheckCheck,
  Plus,
  UserPlus,
} from "lucide-react";

const Messages = () => {
  const [activeChat, setActiveChat] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeChat]);

  // Mock data for conversations
  const conversations = [
    {
      id: 1,
      participant: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg",
        college: "MIT",
        isOnline: true,
        lastSeen: "now",
      },
      lastMessage: {
        text: "That sounds great! When would you like to start?",
        timestamp: "2 min ago",
        isRead: true,
        sender: "them",
      },
      unreadCount: 0,
      skill: "React Development",
      sessionScheduled: true,
    },
    {
      id: 2,
      participant: {
        name: "Alex Thompson",
        avatar: "/placeholder.svg",
        college: "Stanford",
        isOnline: false,
        lastSeen: "1 hour ago",
      },
      lastMessage: {
        text: "I'd love to help you with machine learning concepts!",
        timestamp: "1 hour ago",
        isRead: true,
        sender: "them",
      },
      unreadCount: 2,
      skill: "Machine Learning",
      sessionScheduled: false,
    },
    {
      id: 3,
      participant: {
        name: "Emily Rodriguez",
        avatar: "/placeholder.svg",
        college: "Berkeley",
        isOnline: true,
        lastSeen: "now",
      },
      lastMessage: {
        text: "¡Perfecto! Let's practice conversational Spanish",
        timestamp: "3 hours ago",
        isRead: false,
        sender: "them",
      },
      unreadCount: 1,
      skill: "Spanish Language",
      sessionScheduled: false,
    },
    {
      id: 4,
      participant: {
        name: "David Kim",
        avatar: "/placeholder.svg",
        college: "Harvard",
        isOnline: false,
        lastSeen: "Yesterday",
      },
      lastMessage: {
        text: "Thanks for the photography tips!",
        timestamp: "Yesterday",
        isRead: true,
        sender: "you",
      },
      unreadCount: 0,
      skill: "Photography",
      sessionScheduled: false,
    },
    {
      id: 5,
      participant: {
        name: "Jessica Lee",
        avatar: "/placeholder.svg",
        college: "Yale",
        isOnline: false,
        lastSeen: "2 days ago",
      },
      lastMessage: {
        text: "Can we schedule a session for next week?",
        timestamp: "2 days ago",
        isRead: true,
        sender: "them",
      },
      unreadCount: 0,
      skill: "Business Strategy",
      sessionScheduled: false,
    },
  ];

  // Mock data for messages in active chat
  const getMessagesForChat = (chatId: number) => {
    const messageData: Record<number, any[]> = {
      1: [
        {
          id: 1,
          text: "Hi John! I saw your request to learn React. I'd be happy to help!",
          timestamp: "10:30 AM",
          sender: "them",
          isRead: true,
        },
        {
          id: 2,
          text: "That's amazing! I've been trying to understand hooks better.",
          timestamp: "10:32 AM",
          sender: "you",
          isRead: true,
        },
        {
          id: 3,
          text: "Perfect! Hooks can be tricky at first, but they're really powerful once you get the hang of them. What specific aspects are you struggling with?",
          timestamp: "10:33 AM",
          sender: "them",
          isRead: true,
        },
        {
          id: 4,
          text: "Mainly useState and useEffect. I understand the concept but when to use them together confuses me.",
          timestamp: "10:35 AM",
          sender: "you",
          isRead: true,
        },
        {
          id: 5,
          text: "Great question! Let me explain with a practical example. Would you prefer a video call or should I share some code examples first?",
          timestamp: "10:36 AM",
          sender: "them",
          isRead: true,
        },
        {
          id: 6,
          text: "Code examples would be perfect to start with!",
          timestamp: "10:37 AM",
          sender: "you",
          isRead: true,
        },
        {
          id: 7,
          text: "Awesome! I'll prepare a simple todo app example that uses both useState and useEffect. We can review it together and then I can show you how they work in different scenarios.",
          timestamp: "10:38 AM",
          sender: "them",
          isRead: true,
        },
        {
          id: 8,
          text: "That sounds great! When would you like to start?",
          timestamp: "10:40 AM",
          sender: "them",
          isRead: true,
        },
      ],
      2: [
        {
          id: 1,
          text: "Hey! I'd love to learn about machine learning from you!",
          timestamp: "Yesterday 3:00 PM",
          sender: "you",
          isRead: true,
        },
        {
          id: 2,
          text: "I'd love to help you with machine learning concepts!",
          timestamp: "Yesterday 3:30 PM",
          sender: "them",
          isRead: true,
        },
        {
          id: 3,
          text: "What's your background with programming and math?",
          timestamp: "Yesterday 3:31 PM",
          sender: "them",
          isRead: true,
        },
      ],
    };
    return messageData[chatId] || [];
  };

  const activeConversation = conversations.find((c) => c.id === activeChat);
  const messages = activeChat ? getMessagesForChat(activeChat) : [];

  const filteredConversations = conversations.filter((conv) =>
    conv.participant.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to the backend
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Conversations Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-xl font-semibold">Messages</h1>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Chat
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Start New Conversation</DialogTitle>
                    <DialogDescription>
                      Search for someone to start a skill exchange conversation
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="search-users">Search Users</Label>
                      <Input
                        id="search-users"
                        placeholder="Search by name, skill, or college..."
                      />
                    </div>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {/* Mock suggested users */}
                      {[
                        {
                          name: "Marco Silva",
                          college: "Columbia",
                          skill: "Guitar",
                        },
                        {
                          name: "Lisa Wang",
                          college: "UCLA",
                          skill: "Mandarin",
                        },
                        {
                          name: "James Brown",
                          college: "NYU",
                          skill: "Photography",
                        },
                      ].map((user, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarFallback>
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-gray-600">
                              {user.college} • {user.skill}
                            </p>
                          </div>
                          <Button size="sm" variant="outline">
                            <UserPlus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Conversations List */}
          <ScrollArea className="flex-1">
            <div className="p-2">
              {filteredConversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setActiveChat(conversation.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    activeChat === conversation.id
                      ? "bg-violet-50 border border-violet-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={conversation.participant.avatar} />
                      <AvatarFallback>
                        {conversation.participant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {conversation.participant.isOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold truncate">
                        {conversation.participant.name}
                      </h4>
                      <div className="flex items-center gap-1">
                        {conversation.sessionScheduled && (
                          <Calendar className="h-3 w-3 text-green-600" />
                        )}
                        {conversation.unreadCount > 0 && (
                          <Badge className="h-5 w-5 p-0 text-xs">
                            {conversation.unreadCount}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.participant.college}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-gray-500 truncate flex-1 mr-2">
                        {conversation.lastMessage.sender === "you" && "You: "}
                        {conversation.lastMessage.text}
                      </p>
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-gray-400">
                          {conversation.lastMessage.timestamp}
                        </span>
                        {conversation.lastMessage.isRead &&
                          conversation.lastMessage.sender === "you" && (
                            <CheckCheck className="h-3 w-3 text-blue-500" />
                          )}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs mt-1">
                      {conversation.skill}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {activeConversation ? (
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={activeConversation.participant.avatar} />
                    <AvatarFallback>
                      {activeConversation.participant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {activeConversation.participant.isOnline && (
                    <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold">
                    {activeConversation.participant.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{activeConversation.participant.college}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          activeConversation.participant.isOnline
                            ? "bg-green-500"
                            : "bg-gray-400"
                        }`}
                      ></div>
                      <span>
                        {activeConversation.participant.isOnline
                          ? "Online"
                          : `Last seen ${activeConversation.participant.lastSeen}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Video className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Info className="h-4 w-4 mr-2" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Session
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Star className="h-4 w-4 mr-2" />
                      Rate & Review
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem className="text-red-600">
                      Block User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Exchange Info Banner */}
            <div className="bg-violet-50 border-b border-violet-200 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{activeConversation.skill}</Badge>
                  <span className="text-sm text-gray-600">
                    Skill Exchange Session
                  </span>
                </div>
                {activeConversation.sessionScheduled ? (
                  <Badge className="bg-green-100 text-green-800">
                    Session Scheduled
                  </Badge>
                ) : (
                  <Button size="sm" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Session
                  </Button>
                )}
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "you" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === "you"
                          ? "bg-violet-600 text-white"
                          : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <div
                        className={`flex items-center justify-end gap-1 mt-1 ${
                          message.sender === "you"
                            ? "text-violet-200"
                            : "text-gray-500"
                        }`}
                      >
                        <span className="text-xs">{message.timestamp}</span>
                        {message.sender === "you" && (
                          <CheckCheck className="h-3 w-3" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-end gap-3">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex-1 relative">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="resize-none pr-12"
                    rows={1}
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className="px-6"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* No Chat Selected */
          <div className="flex-1 flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Select a conversation
              </h3>
              <p className="text-gray-600 mb-4">
                Choose a conversation from the sidebar to start messaging
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Start New Conversation
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Start New Conversation</DialogTitle>
                    <DialogDescription>
                      Search for someone to start a skill exchange conversation
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="search-users">Search Users</Label>
                      <Input
                        id="search-users"
                        placeholder="Search by name, skill, or college..."
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
