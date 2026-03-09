import { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Desk Assistant AI team for support, feedback, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-headline">
          Get In Touch
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, here's how you can reach us.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Mail className="w-6 h-6 text-primary" />
                        <span>Email Support</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">For support, press, or general inquiries, please email our team directly. We typically respond within 24 hours.</p>
                    <div className="mt-4">
                      <a href="mailto:contact@desk-assistant-ai.com" className="text-lg font-semibold text-primary break-all">contact@desk-assistant-ai.com</a>
                    </div>
                </CardContent>
            </Card>
            <div className="rounded-2xl bg-primary/5 p-8 border border-primary/10">
              <h3 className="font-bold text-lg mb-2">Our Support Hours</h3>
              <p className="text-sm text-muted-foreground">Monday — Friday: 9am - 5pm EST</p>
              <p className="text-sm text-muted-foreground mt-1">We aim to respond to all inquiries as quickly as possible.</p>
            </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
