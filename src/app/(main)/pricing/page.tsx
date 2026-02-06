import { Metadata } from "next";
import { Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple and transparent pricing for Desk Assistant AI. Start for free and upgrade for powerful pro features.",
};

const freeFeatures = [
  "AI-powered suggestions",
  "Manual approval of changes",
  "Basic file organization",
  "Activity log with undo",
  "Downloads & Desktop cleanup",
];

const proFeatures = [
  "All features in Free, plus:",
  "Advanced automation rules",
  "AI Chat for file search",
  "Deep scan for smarter grouping",
  "Duplicate file cleanup",
  "Priority updates & support",
];

const faqItems = [
    {
        question: "Is there a free trial for the Pro plan?",
        answer: "The app itself is free to use with a generous set of features. The Pro features will be available as a one-time in-app purchase. There won't be a separate trial, but the free version gives you a great sense of how the app works."
    },
    {
        question: "What kind of payment is the Pro plan?",
        answer: "We are planning for the Pro plan to be a one-time purchase, not a recurring subscription. We believe in paying for a product and owning it."
    },
    {
        question: "Can I use one Pro license on multiple computers?",
        answer: "This is still being decided, but we are aiming to offer a fair policy, such as allowing use on 2-3 personal devices with a single purchase."
    },
    {
        question: "Will the price change?",
        answer: "The pricing is not final and may evolve as we get closer to launch. Early supporters on our waitlist may receive special introductory pricing."
    }
];

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
          Simple, Fair Pricing
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Start organizing for free. Upgrade to Pro for advanced automation and powerful tools. No subscriptions, no hidden fees.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto items-start">
        <Card className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-2xl">Free</CardTitle>
            <p className="text-4xl font-bold mt-2">$0</p>
            <p className="text-muted-foreground">For all users getting started.</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {freeFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
                <Link href="/download">Download (Coming Soon)</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="border-primary ring-2 ring-primary flex flex-col h-full shadow-lg">
          <CardHeader>
            <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <Badge>In-app purchase</Badge>
            </div>
            <p className="text-4xl font-bold mt-2">Coming Soon</p>
            <p className="text-muted-foreground">For professionals and power users.</p>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {proFeatures.map((feature) => (
                <li key={feature} className="flex items-start">
                  <Check className="mr-2 mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span className={feature.includes('All features') ? 'font-semibold' : ''}>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
                <Link href="/download#join-waitlist">Join Waitlist for Pro</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">*Pricing and features are subject to change during development.</p>

      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 font-headline">Frequently Asked Pricing Questions</h2>
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  );
}
