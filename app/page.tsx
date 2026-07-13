import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Hackathons from '@/components/Hackathons'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto bg-white dark:bg-[#0a0a0a] min-h-screen shadow-sm">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Hackathons />
      <Projects />
      <Footer />
    </main>
  )
}
