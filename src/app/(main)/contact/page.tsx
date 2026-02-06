import { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
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
                        <span>Email (Primary)</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">For support, press, or general inquiries, please email us.</p>
                    <a href="mailto:contact@desk-assistant-ai.com" className="text-lg font-semibold text-primary break-all">contact@desk-assistant-ai.com</a>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MessageCircle className="w-6 h-6 text-primary" />
                        <span>WhatsApp (Optional)</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">For quick, informal chats, you can reach us on WhatsApp. Please use email for official support requests.</p>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-primary">+1 (234) 567-890</a>
                </CardContent>
            </Card>
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
