
import { Metadata } from "next";
import { DownloadCloud, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getLatestRelease } from "@/lib/github";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const metadata: Metadata = {
  title: "Download",
  description: "Download the latest version of Desk Assistant AI for Windows to start organizing your files instantly.",
};

export default async function DownloadPage() {
  const release = await getLatestRelease();
  const logoData = PlaceHolderImages.find(p => p.id === 'app-logo');
  
  const version = release?.version || "v1.0.0";
  const size = release?.size || "50.2 MB";
  const downloadUrl = release?.downloadUrl || "#";
  
  let whatsNew = release?.body || "General improvements and performance optimizations.";
  
  whatsNew = whatsNew.replace(
    /(?:\*\*|)?Full Changelog(?:\*\*|)?:\s*(https:\/\/github\.com\/[^\s]+)/gi, 
    '[View full version details on GitHub]($1)'
  );

  return (
    <div className="container py-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-6xl font-headline mb-4 text-foreground">Get Started for Free</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Download Desk Assistant AI for your Windows PC.</p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-primary/10">
          <CardHeader className="bg-primary/5 p-6 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/20 overflow-hidden">
                {logoData ? (
                  <Image 
                    src={logoData.imageUrl} 
                    alt="Desk Assistant AI Logo" 
                    width={80} 
                    height={80} 
                    className="object-contain p-2"
                  />
                ) : null}
              </div>
              <div className="text-center md:text-left flex-1">
                <CardTitle className="text-2xl md:text-3xl font-bold mb-2">Desk Assistant AI for Windows</CardTitle>
                <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground font-medium">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded">Version {version}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Size: {size}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Windows 10/11</span>
                </div>
              </div>
              <Button asChild size="lg" className="h-14 md:h-16 px-10 text-lg md:xl font-bold w-full md:w-auto shadow-lg hover:shadow-primary/30 transition-all">
                <Link href={downloadUrl}>
                  <DownloadCloud className="mr-3 h-6 w-6" />
                  Download Now
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-12">
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

            <Separator className="my-10 md:my-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
              <div>
                <h3 className="text-xl font-bold mb-6">System Requirements</h3>
                <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
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
                <div className="rounded-xl bg-muted/50 p-5 md:p-6 border border-border/50">
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
        
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground">Having trouble with the installation? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact Support</Link></p>
        </div>
      </div>
    </div>
  );
}
