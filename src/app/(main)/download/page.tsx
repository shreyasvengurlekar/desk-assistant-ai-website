import { Metadata } from "next";
import { Monitor, DownloadCloud, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Desk Assistant AI for Windows to start organizing your files instantly.",
};

export default function DownloadPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-4">Get Started for Free</h1>
          <p className="text-xl text-muted-foreground">Download the latest version of Desk Assistant AI for Windows.</p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-primary/10">
          <CardHeader className="bg-primary/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                <Monitor className="h-10 w-10" />
              </div>
              <div className="text-center md:text-left flex-1">
                <CardTitle className="text-3xl font-bold mb-2">Desk Assistant AI for Windows</CardTitle>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <span>Version 1.0.0 (Stable)</span>
                  <span>•</span>
                  <span>Size: 50.2 MB</span>
                  <span>•</span>
                  <span>MD5: 7a8b9c...</span>
                </div>
              </div>
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold w-full md:w-auto">
                <Link href="#">
                  <DownloadCloud className="mr-3 h-6 w-6" />
                  Download Now
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <CheckCircle className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Simple Install</h3>
                <p className="text-sm text-muted-foreground">Easy setup process gets you running in under 60 seconds.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" />
                <h3 className="font-bold">100% Private</h3>
                <p className="text-sm text-muted-foreground">Your files stay on your PC. No data collection, ever.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Zap className="h-8 w-8 text-primary" />
                <h3 className="font-bold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Optimized for low RAM and CPU usage in the background.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">System Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>OS:</strong> Windows 10 or Windows 11 (64-bit required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Processor:</strong> Intel Core i3 or equivalent (minimum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>RAM:</strong> 4GB (minimum)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Disk Space:</strong> 200MB free space for installation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What's New in v1.0</h3>
                <div className="space-y-4">
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="font-semibold text-sm mb-1">Initial Release</p>
                    <p className="text-sm text-muted-foreground">Full suite of AI organization tools, local file indexing, and natural language search support.</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-4">
                    <p className="font-semibold text-sm mb-1">Performance Patch</p>
                    <p className="text-sm text-muted-foreground">Reduced idle memory usage by 40% for smoother background operation.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Looking for help with installation? <Link href="/contact" className="text-primary hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}
