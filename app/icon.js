import { ImageResponse } from 'next/og'

export const size = { width: 48, height: 48 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: '#1C3D2A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 30,
        }}
      >
        🐾
      </div>
    ),
    { ...size }
  )
}
