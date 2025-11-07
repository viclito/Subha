import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const floatingEmojis = ["🎉", "🎈", "🌟", "🍰", "🎁", "💖"];

const audioSrc =
  "https://cdn.pixabay.com/download/audio/2022/03/09/audio_7602b222bc.mp3?filename=celebrate-112090.mp3";

const WishSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      void audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <section id="wish" className="relative overflow-hidden px-6 py-24 sm:px-12">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"
        aria-hidden
      >
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-birthday-purple/40 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-birthday-yellow/50 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-10 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        <motion.h2
          className="text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Dear Subha,
        </motion.h2>

        <motion.p
          className="text-lg leading-relaxed text-white/80 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        >
          Happy Birthday, Subha! 🎉 Hope you have an amazing day filled with
          smiles, laughter, and great memories. You truly deserve the best!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <button
            onClick={() => setIsPlaying((prev) => !prev)}
            type="button"
            className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3 text-base font-semibold text-birthday-purple shadow-lg transition hover:scale-105 hover:bg-birthday-pink hover:text-white"
          >
            {isPlaying ? "Pause the confetti beat" : "Play the confetti beat"}
            <span>{isPlaying ? "⏸️" : "▶️"}</span>
          </button>
          <span className="text-sm uppercase tracking-[0.35em] text-white/60">
            volume on for birthday vibes
          </span>
        </motion.div>

        <audio ref={audioRef} src={audioSrc} loop preload="auto" />

        <div className="pointer-events-none absolute inset-0">
          {floatingEmojis.map((emoji, index) => (
            <motion.span
              key={emoji}
              className="absolute text-3xl sm:text-4xl"
              style={{
                left: `${10 + index * 15}%`,
                top: index % 2 === 0 ? "10%" : "80%",
              }}
              animate={{
                y: index % 2 === 0 ? [0, 20, 0] : [0, -25, 0],
                rotate: index % 2 === 0 ? [0, 6, -6, 0] : [0, -8, 8, 0],
              }}
              transition={{
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {emoji}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WishSection;
