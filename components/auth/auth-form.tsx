"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function AuthForm() {
  const [mode, setMode] = useState<"login" | "register" | "payment">("login");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      if (mode === "register") {
        setMode("payment");
      } else if (mode === "login") {
        window.location.href = "/dashboard";
      }
    }, 1500);
  };

  if (mode === "payment") {
    return (
      <Card className="w-full max-w-md mx-auto border-primary shadow-lg shadow-primary/10">
        <CardHeader className="text-center">
          <CardTitle>One Last Step</CardTitle>
          <CardDescription>
            To activate your account, please complete the monthly subscription payment.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-surface p-4 border border-border-subtle">
            <p className="text-sm text-text-secondary mb-2 uppercase font-bold tracking-wider">PayPal Payment Instruction</p>
            <p className="text-text-primary font-medium">Send ,000 to:</p>
            <p className="text-xl font-bold text-primary mt-1">Donor Onojovwo</p>
            <p className="text-xs text-text-secondary mt-4 italic">
              Note: Please use the email you registered with in the PayPal note.
            </p>
          </div>
          <p className="text-sm text-text-secondary text-center">
            After paying, click the button below. We will verify your payment and approve your account within 24 hours.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" size="lg" onClick={() => window.location.href = "/dashboard"}>
            I've Paid
          </Button>
          <Button variant="ghost" className="w-full" onClick={() => setMode("login")}>
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle>{mode === "login" ? "Welcome Back" : "Create Account"}</CardTitle>
        <CardDescription>
          {mode === "login" 
            ? "Enter your credentials to access your dashboard" 
            : "Sign up to start automating your appointment setting"}
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {mode === "register" && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button className="w-full" type="submit" disabled={isLoading}>
            {isLoading ? "Please wait..." : mode === "login" ? "Sign In" : "Create Account"}
          </Button>
          <div className="text-sm text-center text-text-secondary">
            {mode === "login" ? (
              <>
                Don't have an account?{" "}
                <button 
                  type="button" 
                  className="text-primary hover:underline font-medium"
                  onClick={() => setMode("register")}
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button 
                  type="button" 
                  className="text-primary hover:underline font-medium"
                  onClick={() => setMode("login")}
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
