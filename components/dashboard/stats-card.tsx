import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  label: string;
}

export function StatsCard({ title, value, trend, label }: StatsCardProps) {
  const isPositive = trend >= 0;

  return (
    <Card className="bg-surface border-border-subtle">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-text-secondary">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-text-primary">{value}</div>
        <div className="flex items-center pt-1 text-xs text-text-secondary">
          <span className={cn("mr-1 flex items-center font-medium", isPositive ? "text-success" : "text-error")}>
            {isPositive ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
            {Math.abs(trend)}%
          </span>
          {label}
        </div>
      </CardContent>
    </Card>
  );
}
