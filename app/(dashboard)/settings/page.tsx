import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Globe, Shield, CreditCard, Link as LinkIcon, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">Settings</h1>
        <p className="text-text-secondary">Manage your account and platform integrations.</p>
      </div>

      <div className="grid gap-6">
        {/* Profile Section */}
        <Card className="bg-surface border-border-subtle">
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Profile</CardTitle>
            </div>
            <CardDescription>Update your personal information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="Donor Onojovwo" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" defaultValue="donor@example.com" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t border-border-subtle bg-white/5 px-6 py-4">
            <Button size="sm">Save Changes</Button>
          </CardFooter>
        </Card>

        {/* CRM Integrations */}
        <Card className="bg-surface border-border-subtle">
          <CardHeader>
            <div className="flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-primary" />
              <CardTitle>CRM Integrations</CardTitle>
            </div>
            <CardDescription>Connect Riven to your favorite CRM.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg border border-border-subtle bg-background">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold">H</div>
                <div>
                  <p className="text-sm font-medium text-text-primary">HubSpot</p>
                  <p className="text-xs text-text-secondary">Sync leads and activities automatically.</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg border border-border-subtle bg-background">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">S</div>
                <div>
                  <p className="text-sm font-medium text-text-primary">Salesforce</p>
                  <p className="text-xs text-text-secondary">Enterprise-grade CRM synchronization.</p>
                </div>
              </div>
              <Button variant="outline" size="sm">Connect</Button>
            </div>
          </CardContent>
        </Card>

        {/* API Keys */}
        <Card className="bg-surface border-border-subtle">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>API Keys</CardTitle>
            </div>
            <CardDescription>Manage your API keys for custom integrations.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">Platform API Key</Label>
              <div className="flex gap-2">
                <Input id="api-key" type="password" value="sk_live_51MszO8L2Z6rF4J8W2N4M1Q" readOnly />
                <Button variant="outline">Copy</Button>
              </div>
              <p className="text-xs text-text-secondary">This key allows external apps to access your lead data.</p>
            </div>
          </CardContent>
        </Card>

        {/* Subscription */}
        <Card className="bg-surface border-border-subtle">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-primary" />
              <CardTitle>Subscription</CardTitle>
            </div>
            <CardDescription>Manage your monthly plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-text-primary">Enterprise Plan</p>
                <p className="text-xs text-text-secondary">$1,000 / month • Next billing on Dec 10, 2023</p>
              </div>
              <Button variant="outline" size="sm" className="text-error border-error/50 hover:bg-error/10">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
