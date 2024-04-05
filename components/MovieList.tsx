'use client'

import MovieItem from '@/components/MovieItem'
import { useMovieStore } from '@/store/movies'
import styles from './MovieList.module.scss'

export default function MovieList() {
  const moviesStore = useMovieStore()
  return (
    <div className={styles.movieListContainer}>
      {moviesStore.message ? (
        <p className={styles.message}>{moviesStore.message}</p>
      ) : (
        <ul className={styles.movieList}>
          {moviesStore.movies.map(movie => (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
