'use client'

import Modal from '@/components/Modal'
import Loader from '@/components/Loader'
import { DetailedMovie } from '@/store/movies'
import Image from 'next/image'
import { useState } from 'react'

export default function PosterModal({ movie }: { movie: DetailedMovie }) {
  const [loading, setLoading] = useState(true)

  return (
    <Modal>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        {loading && <Loader size={70} />}
      </div>

      <Image
        style={{ display: 'block', width: '100%', height: 'auto' }}
        src={movie.Poster.replace('SX300', 'SX1000')}
        alt={movie.Title}
        width={1000}
        height={1500}
        onLoad={() => {
          setTimeout(() => setLoading(false), 100)
        }}
      />
    </Modal>
  )
}
