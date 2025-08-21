import type { MetadataRoute } from 'next'
import { siteUrl } from '@/config/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${siteUrl}/`, lastModified: now, priority: 1 },
    { url: `${siteUrl}/about`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/portfolio`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/contacts`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/services`, lastModified: now, priority: 0.8 },
    { url: `${siteUrl}/cookie-policy`, lastModified: now, priority: 0.6 },
    { url: `${siteUrl}/privacy-policy`, lastModified: now, priority: 0.6 },
  ]
}