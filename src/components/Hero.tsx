import { motion } from 'framer-motion'
import subhaImage from '../Assets/image.png'

const confettiColors = ['#FF5DA2', '#FFE066', '#7C4DFF', '#4DD0E1']

const confettiPieces = new Array(20).fill(null).map((_, index) => ({
  id: index,
  delay: Math.random() * 2,
  duration: 6 + Math.random() * 4,
  x: Math.random() * 100,
  scale: 0.6 + Math.random() * 0.8,
  color: confettiColors[index % confettiColors.length],
}))

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-confetti-gradient px-6 py-24 text-center text-white sm:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        {confettiPieces.map(piece => (
          <motion.span
            key={piece.id}
            className="absolute inline-block h-3 w-3 rounded-full"
            style={{ left: `${piece.x}%`, background: piece.color }}
            initial={{ y: '-10vh', opacity: 0, scale: piece.scale }}
            animate={{ y: '110vh', opacity: [0, 1, 0.8, 0], scale: piece.scale }}
            transition={{
              delay: piece.delay,
              duration: piece.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-end">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.3em] text-white/90 lg:justify-start">
              07 • 11 • Celebration Mode
            </p>
            <h1 className="text-4xl font-script text-birthday-pink drop-shadow-[0_8px_30px_rgba(255,93,162,0.45)] sm:text-5xl md:text-6xl">
              Happy Birthday, Subha!
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Today we celebrate your sparkle, your laughter, and every joyful memory you share with the world. Dive
              into this little party crafted just for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <a
              href="#surprise"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-semibold text-birthday-pink shadow-glow transition hover:scale-105 hover:bg-birthday-pink hover:text-white"
            >
              Unlock the Surprise
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white/90 transition hover:bg-white/10"
            >
              Scroll through memories
            </a>
          </motion.div>
        </div>

        <motion.figure
          className="relative flex-1"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="absolute inset-0 -translate-x-6 translate-y-6 rounded-[3rem] border border-white/20 bg-white/10 blur-xl" />
          <img
            src={subhaImage}
            alt="Subha creating a colorful floral rangoli"
            className="relative w-full max-w-md rounded-[3rem] border border-white/10 object-cover shadow-[0_30px_80px_rgba(0,0,0,0.3)]"
          />
          <motion.figcaption
            className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-[0.35em] text-white/80 backdrop-blur"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            Festival queen energy
          </motion.figcaption>
        </motion.figure>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="mb-[-2.5rem] h-20 w-[90%] rounded-[50%] bg-white/10 blur-3xl" />
      </motion.div>
    </section>
  )
}

export default Hero

