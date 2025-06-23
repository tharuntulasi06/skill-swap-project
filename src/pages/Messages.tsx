import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">Messages</CardTitle>
            <CardDescription>
              Chat with your skill exchange connections - coming soon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p>This page will include:</p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>• Split layout with chat list and chat window</li>
              <li>• Left panel: Chat list with user avatars</li>
              <li>• Last message preview for each chat</li>
              <li>• Right panel: Active chat window</li>
              <li>• Real-time messaging interface</li>
              <li>• Message input box with send button</li>
              <li>• Online status indicators</li>
              <li>• File and image sharing capabilities</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Messages;
