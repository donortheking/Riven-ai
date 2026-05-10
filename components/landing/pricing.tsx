import { PricingCard } from "./pricing-card";

const includedFeatures = [
  "Full Web-Browsing Capabilities",
  "Multi-Platform Outreach (LinkedIn, Twitter, Email)",
  "Direct CRM Integration",
  "Unlimited Lead Research & Messaging",
  "Automated Appointment Booking",
  "Manual Approval Process",
  "Dedicated Support",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            One Simple Price. <span className="text-primary">Unlimited Potential.</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            No hidden fees. No commissions on closed deals. Just a powerful AI appointment setter working 24/7 to fill your pipeline.
          </p>
        </div>
        <div className="mx-auto max-w-lg">
          <PricingCard 
            title="Enterprise Plan"
            price="$1,000"
            period="/month"
            description="Everything included"
            features={includedFeatures}
            ctaText="Subscribe Now"
            ctaHref="/auth"
            popular={true}
          />
          <p className="mt-6 text-center text-xs text-text-secondary">
            Payment handled via PayPal to Donor Onojovwo. Manual approval required.
          </p>
        </div>
      </div>
    </section>
  );
}
