import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Exchange = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">Skill Exchange Requests</CardTitle>
            <CardDescription>
              Manage your teaching and learning requests - coming soon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p>This page will include:</p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>• Tabs for Teach Requests and Learn Requests</li>
              <li>• Request exchange modal/form</li>
              <li>• Skill selection dropdown</li>
              <li>• Date and time scheduling</li>
              <li>• Optional notes section</li>
              <li>• Request status tracking</li>
              <li>• Accept/decline functionality</li>
              <li>• Calendar integration</li>
              <li>• Notification system</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Exchange;
