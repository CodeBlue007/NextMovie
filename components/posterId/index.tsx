import PosterModal from './PosterModal'

export default async function Page({
  params: { id }
}: {
  params: { id: string }
}) {
  const res = await fetch(
    `https://omdbapi.com?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`
  )
  const movie = await res.json()

  return <PosterModal movie={movie} />
}
