import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { Mail, Globe, MoreHorizontal } from "lucide-react";

interface LeadRowProps {
  lead: {
    id: number;
    name: string;
    company: string;
    email: string;
    status: string;
    score: number;
    lastActivity: string;
  };
}

export function LeadRow({ lead }: LeadRowProps) {
  return (
    <tr className="group hover:bg-white/5 transition-colors border-b border-border-subtle">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            {lead.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-medium text-text-primary">{lead.name}</p>
            <p className="text-xs text-text-secondary">{lead.company}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <StatusBadge status={lead.status} />
      </td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 w-12 bg-border-subtle rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${lead.score}%` }} 
            />
          </div>
          <span className="text-xs font-medium text-text-primary">{lead.score}</span>
        </div>
      </td>
      <td className="px-6 py-4 text-text-secondary">
        {lead.lastActivity}
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  );
}
