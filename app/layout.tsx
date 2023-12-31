import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { ThemeProvider } from '../components/materialTailwind/MaterialComponents'
import { Nav } from '@/components/navBar/Nav'
import TopBar from '@/components/topBar/TopBar'
import SearchBar from '@/components/searchBar/SearchBar'
import Footer from '@/components/footer/Footer'
import CopyRight from '@/components/copyRight/CopyRight'
import BookThisCourseSection from '@/components/bookThisCourceSection/BookThisCourseSection';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <TopBar />
          <Nav />
          <SearchBar />
          {children}
          <BookThisCourseSection />
          <Footer />
          <CopyRight />
        </ThemeProvider>
      </body>
    </html>
  )
}
