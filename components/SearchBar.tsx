'use client'

import { useMovieStore } from '@/store/movies'
import Button from '@/components/Button'
import styles from './SearchBar.module.scss'

export default function SearchBar() {
  const moviesStore = useMovieStore()
  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      //요청
      moviesStore.searchMovies()
    }
  }

  return (
    <section className={styles.search}>
      <input
        type="text"
        value={moviesStore.searchText}
        onChange={e => moviesStore.setSearchText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button>Reset</Button>
      <Button
        color="primary"
        onClick={() => moviesStore.searchMovies()}>
        Search
      </Button>
    </section>
  )
}

// api key를 환경변수로 설정해서 만약 클라이언트가 들고있으면 ?
// 요청을 보낼때 network 탭에서 api key가 그대로 노출되는 문제가 발생한다 => 서버에서 환경변수로 들고있어야함.
