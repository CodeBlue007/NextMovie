import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || ''
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}`
  )
  return Response.json(await res.json())
}

// 프로토콜 + 도메인/api/movies?title=avengers
