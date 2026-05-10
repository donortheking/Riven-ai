import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, UserPlus, Filter } from "lucide-react";
import { LeadRow } from "@/components/leads/lead-row";

const leads = [
  { id: 1, name: "Sarah Chen", company: "Techflow Solutions", email: "sarah@techflow.com", status: "active", score: 92, lastActivity: "2h ago" },
  { id: 2, name: "Michael Ross", company: "Pearson Hardman", email: "m.ross@ph.com", status: "pending", score: 75, lastActivity: "1d ago" },
  { id: 3, name: "Jessica Day", company: "Bright Education", email: "jess@bright.edu", status: "active", score: 88, lastActivity: "5h ago" },
  { id: 4, name: "Harvey Specter", company: "Pearson Hardman", email: "harvey@ph.com", status: "suspended", score: 45, lastActivity: "3d ago" },
  { id: 5, name: "Pam Beesly", company: "Dunder Mifflin", email: "pam@dm.com", status: "active", score: 95, lastActivity: "1h ago" },
];

export default function LeadsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-text-primary">Leads</h1>
          <p className="text-text-secondary">Manage and track your high-ticket prospects.</p>
        </div>
        <Button className="gap-2">
          <UserPlus className="h-4 w-4" /> Add Lead
        </Button>
      </div>

      <Card className="bg-surface border-border-subtle">
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-secondary" />
              <Input className="pl-10" placeholder="Search leads by name, company, or email..." />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm">
                Import CSV
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-text-secondary border-b border-border-subtle">
                <tr>
                  <th className="px-6 py-3 font-medium">Lead</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Score</th>
                  <th className="px-6 py-3 font-medium">Last Activity</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {leads.map((lead) => (
                  <LeadRow key={lead.id} lead={lead} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
