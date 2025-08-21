'use client'

import { usePreloadImages } from '@/hooks/usePreloadImages'

export default function PreloadImages({ urls }: { urls: string[] }) {
  usePreloadImages(urls)
  return null
}