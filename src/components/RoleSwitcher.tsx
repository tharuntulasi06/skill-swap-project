import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Settings } from "lucide-react";

interface RoleSwitcherProps {
  currentRole: "user" | "admin";
  onRoleChange: (role: "user" | "admin") => void;
}

const RoleSwitcher = ({ currentRole, onRoleChange }: RoleSwitcherProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          {currentRole === "admin" ? (
            <Shield className="h-4 w-4" />
          ) : (
            <User className="h-4 w-4" />
          )}
          <Badge
            variant={currentRole === "admin" ? "destructive" : "default"}
            className="text-xs"
          >
            {currentRole.toUpperCase()}
          </Badge>
          <Settings className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Switch Role (Demo)</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => onRoleChange("user")}
          className={currentRole === "user" ? "bg-gray-100" : ""}
        >
          <User className="mr-2 h-4 w-4" />
          User Dashboard
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onRoleChange("admin")}
          className={currentRole === "admin" ? "bg-gray-100" : ""}
        >
          <Shield className="mr-2 h-4 w-4" />
          Admin Dashboard
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default RoleSwitcher;
