import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  popular?: boolean;
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaHref,
  popular
}: PricingCardProps) {
  return (
    <Card className={`relative overflow-hidden ${popular ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border-subtle'}`}>
      {popular && (
        <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-bold text-white rounded-bl-lg uppercase tracking-wider">
          Popular
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div className="mt-4 flex items-baseline justify-center gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-text-primary">{price}</span>
          <span className="text-sm font-semibold leading-6 text-text-secondary">{period}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-text-secondary">
          {features.map((feature) => (
            <li key={feature} className="flex gap-x-3">
              <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href={ctaHref} className="w-full">
          <Button className="w-full" size="lg">
            {ctaText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
