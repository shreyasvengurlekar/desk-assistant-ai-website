import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about Desk Assistant AI.",
};

const faqItems = [
  {
    question: "1) Is Desk Assistant AI really free?",
    answer: "Yes, the current version of Desk Assistant AI is free to download and use for organizing your files. We believe everyone deserves a tidy digital space without a high barrier to entry.",
  },
  {
    question: "2) Is it available for Mac or Linux?",
    answer: "Currently, Desk Assistant AI is exclusively built for Windows (10 and 11). We've optimized the app specifically for the Windows file system to provide the best possible performance and integration.",
  },
  {
    question: "3) Where are my files processed?",
    answer: "This is a core principle of our design. All file scanning, AI analysis, and organization happens 100% locally on your computer. Your files and their content are never uploaded to our servers or any third-party cloud.",
  },
  {
    question: "4) Can I undo changes made by the assistant?",
    answer: "Absolutely. Every action taken by the assistant—whether it's a rename, a move, or a folder creation—is logged. You can easily view the history and undo any change with a single click in the app.",
  },
  {
    question: "5) Does it work offline?",
    answer: "Yes. Since all AI processing is done locally on your machine, Desk Assistant AI works perfectly without an internet connection. You only need a connection for the initial download and for occasional updates.",
  },
  {
    question: "6) Which folders can I organize?",
    answer: "You have full control. You can choose any folder on your computer for the assistant to manage. Most users start with Downloads, Desktop, and Documents, but you can add any directory you like.",
  },
  {
    question: "7) Does it automatically move my files?",
    answer: "Only if you want it to. By default, the app is 'permission-first,' meaning it shows you suggestions and waits for your approval. You can enable 'Auto-Organize' for specific folders if you want to automate the process.",
  },
  {
    question: "8) Is it safe to use?",
    answer: "Safety is our top priority. The app never deletes files without permission, all processing is local, and every action is undoable. We recommend keeping a standard backup of your important files as a general best practice.",
  },
];

export default function FAQPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-4">
            Got Questions?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about Desk Assistant AI. If you can't find your answer here, feel free to contact us.
          </p>
        </div>

        <div className="mt-12 bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className={index === faqItems.length - 1 ? "border-0" : ""}>
                <AccordionTrigger className="text-lg text-left font-bold py-6 hover:no-underline hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
