export const siteUrl = 'https://pettersonapps.com'
export const siteName = 'PettersonApps'
export const defaultTitle = 'PettersonApps - Software Development Company'
export const defaultDescription = 'Software development company from Ukraine.'

 // Default Open Graph/Twitter image: reuse existing round favicon
export const ogImage = `${siteUrl}/favicon.png`

export const defaultKeywords = [
  'software development',
  'web development',
  'mobile app development',
  'custom software',
  'AI development',
  'software outsourcing',
  'dedicated teams',
  'UI/UX',
  'QA',
  'DevOps',
  'IoT',
  'Roku',
]

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  sameAs: [
    'https://www.linkedin.com/company/pettersonapps/posts/?feedView=all',
    'https://www.instagram.com/petterson.apps/?hl=en',
    'https://www.behance.net/petterson_apps',
    'https://dribbble.com/petterson_apps',
    'https://www.facebook.com/pettersonapps.company/',
  ],
}

export const webSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export type WebPageJsonLdParams = {
  title: string
  description: string
  url: string
}

export const createWebPageJsonLd = ({ title, description, url }: WebPageJsonLdParams) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  publisher: {
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/favicon.ico`,
  },
})


