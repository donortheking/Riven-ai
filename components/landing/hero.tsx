import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,rgba(99,102,241,0.1)_0%,transparent_100%)]" />
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Scale Your High-Ticket Sales with <span className="text-primary">AI Appointment Setters</span> That Never Sleep.
          </h1>
          <p className="mt-6 text-lg leading-8 text-text-secondary">
            Riven AI researches your leads, sends personalized messages across LinkedIn, Twitter, and Email, and books qualified meetings directly into your calendar. Stop wasting time on cold outreach and start closing 5-6 figure deals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/auth">
              <Button size="lg">
                Get Started for $1,000/Month
              </Button>
            </Link>
            <Link href="#features" className="text-sm font-semibold leading-6 text-text-primary">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
