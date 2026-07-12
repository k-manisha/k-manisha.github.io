import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Hackathons from '@/components/Hackathons'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Hackathons />
      <Projects />
      <Footer />
    </main>
  )
}
