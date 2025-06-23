import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

const BrowseSkills = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">Browse Skills</CardTitle>
            <CardDescription>
              Find users with specific skills - this page is coming soon
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-gray-600">
            <p>This page will include:</p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>• Advanced search bar with filters</li>
              <li>• Filter by skill category (Coding, Design, etc.)</li>
              <li>• Filter by type: Teach or Learn</li>
              <li>• Optional location filtering</li>
              <li>• Grid layout of user cards</li>
              <li>• Profile pics, names, and colleges</li>
              <li>• Teach/Learn badges</li>
              <li>• Skill tag lists</li>
              <li>• Request Exchange buttons</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BrowseSkills;
