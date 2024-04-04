'use client'

import MovieItem from '@/components/MovieItem'
import { useMovieStore } from '@/store/movies'

export default function MovieList() {
  const moviesStore = useMovieStore()
  return (
    <div>
      <ul>
        {moviesStore.movies.map(movie => (
          <MovieItem
            key={movie.imdbID}
            movie={movie}
          />
        ))}
      </ul>
    </div>
  )
}
