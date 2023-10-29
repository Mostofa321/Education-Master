import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'
import PopularCourses from '@/components/popularCourses/PopularCourses'
import UpcomingEventSection from '@/components/upcomingEventSection/UpcomingEventSection'
import NewsSection from '@/components/newsSection/NewsSection'

const Home = () => {
  return (
    <main>
      <Hero />
      <DiscoverSection />
      <PopularCourses
        title='Popular Courses'
        subTitle='Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.'
      />
      <UpcomingEventSection />
      <NewsSection />
    </main>
  )
}

export default Home;