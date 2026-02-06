import { Metadata } from "next";
import { Monitor, DownloadCloud } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Download",
  description: "Download Desk Assistant AI for Windows to start organizing your files.",
};

export default function DownloadPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted p-6">
            <div className="flex items-center gap-4">
              <Monitor className="h-12 w-12 text-primary" />
              <div>
                <CardTitle className="text-3xl font-bold">Desk Assistant AI for Windows</CardTitle>
                <CardDescription className="text-lg">Version 1.0</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Get Started Now</h2>
                <p className="text-lg text-muted-foreground mb-6">
                    Download the latest version of Desk Assistant AI and start taking control of your digital clutter.
                </p>
                <Button asChild size="lg">
                    <Link href="#">
                        <DownloadCloud className="mr-2 h-5 w-5" />
                        Download for Windows
                    </Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">(v1.0.0, 50.2 MB)</p>
            </div>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold">System Requirements</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>OS:</strong> Windows 10 or Windows 11</li>
                  <li><strong>RAM:</strong> 4GB (minimum)</li>
                  <li><strong>Storage:</strong> 200MB free space</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Release Notes</h3>
                <p className="mt-4 text-muted-foreground"><strong>Version 1.0.0 (Latest)</strong></p>
                <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside text-sm">
                    <li>Initial public release.</li>
                    <li>All core features enabled.</li>
                    <li>Free and Pro plans available.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
