import { Metadata } from "next";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple and transparent pricing for Desk Assistant AI. Start for free and upgrade for powerful pro features.",
};

const featureComparison = [
    { feature: 'AI-powered suggestions', free: true, pro: true },
    { feature: 'Manual approval of changes', free: true, pro: true },
    { feature: 'Activity log with undo', free: true, pro: true },
    { feature: 'Downloads & Desktop cleanup', free: true, pro: true },
    { feature: 'Basic file organization', free: 'Basic', pro: 'Advanced' },
    { feature: 'AI Chat for file search', free: false, pro: true },
    { feature: 'Duplicate file cleanup', free: false, pro: true },
    { feature: 'Advanced automation rules', free: false, pro: true },
    { feature: 'Customizable rule engine', free: false, pro: true },
    { feature: 'Priority updates & support', free: false, pro: true },
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

const FeatureCheck = ({ available }: { available: boolean | string }) => {
  if (typeof available === 'string') {
    return <span className="text-sm font-medium">{available}</span>;
  }
  return available ? <Check className="h-5 w-5 text-primary" /> : <X className="h-5 w-5 text-muted-foreground" />;
};


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

      <div className="mt-16 mx-auto max-w-5xl">
        <Card className="overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className="hover:bg-transparent">
                        <TableHead className="w-[40%] text-base">Features</TableHead>
                        <TableHead className="w-[30%] text-center">
                            <p className="text-2xl font-bold">Free</p>
                            <p className="text-muted-foreground text-sm mt-1">$0</p>
                        </TableHead>
                        <TableHead className="w-[30%] text-center">
                            <div className="flex items-center justify-center gap-2">
                                <p className="text-2xl font-bold">Pro</p>
                                <Badge>Coming Soon</Badge>
                            </div>
                            <p className="text-muted-foreground text-sm mt-1">One-time purchase</p>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {featureComparison.map((item) => (
                        <TableRow key={item.feature}>
                            <TableCell className="font-medium">{item.feature}</TableCell>
                            <TableCell className="text-center"><div className="flex justify-center"><FeatureCheck available={item.free} /></div></TableCell>
                            <TableCell className="text-center"><div className="flex justify-center"><FeatureCheck available={item.pro} /></div></TableCell>
                        </TableRow>
                    ))}
                    <TableRow className="bg-muted/50 hover:bg-muted/50">
                        <TableCell></TableCell>
                        <TableCell className="text-center p-4">
                            <Button asChild className="w-full max-w-xs" variant="outline">
                                <Link href="/download">Download</Link>
                            </Button>
                        </TableCell>
                        <TableCell className="text-center p-4">
                            <Button asChild className="w-full max-w-xs">
                                <Link href="/download#join-waitlist">Join Waitlist</Link>
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
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
