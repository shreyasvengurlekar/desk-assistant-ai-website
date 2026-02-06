import { Metadata } from "next";
import {
  BrainCircuit,
  ShieldCheck,
  FolderSync,
  History,
  MessageCircle,
  Sparkles,
  CopyX,
  LayoutGrid,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore the powerful, privacy-first features of Desk Assistant AI that help you organize your files effortlessly.",
};

const features = [
  {
    icon: BrainCircuit,
    title: "Local File Understanding",
    description: "Desk Assistant AI uses a sophisticated AI model that runs entirely on your local machine. It understands the content and context of your files without ever sending them to the cloud. This privacy-first approach means your personal data, documents, and photos remain yours alone.",
    example: "Example: It can tell the difference between an 'invoice_september.pdf' and a 'vacation_photo.jpg' just by looking at the file, without you needing to open it."
  },
  {
    icon: ShieldCheck,
    title: "Safe Suggestions & Approval",
    description: "Your files are precious, and you should always have the final say. The app will never modify, move, or delete a file without your explicit permission. It presents all suggestions in a clear, easy-to-review panel where you can approve or dismiss them individually or in bulk.",
    example: "Example: Suggests renaming 'Scan_001.pdf' to '2023-10-26_Tax_Return.pdf'. You see the suggestion and click 'Approve'."
  },
  {
    icon: FolderSync,
    title: "Auto-Organize (Optional)",
    description: "For folders that are always messy, like 'Downloads', you can enable an optional Auto-Organize mode. The assistant will learn from your approved actions and automatically apply similar rules in the future, keeping your folders tidy without any manual effort. You can turn this off at any time.",
    example: "Example: After you approve moving several '.exe' files to a 'Software Installers' folder, it can automatically do this for future downloads."
  },
  {
    icon: History,
    title: "Activity Log & Undo",
    description: "Made a change you regret? No problem. Every single action taken by Desk Assistant AI is recorded in a detailed activity log. With a single click, you can undo any operation, whether it's a rename, a move, or a folder creation, restoring your files to their exact previous state.",
    example: "Example: You accidentally approved organizing files into the wrong folder. Just go to the log, find the action, and click 'Undo'."
  },
  {
    icon: MessageCircle,
    title: "AI Chat for File Search",
    description: "Forget complex search syntax. Simply ask the assistant to find files for you in plain English. The AI chat operates on the local index it builds, allowing you to find files based on content, date, or type without needing to remember exact file names.",
    example: "Example: You type, 'find the invoice from last month' and it shows you all relevant PDF files from October."
  },
  {
    icon: Sparkles,
    title: "Downloads & Desktop Cleanup",
    description: "These two folders are often the most chaotic. The app has specialized quick-action modes to tackle your Desktop and Downloads folders, suggesting smart groupings, archiving old files, and helping you achieve a clean workspace with just a few clicks.",
    example: "Example: A 'Clean Desktop' action suggests grouping all screenshots into a 'Screenshots' folder and archiving old documents."
  },
  {
    icon: CopyX,
    title: "Duplicate File Detection",
    description: "Free up valuable disk space by letting the assistant find duplicate files across your selected folders. It safely identifies identical files—even with different names—and presents them to you for review before deletion.",
    example: "Example: It finds 'Report_v1.docx' and 'Copy of Report_v1.docx' in different folders and suggests deleting one."
  },
  {
    icon: LayoutGrid,
    title: "Background Tray Mode",
    description: "Desk Assistant AI is designed to be helpful, not intrusive. It can run quietly in your system tray, monitoring folders in the background and only notifying you when it has suggestions ready for your review. It's lightweight and optimized for minimal resource usage.",
    example: "Example: You download a file, and a small, non-intrusive notification appears: '1 new suggestion for your Downloads folder.'"
  },
];

export default function FeaturesPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
          Powerful Features, Simple Control
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Desk Assistant AI is packed with intelligent tools to help you manage your digital life, all while prioritizing your privacy and keeping you in command.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {features.map((feature) => (
          <div key={feature.title} className="grid grid-cols-1 items-start gap-12 md:grid-cols-3">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="rounded-full bg-primary/10 p-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-bold">{feature.title}</h2>
            </div>
            <div className="md:col-span-2">
              <p className="text-lg text-muted-foreground">{feature.description}</p>
              <Card className="mt-4 bg-muted border-dashed">
                <CardContent className="pt-6">
                  <p className="text-sm text-foreground/80">{feature.example}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
