import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Services from "@/components/sections/services"
import Portfolio from "@/components/sections/portfolio"
import Contact from "@/components/sections/contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  )
}
