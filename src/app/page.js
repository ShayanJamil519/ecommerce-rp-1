import Banner from '@/components/home/Banner'
import Header from '@/components/shared/Header'

export default function Home() {
  return (
    <div>
      <div
      style={{
        background:"url(./assets/home__banner.jpeg) center center/cover"
      }}
      className='py-10 min-h-screen'>

      <Header />
      <Banner />
      </div>

    </div>
  )
}
