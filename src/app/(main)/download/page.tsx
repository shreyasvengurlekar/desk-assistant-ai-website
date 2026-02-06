import { Metadata } from "next";
import { Monitor } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WaitlistForm } from "@/components/waitlist-form";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Download",
  description: "Join the waitlist to be notified when Desk Assistant AI for Windows is available for download.",
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
                <CardDescription className="text-lg">Coming Soon</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground">
              Desk Assistant AI is currently in active development. The first public build for Windows is not yet available.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the waitlist below to receive an email notification the moment it's ready for download, along with occasional progress updates.
            </p>
            
            <div className="my-8">
              <h3 className="mb-4 text-xl font-semibold text-center">Join the Early Access Waitlist</h3>
              <WaitlistForm />
            </div>

            <Separator className="my-8" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold">System Requirements</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                  <li><strong>OS:</strong> Windows 10 or Windows 11</li>
                  <li><strong>RAM:</strong> 4GB (minimum)</li>
                  <li><strong>Storage:</strong> 200MB free space (placeholder)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Release Notes</h3>
                <p className="mt-4 text-muted-foreground">No public releases yet. Stay tuned!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
