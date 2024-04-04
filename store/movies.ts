import { create } from 'zustand'

export type Movies = SimpleMovie[]
export interface SimpleMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}
export interface DetailedMovie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

export const useMovieStore = create<{
  searchText: string
  movies: Movies
  loading: boolean
  setSearchText: (text: string) => void
  searchMovies: () => void
}>((set, get) => ({
  searchText: '',
  movies: [],
  loading: false,
  setSearchText: text => set({ searchText: text }),
  searchMovies: async () => {
    const { searchText } = get()
    const res = await fetch(`/api/movies?title=${searchText}`)
    const movies = await res.json()
    console.log(movies)
    set({
      movies
    })
  }
}))
