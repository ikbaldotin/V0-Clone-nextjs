"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav
      className={cn(
        "p-4 bg-transparent fixed top-0 left-0 right-0 z-50 transition-all , duration-200 border-b border-transparent"
      )}
    >
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="Vibe"
            width={32}
            height={32}
            className="shrink-0 invert dark:invert-0"
          />
        </Link>
        <div className="max-w-5xl mx-auto w-full flex flex-row-reverse justify-between items-center">
          <UserButton />
        </div>
        <SignedOut>
          <div className="flex gap-2">
            <SignUpButton>
              <Button variant={"outline"} size={"sm"}>
                Sign In
              </Button>
            </SignUpButton>
            <SignInButton>
              <Button size={"sm"}>Sign Up</Button>
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    </nav>
  );
};
