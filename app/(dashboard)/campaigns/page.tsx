import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Plus, Play, Pause, BarChart3, Settings as SettingsIcon } from "lucide-react";

const campaigns = [
  { id: 1, name: "LinkedIn Q4 Outreach", status: "active", platform: "LinkedIn", leads: 120, conversions: 12, startDate: "Oct 12, 2023" },
  { id: 2, name: "Twitter SaaS Founders", status: "paused", platform: "Twitter", leads: 85, conversions: 4, startDate: "Nov 5, 2023" },
  { id: 3, name: "Email Cold Outreach", status: "active", platform: "Email", leads: 450, conversions: 32, startDate: "Sep 20, 2023" },
];

export default function CampaignsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">Campaigns</h1>
          <p className="text-text-secondary">Create and manage your AI outreach sequences.</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" /> New Campaign
        </Button>
      </div>

      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="bg-surface border-border-subtle overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-text-primary">{campaign.name}</h3>
                    <StatusBadge status={campaign.status} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <SettingsIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <BarChart3 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Platform</p>
                    <p className="text-sm font-medium text-text-primary mt-1">{campaign.platform}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Total Leads</p>
                    <p className="text-sm font-medium text-text-primary mt-1">{campaign.leads}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Conversions</p>
                    <p className="text-sm font-medium text-text-primary mt-1">{campaign.conversions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider font-bold">Conversion Rate</p>
                    <p className="text-sm font-medium text-text-primary mt-1">
                      {((campaign.conversions / campaign.leads) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 md:w-48 flex flex-row md:flex-col items-center justify-center gap-2 p-4 border-t md:border-t-0 md:border-l border-border-subtle">
                <Button variant={campaign.status === 'active' ? 'outline' : 'primary'} className="flex-1 md:w-full gap-2">
                  {campaign.status === 'active' ? (
                    <>
                      <Pause className="h-4 w-4" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" /> Resume
                    </>
                  )}
                </Button>
                <Button variant="ghost" className="flex-1 md:w-full text-error hover:text-error hover:bg-error/10">
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {campaigns.length === 0 && (
        <Card className="bg-surface border-border-subtle border-dashed p-12 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
            <Plus className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-text-primary">No campaigns yet</h3>
          <p className="text-text-secondary max-w-xs mx-auto mt-2">
            Create your first outreach campaign to start booking appointments.
          </p>
          <Button className="mt-6">Create Campaign</Button>
        </Card>
      )}
    </div>
  );
}
