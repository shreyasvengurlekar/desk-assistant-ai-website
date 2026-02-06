import Link from "next/link";
import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="font-bold">Desk Assistant AI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Organize your digital life, privately and effortlessly.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm md:col-span-2">
            <div className="space-y-3">
              <h3 className="font-semibold">Product</h3>
              {NAV_LINKS.slice(1, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Legal & Support</h3>
              {[...NAV_LINKS.slice(5), { href: "/privacy", label: "Privacy" }, { href: "/terms", label: "Terms" }].filter((v, i, a) => a.findIndex(t => (t.href === v.href)) === i).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Desk Assistant AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
