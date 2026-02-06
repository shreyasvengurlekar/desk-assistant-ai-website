import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Understand how Desk Assistant AI handles your data with our commitment to privacy-first principles.",
};

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-20">
      <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
        <h1>Privacy Policy</h1>
        <p className="lead">
          Your privacy is the foundation upon which Desk Assistant AI is built. This policy outlines our commitment to protecting your data and explains what we collect and, more importantly, what we don't.
        </p>
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <h2 id="core-principle">Our Core Principle: Privacy by Design</h2>
        <p>
          Desk Assistant AI is designed to be a "privacy-first" application. This means that all file processing, analysis, and artificial intelligence (AI) computation happens directly on your local machine. <strong>Your files, their content, and their metadata never leave your computer.</strong>
        </p>

        <h2 id="data-we-dont-collect">Data We Absolutely Do Not Collect</h2>
        <p>
          We want to be crystal clear about what stays on your computer and is never transmitted to us or any third party. We <strong>never</strong> collect, see, store, or have access to:
        </p>
        <ul>
          <li>The content of any of your files (documents, images, videos, etc.).</li>
          <li>Your file names or folder names.</li>
          <li>Your directory or folder structure.</li>
          <li>Any information derived from your files by the local AI.</li>
        </ul>

        <h2 id="data-we-collect">Data We Collect</h2>
        <p>
          To provide our service, especially for account management and the future Pro version, we need to collect a minimal amount of information. This includes:
        </p>
        <ul>
          <li><strong>Account Information:</strong> If you create an account, we will collect your name (or username), email address, and an encrypted version of your password. This is used for authentication and communication.</li>
          <li><strong>Waitlist Information:</strong> If you join our waitlist, we collect your name and email address to notify you about product releases and updates.</li>
          <li><strong>Application Preferences:</strong> We may store your in-app settings, such as theme choice (light/dark mode), which folders you've chosen to monitor, or whether you enable auto-start. This information is tied to your account to sync your preferences but does not include any information about the files within those folders.</li>
          <li><strong>Anonymous Usage Analytics (Optional):</strong> We may ask for your permission to collect anonymized, aggregated usage data to help us improve the app. This would include things like "feature X was used 100 times" or "the app crashed". This will be strictly opt-in, and will never contain any personal or file-related information.</li>
        </ul>

        <h2 id="data-usage">How We Use Your Data</h2>
        <p>The limited data we collect is used for the following purposes:</p>
        <ul>
          <li>To create and manage your user account.</li>
          <li>To process transactions for Pro features (in the future).</li>
          <li>To communicate with you about product updates, security notices, and support.</li>
          <li>To improve the application based on aggregated, anonymous data (if you opt-in).</li>
        </ul>

        <h2 id="data-retention">Data Retention</h2>
        <p>
          We will retain your account and preference data as long as your account is active. If you delete your account, we will permanently delete this information from our servers. Data collected for the waitlist will be used solely for its stated purpose and can be removed upon request.
        </p>

        <h2 id="security">Security</h2>
        <p>
          We take the security of the limited data we hold seriously. We use industry-standard measures, including encryption and secure server infrastructure, to protect your account information.
        </p>

        <h2 id="contact">Changes to This Policy & Contact Us</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any significant changes. If you have any questions or concerns about our commitment to privacy, please do not hesitate to <Link href="/contact">contact us</Link>.
        </p>
      </div>
    </div>
  );
}
