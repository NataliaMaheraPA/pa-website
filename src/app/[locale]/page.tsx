import type { Metadata } from "next";
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, defaultDescription, defaultTitle, siteUrl, ogImage, siteName } from '@/config/seo'
import Home from "@/features/Home";

export const metadata: Metadata = {
  title: "PettersonApps — Software Development Company",
  description: "We build web, mobile, TV, and other solutions. Explore our portfolio and services.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon-social.png",
  },
  openGraph: {
    title: "PettersonApps — Software Development Company",
    description: "We build web, mobile, TV, and other solutions. Explore our portfolio and services.",
    url: "/",
    siteName: "PettersonApps",
    type: "website",
    images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteName} Open Graph image` }],
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={createWebPageJsonLd({ title: defaultTitle, description: defaultDescription, url: `${siteUrl}/` })} />
      <Home />
    </>
  );
}
