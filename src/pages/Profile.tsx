import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User } from "lucide-react";

const Profile = () => {
  const { userId } = useParams();
  const isOwnProfile = !userId;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <User className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">
              {isOwnProfile ? "Your Profile" : "User Profile"}
            </CardTitle>
            <CardDescription>
              Profile page coming soon - this will show user information,
              skills, ratings, and bio
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p>This page will include:</p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>• Profile picture and banner</li>
              <li>• Name, college, and year</li>
              <li>• Bio and about section</li>
              <li>• Skills they can teach</li>
              <li>• Skills they want to learn</li>
              <li>• Star ratings and reviews</li>
              <li>• Message and request exchange buttons</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;
