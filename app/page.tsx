import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'
import PopularCourses from '@/components/popularCourses/PopularCourses'
import UpcomingEventSection from '@/components/upcomingEventSection/UpcomingEventSection'
import NewsSection from '@/components/newsSection/NewsSection'
import BookThisCourseSection from '@/components/bookThisCourceSection/BookThisCourseSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverSection />
      <PopularCourses />
      <UpcomingEventSection />
      <NewsSection />
      <BookThisCourseSection />
    </main>
  )
}
