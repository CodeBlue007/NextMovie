import type { DetailedMovie } from '@/store/movies'
import Image from 'next/image'
import styles from './page.module.scss'
import { oswald } from '@/styles/fonts'
import Link from 'next/link'

export default async function MovieDetail({
  params: { id }
}: {
  params: { id: string }
}) {
  const res = await fetch(
    `https://omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&i=${id}&plot=full`
  )
  const movie: DetailedMovie = await res.json()
  return (
    <section className={styles.movieDetails}>
      <Link href={`/poster/${id}`}>
        <Image
          src={movie.Poster.replace('SX300', 'SX700')}
          alt={movie.Title}
          width={500}
          height={750}
        />
      </Link>
      <div className={styles.specs}>
        <h1 className={oswald.className}>{movie.Title}</h1>
        <ul className={styles.labels}>
          <li>{movie.Released}</li>
          <li>{movie.Runtime}</li>
          <li>{movie.Country}</li>
        </ul>
        <p>{movie.Plot}</p>
        <div>
          <h3>Ratings</h3>
          {movie.Ratings.map(rating => (
            <p key={rating.Source}>
              {rating.Source} - {rating.Value}
            </p>
          ))}
        </div>
        <div>
          <h3>Actors</h3>
          <p>{movie.Actors}</p>
        </div>
        <div>
          <h3>Director</h3>
          <p>{movie.Director}</p>
        </div>
        <div>
          <h3>Production</h3>
          <p>{movie.Production}</p>
        </div>
        <div>
          <h3>Genre</h3>
          <p>{movie.Genre}</p>
        </div>
      </div>
    </section>
  )
}
