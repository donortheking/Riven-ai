import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How does the AI research leads?",
    answer: "Riven AI uses advanced web-browsing capabilities to scan LinkedIn profiles, company websites, and recent news articles to find 'hooks' that make your outreach stand out from the noise.",
  },
  {
    question: "Is it safe for my LinkedIn and Twitter accounts?",
    answer: "Yes. Riven AI mimics human behavior and adheres to platform limits to ensure your accounts remain safe and in good standing.",
  },
  {
    question: "Do I need to manage the AI daily?",
    answer: "No. Once set up, Riven AI operates autonomously. You just need to show up to the meetings it books for you.",
  },
  {
    question: "What is the approval process?",
    answer: "After you subscribe, our team (led by Donor Onojovwo) reviews your requirements and approves your account within 24 hours to ensure the AI is perfectly calibrated for your specific sales process.",
  },
  {
    question: "Can I connect my own CRM?",
    answer: "Absolutely. Riven supports direct integrations with HubSpot, Salesforce, Pipedrive, and more via our settings panel.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-surface border-border-subtle">
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
