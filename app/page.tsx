import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id='about' className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="section" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      <section id="section" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      {/* Contact */}
    </main>
  )
}
