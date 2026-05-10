import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Users, DollarSign, CheckCircle, XCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const pendingApprovals = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", date: "2023-11-09", amount: "$1,000" },
  { id: 2, name: "Bob Smith", email: "bob@techcorp.io", date: "2023-11-09", amount: "$1,000" },
  { id: 3, name: "Charlie Davis", email: "charlie@startup.co", date: "2023-11-08", amount: "$1,000" },
];

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">Admin Panel</h1>
        <p className="text-text-secondary">Owner dashboard for managing users and approvals.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-surface border-border-subtle">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">$45,000</div>
            <p className="text-xs text-text-secondary">+15% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-surface border-border-subtle">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Active Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">45</div>
            <p className="text-xs text-text-secondary">+5 new this week</p>
          </CardContent>
        </Card>
        <Card className="bg-surface border-border-subtle">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-text-secondary">Pending Approvals</CardTitle>
            <CheckCircle className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-text-primary">3</div>
            <p className="text-xs text-text-secondary">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-surface border-border-subtle">
        <CardHeader>
          <CardTitle>Pending Subscription Approvals</CardTitle>
          <CardDescription>Review and approve users who have marked themselves as paid via PayPal.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase text-text-secondary border-b border-border-subtle">
                <tr>
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {pendingApprovals.map((user) => (
                  <tr key={user.id} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-text-primary">{user.name}</p>
                        <p className="text-xs text-text-secondary">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-text-secondary">
                      {user.date}
                    </td>
                    <td className="px-6 py-4 text-text-primary font-bold">
                      {user.amount}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button size="sm" className="bg-success hover:bg-success/90">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="text-error border-error/50 hover:bg-error/10">
                          Reject
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
