import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you would check authentication status here
    // For now, redirect to login
    navigate("/login");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-2xl font-semibold text-gray-800 flex items-center justify-center gap-3">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            viewBox="0 0 50 50"
          >
            <circle
              className="opacity-30"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
            />
            <circle
              className="text-blue-600"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="5"
              fill="none"
              strokeDasharray="100"
              strokeDashoffset="75"
            />
          </svg>
          Redirecting to SkillSwap...
        </h1>
      </div>
    </div>
  );
};

export default Index;
