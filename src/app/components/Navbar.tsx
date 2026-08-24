"use client";

import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="h-16 w-full py-4 px-6 lg:px-16 flex items-center justify-between sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div onClick={() => router.push("/")} className="cursor-pointer text-3xl font-bold text-foreground">
        <span className="text-primary tracking-tighter">G</span>enie
      </div>

      <div className="hidden lg:flex items-center gap-8">
        <div className="flex gap-6 text-foreground font-medium">
          <div
            onClick={() => router.push("#about")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </div>
          <div
            onClick={() => router.push("#projects")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Projects
          </div>
          <div
            onClick={() => router.push("#contact")}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Contact
          </div>
        </div>
        <ThemeToggle />
      </div>

      <div className="lg:hidden flex items-center gap-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-48 bg-background/95 backdrop-blur-md"
          >
            <DropdownMenuItem onClick={() => router.push("#about")}>
              About
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("#projects")}>
              Projects
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("#contact")}>
              Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}