import { Globe, MessageSquare, Calendar, Database, Sparkles, TrendingUp } from "lucide-react";
import { FeatureCard } from "./feature-card";

const features = [
  {
    title: "Deep Web Research",
    description: "Our AI doesn’t just scrape names. It browses the web to understand your lead’s recent achievements, company news, and pain points.",
    icon: Globe,
  },
  {
    title: "Multi-Channel Presence",
    description: "Riven AI manages your outreach across LinkedIn, Twitter/X, and Email, maintaining a consistent and professional voice.",
    icon: MessageSquare,
  },
  {
    title: "Automated Booking",
    description: "Our AI handles the entire scheduling process, booking meetings directly into your calendar once a lead is qualified.",
    icon: Calendar,
  },
  {
    title: "CRM Integration",
    description: "Riven AI works directly with your existing CRM to log interactions, update lead status, and ensure your team has all the context.",
    icon: Database,
  },
  {
    title: "AI Personalization",
    description: "Every touchpoint is hyper-personalized and relevant, ensuring your outreach stands out from the noise.",
    icon: Sparkles,
  },
  {
    title: "Performance Tracking",
    description: "Real-time analytics on appointments booked, messages sent, and conversion rates for high-ticket opportunities.",
    icon: TrendingUp,
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Everything you need to <span className="text-primary">automate outreach</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Our AI agents carry out all the responsibilities of a human appointment setter, but at 10x the speed and 1/10th the cost.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
