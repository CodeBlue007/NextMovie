import Image from 'next/image'

export interface Whoami {
  name: Name
  contact: Contact
  job: Job
  image: Image
  resumeHighlights: string[]
}
export interface Name {
  ko: string
  en: string
  alias: string
}

export interface Contact {
  email: string
  website: string
  github: string
  youtube: string
}

export interface Job {
  company: string
  homepage: string
  position: string
  role: string
}
export interface Image {
  logo: string
  photo: string
}

export async function generateMetadata() {
  const res = await fetch('https://api.heropy.dev/v0/whoami', {
    cache: 'no-store'
  })
  const data: Whoami = await res.json()
  const title = data.name.ko
  const description = data.resumeHighlights.join(' / ')
  return {
    title,
    description,
    openGraph: {
      title,
      type: 'website',
      images: data.image.photo,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      description,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME,
      locale: 'ko_KR'
    }
  }
}

export default async function About() {
  const res = await fetch('https://api.heropy.dev/v0/whoami', {
    cache: 'no-store'
  })
  const user: Whoami = await res.json()

  return (
    <div>
      <Image
        src={user.image.logo}
        alt={user.name.ko}
        width={230}
        height={230}
      />
      <h1>
        {user.name.ko}
        <span>{user.name.alias}</span>
      </h1>
      <section>
        {user.resumeHighlights.map(highlight => (
          <p key={highlight}>{highlight}</p>
        ))}
      </section>
      <section>
        {Object.keys(user.contact).map(c => (
          <p key={c}>
            <a
              href={user.contact[c as keyof Contact]}
              target="_blank">
              {c}
            </a>
          </p>
        ))}
      </section>
    </div>
  )
}
