import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using Desk Assistant AI.",
};

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <h1>Terms of Service</h1>
        <p className="lead">
          Welcome to Desk Assistant AI. By downloading, accessing, or using our application and services, you agree to be bound by these Terms of Service.
        </p>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2 id="product-status">1. Product in Development</h2>
        <p>
          You acknowledge that Desk Assistant AI ("the product") is currently in development and may be released as an alpha, beta, or early access version. As such, the product is provided on an "as is" and "as available" basis. Features may be added, changed, or removed without prior notice. We do not guarantee the availability of any specific feature or the product itself.
        </p>

        <h2 id="user-responsibility">2. User Responsibility and Data</h2>
        <p>
          Desk Assistant AI is a tool designed to help you manage your files. However, you are solely responsible for your files and data. The application requires your explicit approval before making changes, and includes an "undo" feature for reversing actions. It is your responsibility to review all suggested changes before approval. <strong>We strongly recommend that you maintain regular backups of your important files using a separate backup solution.</strong>
        </p>

        <h2 id="license">3. License to Use</h2>
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable license to use Desk Assistant AI for your personal or internal business purposes, subject to these terms. You agree not to reverse-engineer, decompile, or otherwise attempt to discover the source code of the application.
        </p>

        <h2 id="liability">4. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, in no event will Desk Assistant AI, its developers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the product; (b) any unauthorized access to or use of our servers and/or any personal information stored therein; or (c) any action taken on your files by the application upon your approval. Our total liability for any claim arising out of these terms or the use of the product will not exceed the amount you paid us, if any, to use the product.
        </p>

        <h2 id="termination">5. Termination</h2>
        <p>
          We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2 id="governing-law">6. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is based, without regard to its conflict of law provisions.
        </p>

        <h2 id="contact">7. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please <Link href="/contact">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
