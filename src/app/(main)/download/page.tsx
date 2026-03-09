import { Metadata } from "next";
import { Monitor, DownloadCloud, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLatestRelease } from "@/lib/github";

export const metadata: Metadata = {
  title: "Download",
  description: "Download the latest version of Desk Assistant AI for Windows to start organizing your files instantly.",
};

export default async function DownloadPage() {
  const release = await getLatestRelease();
  
  const version = release?.version || "v1.0.0";
  const size = release?.size || "50.2 MB";
  const downloadUrl = release?.downloadUrl || "#";
  
  // Clean up the release body to be more user-friendly for non-technical users
  let whatsNew = release?.body || "General improvements and performance optimizations.";
  
  // Replace technical "Full Changelog" pattern with a more readable link
  // This looks for bold or plain "Full Changelog" text followed by the GitHub comparison URL
  whatsNew = whatsNew.replace(
    /(?:\*\*|)?Full Changelog(?:\*\*|)?:\s*(https:\/\/github\.com\/[^\s]+)/gi, 
    '[View full version details on GitHub]($1)'
  );

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl font-headline mb-4 text-foreground">Get Started for Free</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">Download Desk Assistant AI for your Windows PC.</p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-primary/10">
          <CardHeader className="bg-primary/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-xl shadow-primary/20">
                <Monitor className="h-10 w-10" />
              </div>
              <div className="text-center md:text-left flex-1">
                <CardTitle className="text-3xl font-bold mb-2">Desk Assistant AI for Windows</CardTitle>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground font-medium">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Version {version}</span>
                  <span>•</span>
                  <span>Size: {size}</span>
                  <span>•</span>
                  <span>Windows 10/11</span>
                </div>
              </div>
              <Button asChild size="lg" className="h-16 px-10 text-xl font-bold w-full md:w-auto shadow-lg hover:shadow-primary/30 transition-all">
                <Link href={downloadUrl}>
                  <DownloadCloud className="mr-3 h-6 w-6" />
                  Download Now
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">Simple Install</h3>
                <p className="text-sm text-muted-foreground">One-click setup process gets you running in under 60 seconds.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">100% Private</h3>
                <p className="text-sm text-muted-foreground">Local-only processing. Your files never leave your computer.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">Low memory footprint for smooth background operation.</p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">System Requirements</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>OS:</strong> Windows 10 or Windows 11 (64-bit)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Processor:</strong> Intel Core i3 or equivalent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>RAM:</strong> 4GB (minimum)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Storage:</strong> 200MB free space</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-6">What's New in {version}</h3>
                <div className="rounded-xl bg-muted/50 p-6 border border-border/50">
                  <div className="prose prose-sm dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({node, ...props}) => <a {...props} className="text-primary font-medium hover:underline break-all" target="_blank" rel="noopener noreferrer" />,
                        p: ({node, ...props}) => <p {...props} className="mb-2 last:mb-0" />
                      }}
                    >
                      {whatsNew}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Having trouble with the installation? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}
