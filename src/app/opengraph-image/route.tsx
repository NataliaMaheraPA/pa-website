import { ImageResponse } from 'next/og'
import { siteUrl } from '@/config/seo'

export const runtime = 'edge'

export const alt = 'PettersonApps — Social preview'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: '#0b0d0f',
          padding: '72px',
        }}
      >
        {/* Logo only; title/description come from meta tags */}
        {/* Use square favicon and keep it circular */}
        <img
          src={`${siteUrl}/favicon.png`}
          width={220}
          height={220}
          alt="PettersonApps logo"
          style={{ borderRadius: 110, boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
        />
      </div>
    ),
    { ...size }
  )
}



