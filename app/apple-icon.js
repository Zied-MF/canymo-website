import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          background: '#1C3D2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 110,
        }}
      >
        🐾
      </div>
    ),
    { ...size }
  )
}
