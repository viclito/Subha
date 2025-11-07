import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SurpriseReveal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <section id="surprise" className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-12">
      <div className="relative mx-auto max-w-3xl text-center">
        <motion.h2
          className="text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          A Little Surprise Just for You ✨
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-white/75"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
        >
          Tap the button below when you&apos;re ready for a warm burst of love, wishes, and a dash of sparkle.
        </motion.p>

        <motion.button
          onClick={() => setIsOpen(true)}
          type="button"
          className="relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-birthday-yellow px-8 py-3 text-lg font-semibold text-slate-900 shadow-[0_20px_40px_rgba(255,224,102,0.35)] transition hover:scale-105"
          whileTap={{ scale: 0.96 }}
        >
          Let&apos;s go! <span>🎁</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative mx-4 max-w-lg space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-birthday-purple via-birthday-pink to-birthday-teal p-10 text-center text-white shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 140, damping: 18 }}
              onClick={event => event.stopPropagation()}
            >
              <motion.span className="text-5xl" initial={{ rotate: -6 }} animate={{ rotate: [0, -4, 4, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
                🎂
              </motion.span>
              <h3 className="text-3xl font-bold">Hey Birthday Star!</h3>
              <p className="text-lg text-white/90">
                Sorry for the little delay in wishing you, but the wishes are filled with the same warmth and joy! 
                Even though we've known each other only for a short time, the moments we've shared have been truly sweet. 
              </p>
              <div className="grid gap-3 rounded-2xl bg-white/10 p-6 text-sm text-white/80">
                <p>• Sorry again for the late wish — but it comes with lots of good vibes!</p>
                <p>• Grateful for the short yet sweet moments we've shared so far.</p>
                <p>• Thank you for your time, patience, and those cheerful chats and calls.</p>
                <p>• Wishing you all the best for your journey ahead </p>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-birthday-pink transition hover:scale-105"
                whileTap={{ scale: 0.95 }}
              >
                Aww, thanks! <span>💖</span> 
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SurpriseReveal

