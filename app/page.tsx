import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'
import PopularCourses from '@/components/popularCourses/PopularCourses'
import UpcomingEventSection from '@/components/upcomingEventSection/UpcomingEventSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverSection />
      <PopularCourses />
      <UpcomingEventSection />
    </main>
  )
}
