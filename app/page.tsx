import Image from 'next/image'
import {Button} from '../components/materialTailwind/MaterialComponents'
import Hero from '@/components/heroSection/Hero'
import DiscoverSection from '@/components/discoverSection/DiscoverSection'

export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverSection />
    </main>
  )
}
