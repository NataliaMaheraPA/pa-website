import { ImageResponse } from 'next/og'
import { siteUrl } from '@/config/seo'

export const runtime = 'edge'

// This route returns a social preview image

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
          padding: '60px 72px',
          position: 'relative',
        }}
      >
        {/* Card with logo and brand text */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 36,
          }}
        >
          <img
            src={`${siteUrl}/favicon.png`}
            width={160}
            height={160}
            alt="PettersonApps logo"
            style={{ borderRadius: 80, boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 56, fontWeight: 800, color: '#fff', letterSpacing: -0.5 }}>
              PettersonApps
            </span>
            <span style={{ fontSize: 28, color: 'rgba(255,255,255,0.7)', marginTop: 8 }}>
              Software Development Company
            </span>
          </div>
        </div>

        {/* subtle brand rings */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            bottom: -120,
            width: 800,
            height: 800,
            borderRadius: 400,
            background: 'radial-gradient(closest-side, rgba(0,255,170,0.12), transparent 70%)',
            filter: 'blur(1px)',
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  )
}



