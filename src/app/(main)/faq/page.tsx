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
    question: "1) Is it available now?",
    answer: "Yes! You can download Desk Assistant AI for Windows now from our Download page. The free version is fully functional, and you can unlock Pro features with a one-time purchase from within the app.",
  },
  {
    question: "2) Is it Windows-only?",
    answer: "Yes, for the foreseeable future. Our focus is on creating the best possible file organization experience for the Windows ecosystem. We do not have plans for a macOS or Linux version at this time.",
  },
  {
    question: "3) Does it upload my files?",
    answer: "Absolutely not. This is a core principle of our design. All file scanning, AI processing, and organization happens 100% locally on your computer. Your files never leave your machine.",
  },
  {
    question: "4) Can I undo changes?",
    answer: "Yes. Every action the assistant takes is logged. You can easily view the history and undo any change with a single click, restoring your files to their previous state.",
  },
  {
    question: "5) Does it work offline?",
    answer: "Yes. Since all processing is done locally, Desk Assistant AI works perfectly without an internet connection. An internet connection is only needed for initial download, updates and for account verification if you purchase the Pro version.",
  },
  {
    question: "6) Is it free?",
    answer: "Yes, there will be a free version with powerful features for organizing your files. We believe everyone deserves a tidy digital space. It will be fully functional for most users' needs.",
  },
  {
    question: "7) What is Pro?",
    answer: "The Pro version is an optional, one-time in-app purchase that will unlock advanced features for power users, such as custom automation rules, deeper AI analysis, duplicate file cleanup, and more.",
  },
  {
    question: "8) Which folders can it manage?",
    answer: "You can choose any folder on your computer for the assistant to manage. Common choices are the Downloads, Desktop, and Documents folders, but you have full control to add or remove any folder you wish.",
  },
  {
    question: "9) Can I disable the background mode?",
    answer: "Yes. While the app is designed to be a lightweight tray assistant, you will have the option to prevent it from starting with Windows or running in the background if you prefer to only run it manually.",
  },
  {
    question: "10) Is it safe?",
    answer: "Safety is our top priority. The app is 'permission-first', meaning it will never make a change without your approval. Combined with local processing and an undo feature, we've designed it to be as safe as possible.",
  },
];

export default function FAQPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Have questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
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
