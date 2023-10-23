import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'
import PopularCourses from '@/components/popularCourses/PopularCourses'
import UpcomingEventSection from '@/components/upcomingEventSection/UpcomingEventSection'
import NewsSection from '@/components/newsSection/NewsSection'
import BookThisCourseSection from '@/components/bookThisCourceSection/BookThisCourseSection'

const Home = () => {
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

export default Home;