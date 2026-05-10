import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "pending" | "suspended" | string;
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const styles = {
    active: "bg-success/10 text-success border-success/20",
    pending: "bg-warning/10 text-warning border-warning/20",
    suspended: "bg-error/10 text-error border-error/20",
    default: "bg-text-secondary/10 text-text-secondary border-text-secondary/20",
  };

  const currentStyle = styles[status as keyof typeof styles] || styles.default;
  const currentLabel = label || status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium",
      currentStyle
    )}>
      <span className={cn("h-1.5 w-1.5 rounded-full fill-current", 
        status === "active" ? "bg-success" : 
        status === "pending" ? "bg-warning" : 
        status === "suspended" ? "bg-error" : "bg-text-secondary"
      )} />
      {currentLabel}
    </span>
  );
}
