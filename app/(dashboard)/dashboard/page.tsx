import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Zap, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">Dashboard</h1>
        <p className="text-text-secondary">Welcome back, Donor. Here's what's happening with your AI agents.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Appointments Booked" 
          value="24" 
          trend={12} 
          label="from last month" 
        />
        <StatsCard 
          title="Messages Sent" 
          value="1,284" 
          trend={8} 
          label="from last month" 
        />
        <StatsCard 
          title="Active Leads" 
          value="452" 
          trend={24} 
          label="from last month" 
        />
        <StatsCard 
          title="Response Rate" 
          value="18.5%" 
          trend={-2} 
          label="from last month" 
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center">
                  <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none text-text-primary">
                      AI Agent booked an appointment with Sarah Chen
                    </p>
                    <p className="text-xs text-text-secondary">
                      2 hours ago • Techflow Solutions
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-xs text-text-secondary">
                    Just now
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3 bg-surface border-border-subtle">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link href="/leads" className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <UserPlus className="h-4 w-4" /> Add New Lead
              </Button>
            </Link>
            <Link href="/campaigns" className="block">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Zap className="h-4 w-4" /> Start Campaign
              </Button>
            </Link>
            <Button variant="outline" className="w-full justify-start gap-2">
              <Calendar className="h-4 w-4" /> View Calendar
            </Button>
            
            <div className="pt-4 border-t border-border-subtle mt-4">
              <div className="rounded-lg bg-primary/5 p-4 border border-primary/20">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <Zap className="h-4 w-4" /> AI Agent Status
                </h4>
                <p className="text-xs text-text-secondary mt-1">
                  Agent "Riven-1" is currently active and processing 12 leads.
                </p>
                <Button size="sm" className="mt-3 w-full text-xs">
                  View Agent Controls <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
