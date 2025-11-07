import { motion } from 'framer-motion'

const memories = [
  {
    title: 'Born Leader',
    description: 'Whenever there’s an event or a function, you’re always in front — organizing, guiding, and making sure everything shines with your touch.',
    emoji: '🌟',
  },
  {
    title: 'Helpful Mentor',
    description: 'You never hesitate to lend a hand. From helping with MCA portions to sharing your time and patience, you make learning lighter . For future help Eeeeee',
    emoji: '🤝',
  },
  {
    title: 'Gentle Soul',
    description: 'You have such a kind heart — always careful not to hurt anyone. Even when tired, you reply with warmth and patience that shows your beautiful nature.',
    emoji: '💖',
  },
  {
    title: 'Focused Dreamer',
    description: 'From B.Sc Maths to MCA, you’ve chosen your path with purpose and passion. Your dedication to building your career is truly inspiring.',
    emoji: '🎯',
  },
  {
    title: 'Late-Night Listener',
    description: 'Even at midnight chats, you’re calm, understanding, and humble — turning every small talk into something comforting and real.',
    emoji: '🌙',
  },
]


const Timeline = () => {
  return (
    <section id="timeline" className="relative overflow-hidden px-6 py-24 sm:px-12">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="absolute -top-24 left-10 h-48 w-48 rounded-full bg-birthday-pink blur-[110px]" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-birthday-teal blur-[120px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="max-w-3xl space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            How Subha Sprinkles Magic Everywhere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="text-lg text-white/75"
          >
            Snapshots, moments, quirks—we’re looping through your best highlights. Swipe through the carousel of joy,
            because every frame is so unapologetically you.
          </motion.p>
        </div>

        <motion.div
          className="carousel grid grid-flow-col auto-cols-[80%] gap-6 overflow-x-auto pb-4 sm:auto-cols-[50%] md:auto-cols-[40%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {memories.map(memory => (
            <motion.article
              key={memory.title}
              className="relative flex h-full flex-col justify-between rounded-3xl border border-white/5 bg-white/10 p-8 text-left shadow-lg backdrop-blur-xl"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="absolute right-6 top-6 text-4xl drop-shadow-lg">{memory.emoji}</div>
              <div className="space-y-3 pr-10">
                <h3 className="text-2xl font-semibold text-white">{memory.title}</h3>
                <p className="text-base text-white/70">{memory.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-birthday-yellow" />
                  Keep shining
                </span>
                <span>#SubhaStories</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline

