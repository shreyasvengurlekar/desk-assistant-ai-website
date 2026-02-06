import { Metadata } from "next";
import {
  FolderInput,
  Scan,
  Lightbulb,
  ThumbsUp,
  Check,
  Undo,
  ShieldQuestion,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn the simple, transparent, and user-controlled process of how Desk Assistant AI organizes your files.",
};

const steps = [
  {
    icon: FolderInput,
    title: "1. Select Your Folders",
    description: "Tell Desk Assistant AI which folders you want it to manage. Common choices are Downloads, Desktop, and Documents, but you can choose any folder on your PC.",
  },
  {
    icon: Scan,
    title: "2. Scan Locally",
    description: "The AI scans the metadata and content of your files entirely on your computer. Your files and their content are never uploaded to any server.",
  },
  {
    icon: Lightbulb,
    title: "3. Get Smart Suggestions",
    description: "Based on the scan, the assistant generates a list of suggestions. These can include creating new subfolders, renaming files to a consistent format, or grouping similar items.",
  },
  {
    icon: ThumbsUp,
    title: "4. You Approve The Actions",
    description: "Review the suggested changes in a clear, side-by-side preview. You have complete control to approve all, some, or none of the suggestions. No changes happen automatically without your consent.",
  },
  {
    icon: Check,
    title: "5. Actions Are Applied",
    description: "Once you click 'Approve', the assistant carries out the selected actions instantly. Watch as your messy folder becomes clean and organized in seconds.",
  },
  {
    icon: Undo,
    title: "6. Undo If Needed",
    description: "Every action is logged. If you change your mind or an action wasn't what you expected, you can go to the activity log and undo it with a single click, reverting the files to their original state.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
          Simple, Transparent, and In Your Control
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Desk Assistant AI follows a straightforward, permission-first process to ensure you're always in command of your files.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.title} className="text-center">
            <CardHeader>
              <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-20">
        <Card className="bg-accent/50 border-primary/20">
          <CardHeader className="flex-row items-center gap-4">
            <ShieldQuestion className="h-10 w-10 text-primary" />
            <CardTitle>Permission-First Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-foreground/80">
              The core philosophy behind Desk Assistant AI is that you are the owner of your data. The app is a tool to provide suggestions, not to take over. You will never be surprised by a file change. This principle of user consent and control is built into every feature of the application.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
