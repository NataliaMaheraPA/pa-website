import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'PettersonApps — Software Development Company'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function GET() {
  const logoSvg = `<svg width="180" height="110" viewBox="0 0 36 22" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M27.7715 1C23.227 1 19.543 4.68406 19.543 9.22857V21.2286H23.3144V9.22857C23.3144 6.76696 25.3099 4.77143 27.7715 4.77143C30.2332 4.77143 32.2287 6.76696 32.2287 9.22857V21.2286H36.0001V9.22857C36.0001 4.68406 32.3161 1 27.7715 1Z" fill="white"/><path d="M25.8857 13.6858H29.6572V17.4572H25.8857V13.6858Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.457 9.22857C16.457 4.68404 12.773 1 8.22846 1L-0.000110626 0.999999L-0.000110791 4.77143L8.22846 4.77143C10.6901 4.77143 12.6856 6.76696 12.6856 9.22857C12.6856 11.6902 10.6901 13.6857 8.22846 13.6857L-0.000111181 13.6857L-0.000111346 17.4571L8.22846 17.4571C12.773 17.4571 16.457 13.7731 16.457 9.22857Z" fill="white"/><rect y="9.91431" width="3.77143" height="11.3143" fill="white"/></svg>`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#09090b',
          color: '#fff',
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        <div style={{ position: 'absolute', top: 64, left: 64, display: 'flex', alignItems: 'center', gap: 24 }}>
          <div dangerouslySetInnerHTML={{ __html: logoSvg }} />
          <span>PettersonApps</span>
        </div>
        <div style={{ textAlign: 'center', maxWidth: 900, lineHeight: 1.2 }}>
          Software Development Company
        </div>
      </div>
    ),
    { ...size }
  )
}


