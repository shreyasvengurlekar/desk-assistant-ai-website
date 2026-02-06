import { MetadataRoute } from 'next'
import { NAV_LINKS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://desk-assistant-ai.com';

  const routes = NAV_LINKS.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
  }));

  const otherRoutes = [
    { href: "/privacy", label: "Privacy" }, 
    { href: "/terms", label: "Terms" }
  ].map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
  }));


  return [...routes, ...otherRoutes];
}
