import type { Metadata } from "next";
import JsonLd from '@/components/JsonLd'
import { createWebPageJsonLd, defaultDescription, defaultTitle, siteUrl } from '@/config/seo'
import Home from "@/features/Home";

export const metadata: Metadata = {
  title: "PettersonApps — Software Development Company",
  description: "We build web, mobile, TV, and AI solutions. Explore our portfolio and services.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "PettersonApps — Software Development Company",
    description: "We build web, mobile, TV, and AI solutions. Explore our portfolio and services.",
    url: "/",
    siteName: "PettersonApps",
    type: "website",
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
