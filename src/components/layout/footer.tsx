import Link from "next/link";
import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="flex flex-col items-center md:items-start gap-6 md:col-span-2 text-center md:text-left">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-xl font-bold font-headline">Desk Assistant AI</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed">
              The privacy-first AI assistant for your Windows desktop. Organize your files, clear your clutter, and find what you need instantly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-2">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Product</h3>
              {NAV_LINKS.slice(1, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h3 className="font-bold uppercase tracking-wider text-[10px] md:text-xs">Support & Legal</h3>
              {[...NAV_LINKS.slice(4), { href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }].filter((v, i, a) => a.findIndex(t => (t.href === v.href)) === i).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-16 border-t pt-8 text-center text-[10px] md:text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Desk Assistant AI. All rights reserved. Built for Windows users, with privacy at its core.</p>
        </div>
      </div>
    </footer>
  );
}