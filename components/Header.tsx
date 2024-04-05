'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'
import { oswald } from '@/styles/fonts'
import { usePathname } from 'next/navigation'

const menus = [
  {
    name: '🔍 Search',
    href: '/'
  },
  {
    name: '📽️ Sample Movie',
    href: '/movies/tt4520988'
  },
  {
    name: '😉 About',
    href: '/about'
  }
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={`${oswald.className} ${styles.logo}`}>
        <span>OMDbAPI</span>.COM
      </Link>
      <nav className={styles.nav}>
        <ul>
          {menus.map(menu => (
            <li
              key={menu.name}
              className={pathname === menu.href ? styles.active : ''}>
              <Link href={menu.href}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link
        href="/about"
        className={styles.user}>
        <Image
          src="https://heropy.dev/favicon.png"
          alt="HEROPY"
          width={40}
          height={40}
        />
      </Link>
    </header>
  )
}
