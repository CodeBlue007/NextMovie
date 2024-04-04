import { SimpleMovie } from '@/store/movies'
import { useRouter } from 'next/navigation'
import styles from './MovieItem.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'

export default function MovieItem({ movie }: { movie: SimpleMovie }) {
  const router = useRouter()
  return (
    <li className={styles.movieItem}>
      <Button
        circle
        onClick={() => router.push(`/poster/${movie.imdbID}`)}>
        👀
      </Button>
      <Link href={`movies/${movie.imdbID}`}>
        <Image
          src={movie.Poster}
          alt={movie.Title}
          width={200}
          height={300}
        />
        <div>
          <p>{movie.Year}</p>
          <h3>{movie.Title}</h3>
        </div>
      </Link>
    </li>
  )
}

// useclient없는데 잘되는데? 이유
