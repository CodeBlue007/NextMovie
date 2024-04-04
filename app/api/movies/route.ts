import type { NextRequest } from 'next/server'

type ResponseValue = {
  Search: {}[]
  totalResults: string
  Response: 'True' | 'False'
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const title = searchParams.get('title') || ''
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}`
  )
  const { Search }: ResponseValue = await res.json()
  return Response.json(Search)
}

// 프로토콜 + 도메인/api/movies?title=avengers
