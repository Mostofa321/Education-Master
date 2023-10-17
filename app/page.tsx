import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'
import PopularCourses from '@/components/popularCourses/PopularCourses'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverSection />
      <PopularCourses />
    </main>
  )
}
