import Image from 'next/image';
import Link from 'next/link';
import {
  BrainCircuit,
  ShieldCheck,
  FolderSync,
  History,
  MessageCircle,
  Sparkles,
  CopyX,
  LayoutGrid,
  CheckCircle,
  Undo,
  Monitor,
  UploadCloud,
  ChevronRight,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WaitlistForm } from '@/components/waitlist-form';

const appScreenshot = PlaceHolderImages.find(p => p.id === 'app-screenshot');

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <PrivacySection />
      <DemoSection />
      <PricingPreviewSection />
      <WaitlistCtaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Organize and find files on your Windows PC
        </h1>
        <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary font-headline">
          Automatically, Privately, with Full Control.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Desk Assistant AI helps you clean messy folders, rename files smartly, group documents, and find what you need fast — without uploading your personal files.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/download">Download (Coming Soon)</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="#join-waitlist">Join Waitlist</Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><Monitor className="h-4 w-4" /> Windows only</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Runs locally</span>
          <span className="flex items-center gap-2"><UploadCloud className="h-4 w-4" /> No file uploads</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> User approval required</span>
          <span className="flex items-center gap-2"><Undo className="h-4 w-4" /> Undo anytime</span>
        </div>
        <div className="mt-16">
          <div className="relative mx-auto max-w-5xl rounded-lg border bg-card p-2 shadow-2xl shadow-primary/10">
            {appScreenshot && (
              <Image
                src={appScreenshot.imageUrl}
                alt={appScreenshot.description}
                data-ai-hint={appScreenshot.imageHint}
                width={1200}
                height={750}
                className="rounded-md"
                priority
              />
            )}
            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">Work-in-progress preview</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  "Downloads folder becomes a junkyard",
  "Random file names like 'final_final_v2.pdf'",
  "Hard to find important PDFs later",
  "Sorting takes time and effort",
  "You forget where you saved things",
];

function ProblemSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Sound Familiar?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Managing files is a universal headache. We're building a tool to fix that.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {problems.map((problem, index) => (
            <Card key={index} className="transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <CardContent className="pt-6">
                <p className="font-medium text-center">{problem}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
    return (
        <section className="py-20 md:py-28">
            <div className="container px-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">A File Assistant That Actually Helps</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                    Desk Assistant AI works like a smart file manager that lives inside your computer. It suggests ways to organize your files, and you have the final say. It's like having a personal assistant for your digital clutter.
                </p>
            </div>
        </section>
    );
}


const coreFeatures = [
  { icon: BrainCircuit, title: "Local File Understanding", description: "AI processes files on your PC, ensuring total privacy." },
  { icon: ShieldCheck, title: "Safe Suggestions", description: "No changes are made without your explicit approval." },
  { icon: FolderSync, title: "Auto-Organize", description: "Optionally automate cleaning of folders like Downloads." },
  { icon: History, title: "Logs + Undo Anytime", description: "Easily reverse any action with a single click." },
  { icon: MessageCircle, title: "AI Chat to Find Files", description: "Find files by describing them in plain English." },
  { icon: Sparkles, title: "Clean Downloads/Desktop", description: "Tame your messiest folders with smart suggestions." },
  { icon: CopyX, title: "Duplicate Detection", description: "Find and remove duplicate files to save space." },
  { icon: LayoutGrid, title: "Lightweight Tray Assistant", description: "Runs quietly in the background without slowing you down." },
];

function CoreFeaturesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Powerful Features, Simple Interface</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to conquer file chaos, built with privacy and user control at its core.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="bg-card">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const howItWorksSteps = [
  "Install Desk Assistant AI on your Windows PC.",
  "Choose folders you want to manage, like Downloads or Desktop.",
  "The app scans files locally on your machine—nothing is uploaded.",
  "AI suggests new folder structures, file renames, and groups.",
  "Review the suggestions and approve the changes you want.",
  "All actions are logged, and you can undo any change instantly."
];

function HowItWorksSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, transparent process that puts you in control.
          </p>
        </div>
        <div className="mt-12">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
            <ul className="space-y-8">
              {howItWorksSteps.map((step, index) => (
                <li key={index} className="relative flex items-start md:justify-center md:gap-x-12">
                  <div className="md:w-1/2 md:text-right">
                    <div className="md:inline-block md:text-left">
                      <div className="flex flex-col items-start md:items-end">
                        <div className="flex items-center gap-4">
                          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            {index + 1}
                          </div>
                          <p className="font-medium text-lg md:hidden">{`Step ${index + 1}`}</p>
                        </div>
                        <p className="mt-2 ml-14 md:ml-0 md:mt-2 text-muted-foreground">{step}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  const weNeverCollect = ["Your file content", "File names", "Folder structure", "Personal documents"];
  const weOnlyCollect = ["Your name/username", "Email address", "Encrypted password", "App preferences (e.g., theme)"];

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Your Files Stay Yours. Period.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Privacy isn't an afterthought; it's our foundation. We designed Desk Assistant AI to be private-by-default.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card className="border-red-500/50 bg-red-500/5 dark:bg-red-500/10">
            <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">We NEVER Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {weNeverCollect.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-green-500/50 bg-green-500/5 dark:bg-green-500/10">
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-400">We ONLY Collect</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {weOnlyCollect.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-4 w-4 shrink-0 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          AI is used to organize, not to spy. Processing happens locally on your machine by default.
        </div>
      </div>
    </section>
  );
}

const callouts = [
  { text: "Quick actions (Downloads/Desktop)", position: "top-1/4 left-4" },
  { text: "AI suggestion panel", position: "top-1/2 right-4" },
  { text: "Approve/Cancel for control", position: "bottom-4 left-1/2 -translate-x-1/2" },
];

function DemoSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">See It In Action (Preview)</h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse into the clean and intuitive interface.</p>
        </div>
        <div className="mt-12 relative max-w-5xl mx-auto">
          {appScreenshot && (
            <Image
              src={appScreenshot.imageUrl}
              alt={appScreenshot.description}
              data-ai-hint={appScreenshot.imageHint}
              width={1200}
              height={750}
              className="rounded-lg border shadow-lg"
            />
          )}
          {callouts.map((callout, i) => (
             <div key={i} className={`absolute ${callout.position}`}>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute ml-5 -mt-2 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {callout.text}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingPreviewSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Simple, Fair Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started for free, and unlock powerful features when you're ready.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Free</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-4xl font-bold">$0</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Suggestions & safe mode</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Basic organization previews</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Activity log</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-primary flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Pro</CardTitle>
                <Badge>In-app purchase</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <p className="text-4xl font-bold">Coming Soon</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Advanced rules & automation</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Deep scan & smarter grouping</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Duplicate cleanup suggestions</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> Priority updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          *Pro features may evolve during development.
        </p>
        <div className="text-center mt-8">
            <Button asChild variant="outline">
                <Link href="/pricing">View full pricing details <ChevronRight className="w-4 h-4 ml-2" /></Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

function WaitlistCtaSection() {
  return (
    <section id="join-waitlist" className="bg-muted py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get Early Access Updates</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The app is currently in development. Join the waitlist to get notified when the first build is ready and receive exclusive updates.
          </p>
        </div>
        <div className="mt-8 mx-auto max-w-xl">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
