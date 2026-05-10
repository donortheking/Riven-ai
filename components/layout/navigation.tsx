"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/auth");
  const isDashboardPage = pathname?.startsWith("/dashboard") || 
                          pathname?.startsWith("/leads") || 
                          pathname?.startsWith("/campaigns") || 
                          pathname?.startsWith("/settings") ||
                          pathname?.startsWith("/admin");

  if (isAuthPage) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            RIVEN
          </Link>
          {!isDashboardPage && (
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          )}
        </div>
        <div className="flex items-center gap-4">
          {isDashboardPage ? (
            <Button variant="ghost" size="sm" onClick={() => {}}>
              Logout
            </Button>
          ) : (
            <>
              <Link href="/auth">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/auth">
                <Button size="sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
