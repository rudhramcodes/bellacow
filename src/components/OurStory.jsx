import { motion, useReducedMotion } from 'framer-motion';

const headline = 'Long before milk had a brand, it had a sound.';
const paragraphs = [
  'Think back to when you were small. First light barely over the rooftops. You would hear a gentle bicycle bell ring outside the gate.',
  'Without reading a label, without opening a phone, your family knew the milk had arrived. It was fresh, honest, and on time. A whole generation grew up trusting that soft chime more than any printed advertisement.',
  'That is why our caretakers named us Bellacow. We never wanted to be a brand you had to learn to trust. We wanted to be the familiar sound you already loved.',
];

export default function OurStory() {
  const reduceMotion = useReducedMotion();
  const reveal = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="our-story" aria-labelledby="our-story-title" className="relative flex min-h-[100svh] items-center bg-[#F4F1E8] px-6 py-20 text-[#2F3426] sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <motion.h2
          id="our-story-title"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          variants={reveal}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-serif text-2xl tracking-[-0.035em] text-[#6A4636] sm:mb-10 sm:text-3xl"
        >
          Our story.
        </motion.h2>

        <motion.p
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.055 } } }}
          className="max-w-[18ch] font-serif text-[clamp(2.6rem,6.7vw,6.25rem)] leading-[1.04] tracking-[-0.055em] [text-wrap:balance]"
        >
          <span className="sr-only">{headline}</span>
          <span aria-hidden="true">
            {headline.split(' ').map((word, index) => (
              <span key={index} className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
                <motion.span
                  variants={{ hidden: { y: '110%' }, visible: { y: 0 } }}
                  transition={{ duration: reduceMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${index >= 8 ? 'text-[#8F6355]' : ''}`}
                >
                  {word}{index < headline.split(' ').length - 1 ? '\u00A0' : ''}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.p>

        <div className="mt-12 grid gap-7 md:mt-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 lg:gap-24">
          <motion.p
            initial={reduceMotion ? false : 'hidden'}
            whileInView="visible"
            variants={reveal}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.75 }}
            className="max-w-[28ch] font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.35] tracking-[-0.025em]"
          >
            {paragraphs[0]}
          </motion.p>
          <div className="max-w-[53ch] space-y-5 text-base leading-[1.8] tracking-[-0.015em] text-[#4B513B] sm:text-lg">
            {paragraphs.slice(1).map((paragraph) => (
              <motion.p
                key={paragraph}
                initial={reduceMotion ? false : 'hidden'}
                whileInView="visible"
                variants={reveal}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
