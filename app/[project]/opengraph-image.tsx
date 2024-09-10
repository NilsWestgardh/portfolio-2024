import { ImageResponse } from 'next/og'
import { getProjectById } from "@/app/server/actions"

export const runtime = 'edge'

export const alt = 'Project Image'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ 
  params 
}: { 
  params: { 
    project: string 
  } 
}) {
  const project = await getProjectById(params.project)

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 48,
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Project Not Found
        </div>
      ),
      { ...size }
    )
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '50%',
        }}>
          <h1 style={{ margin: 0, fontSize: 60, fontWeight: 'bold' }}>{project.title}</h1>
          <p style={{ fontSize: 32, margin: '20px 0', color: '#666' }}>{project.client}</p>
          <p style={{ fontSize: 24, color: '#888' }}>{project.year}</p>
        </div>
        <div style={{
          width: '50%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img
            src={project.hero}
            alt={project.title}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}