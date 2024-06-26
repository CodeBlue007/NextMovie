import Footer from '@/components/Footer'
import Header from '@/components/Header'

const metadata = {
  title: 'Search'
}

export default function DefaultLayout({
  children,
  posterModal
}: {
  children: React.ReactNode
  posterModal: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      {posterModal}
    </>
  )
}

// /poster/:id
