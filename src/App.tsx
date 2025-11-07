import Hero from './components/Hero'
import Timeline from './components/Timeline'
import WishSection from './components/WishSection'
import SurpriseReveal from './components/SurpriseReveal'

const navigationItems = [
  { href: '#hero', label: 'Start' },
  { href: '#timeline', label: 'Memories' },
  { href: '#wish', label: 'Wish' },
  { href: '#surprise', label: 'Surprise' },
]

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,93,162,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(77,208,225,0.2),_transparent_55%)]" />

      <header className="pointer-events-none sticky top-6 z-40 flex justify-center">
        <nav className="pointer-events-auto inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-white/70 backdrop-blur">
          {navigationItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/15 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="space-y-12 pb-24">
        <Hero />
        <Timeline />
        <WishSection />
        <SurpriseReveal />
      </main>

      <footer className="pb-10 text-center text-xs uppercase tracking-[0.35em] text-white/50">
        Crafted with love for Subha • Keep shining 💫
      </footer>
    </div>
  )
}

export default App

