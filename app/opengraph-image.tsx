import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
export const alt = 'Ignixtech - Engineering the Digital Future'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#09090b',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '20px solid #18181b', // Slight dark border
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(to right, #F4141F, #ff4d4d)',
            backgroundClip: 'text',
            color: 'transparent',
            fontSize: 120,
            fontWeight: 800,
            letterSpacing: '-0.05em',
            marginBottom: 20,
          }}
        >
          Ignixtech
        </div>
        <div
          style={{
            color: '#a1a1aa',
            fontSize: 48,
            fontWeight: 500,
            letterSpacing: '-0.02em',
          }}
        >
          Engineering the Digital Future
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
