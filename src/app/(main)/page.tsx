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
  Download,
  Shield,
  Zap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getLatestRelease } from '@/lib/github';

const appScreenshot = PlaceHolderImages.find(p => p.id === 'app-screenshot');

export default async function HomePage() {
  const release = await getLatestRelease();
  const version = release?.version || "v1.0.0";

  return (
    <div className="flex flex-col">
      <HeroSection version={version} />
      <ValuePropSection />
      <CoreFeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
      <PrivacySection />
      <FinalCtaSection />
    </div>
  );
}

function HeroSection({ version }: { version: string }) {
  return (
    <section className="py-12 md:py-32">
      <div className="container text-center">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary animate-in fade-in slide-in-from-top-4 duration-1000">
          <Zap className="h-4 w-4" />
          <span>Latest Release: {version}</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline leading-tight">
          The Smartest Way to <br />
          <span className="text-primary">Organize Your Windows PC</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Stop wasting hours searching for files. Desk Assistant AI automatically cleans your folders, renames files smartly, and keeps your digital life organized—all 100% privately on your machine.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="h-14 px-8 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all">
            <Link href="/download">
              <Download className="mr-2 h-5 w-5" />
              Download Free for Windows
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg">
            <Link href="/features">Explore Features</Link>
          </Button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted-foreground">
          <span className="flex items-center gap-2"><Monitor className="h-4 w-4 text-primary" /> Windows 10/11</span>
          <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> 100% Private</span>
          <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-primary" /> No Hidden Fees</span>
        </div>
        <div className="mt-12 md:mt-16">
          <div className="relative mx-auto max-w-5xl rounded-2xl border bg-card p-1 md:p-2 shadow-2xl shadow-primary/20 overflow-hidden">
            {appScreenshot && (
              <Image
                src={appScreenshot.imageUrl}
                alt={appScreenshot.description}
                data-ai-hint={appScreenshot.imageHint}
                width={1200}
                height={750}
                className="rounded-xl shadow-inner w-full h-auto"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuePropSection() {
  const values = [
    {
      title: "Save Time Every Day",
      description: "No more manual sorting. Our AI suggests the perfect organization for your messy folders in seconds.",
      icon: Zap,
    },
    {
      title: "Built for Privacy",
      description: "Your files never leave your computer. All AI processing is done locally, keeping your data secure.",
      icon: ShieldCheck,
    },
    {
      title: "You're in Control",
      description: "We suggest, you approve. Every single action taken by the AI requires your explicit consent.",
      icon: LayoutGrid,
    },
  ];

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {values.map((value, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold font-headline">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const coreFeatures = [
  { icon: BrainCircuit, title: "Local AI Engine", description: "Processes your documents and images without an internet connection." },
  { icon: FolderSync, title: "Smart Auto-Organize", description: "Automatically routes files to the right folders based on content." },
  { icon: MessageCircle, title: "Natural Language Search", description: "Find files by asking 'Find that invoice from last Tuesday'." },
  { icon: Sparkles, title: "One-Click Cleanup", description: "Instantly tidy your Desktop and Downloads folders with smart groups." },
  { icon: CopyX, title: "Duplicate Destroyer", description: "Identify and remove identical files to free up valuable disk space." },
  { icon: History, title: "Activity Logs", description: "Track every single file move, rename, and folder creation." },
  { icon: Undo, title: "Instant Undo", description: "Mistakes happen. Revert any action with a single click at any time." },
  { icon: Monitor, title: "Lightweight Design", description: "Runs quietly in the tray using minimal system resources." },
];

function CoreFeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl font-headline text-foreground">Advanced Tools, Simplified.</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            We've packed professional-grade AI into a simple, beautiful interface that anyone can use.
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="group border-border/50 bg-background transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-primary/5 p-3 flex items-center justify-center transition-colors group-hover:bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { title: "Install", description: "Download and run the installer for your Windows PC." },
  { title: "Choose Folders", description: "Select the folders you want the assistant to help you with." },
  { title: "Review Suggestions", description: "See smart suggestions for renaming and grouping your files." },
  { title: "Apply & Enjoy", description: "Approve the changes and enjoy a clean, organized workspace." }
];

function HowItWorksSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight sm:text-4xl font-headline">Get Started in Seconds</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">The easiest way to organize your files, guaranteed.</p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-primary-foreground shadow-lg shadow-primary/20">
                {index + 1}
              </div>
              <h3 className="mb-2 text-lg md:text-xl font-bold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+40px)] top-8 hidden w-[calc(100%-80px)] border-t-2 border-dashed border-primary/20 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  const testimonials = [
    { quote: "Finally, my Downloads folder isn't a graveyard of random files. The renaming feature is a lifesaver.", author: "James W., Software Engineer" },
    { quote: "I love that it works locally. I deal with sensitive documents, and knowing they stay on my PC is huge.", author: "Sarah L., Freelancer" },
    { quote: "Super simple to use. I was organized in under 5 minutes. Best utility I've downloaded this year.", author: "Michael R., Designer" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 shadow-sm">
              <p className="mb-6 italic text-foreground/80 leading-relaxed text-sm md:text-base">"{t.quote}"</p>
              <p className="font-bold text-xs md:text-sm">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <Shield className="mx-auto h-12 w-12 md:h-16 md:w-16 mb-6 md:mb-8 opacity-90" />
          <h2 className="text-2xl font-bold font-headline sm:text-5xl mb-6">Privacy is not a feature. <br /> It's the foundation.</h2>
          <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-10">
            Desk Assistant AI was built from the ground up to be private-first. We never see your files, your folder names, or your data. Everything stays on your machine, exactly where it belongs.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <span className="flex items-center justify-center gap-2 text-base md:text-lg font-medium"><CheckCircle className="h-5 w-5" /> No Cloud Uploads</span>
            <span className="flex items-center justify-center gap-2 text-base md:text-lg font-medium"><CheckCircle className="h-5 w-5" /> No File Tracking</span>
            <span className="flex items-center justify-center gap-2 text-base md:text-lg font-medium"><CheckCircle className="h-5 w-5" /> Local-Only AI</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-3xl bg-muted/40 p-8 md:p-12 text-center border border-border/50">
          <h2 className="text-2xl font-bold font-headline sm:text-4xl mb-6">Ready to Conquer File Chaos?</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of users who have transformed their Windows experience. Download Desk Assistant AI for free today.
          </p>
          <Button asChild size="lg" className="h-16 px-10 text-xl font-bold shadow-lg hover:shadow-primary/20 transition-all w-full sm:w-auto">
            <Link href="/download">
              <Download className="mr-3 h-6 w-6" />
              Download Now
            </Link>
          </Button>
          <p className="mt-6 text-xs md:text-sm text-muted-foreground">Supported on Windows 10 & 11 (64-bit)</p>
        </div>
      </div>
    </section>
  );
}