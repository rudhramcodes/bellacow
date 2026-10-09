import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const products = [
  { id: 'milk', name: 'Fresh Protein Milk', format: 'A 1L glass bottle', thought: 'I keep every drop chilled from our morning milking, so it reaches your home as fresh as the farm feels.', character: '/images/bella-cow-milk-introduction.png', alt: 'Bella Cow presenting Fresh Protein Milk' },
  { id: 'buttermilk', name: 'Farm Fresh Buttermilk', format: 'A 250ml gable top', thought: 'A cool little pause for your day I made this one for lunchboxes, long afternoons, and hungry smiles.', character: '/images/bella-cow-buttermilk-introduction.png', alt: 'Bella Cow presenting Farm Fresh Buttermilk' },
  { id: 'ghee', name: 'Vedic Bilona Ghee', format: 'A glass jar', thought: 'I let this one take its time. Slow churning is where that lovely golden flavour comes from.', character: '/images/bella-cow-ghee-introduction.png', alt: 'Bella Cow presenting Vedic Bilona Ghee' },
  { id: 'curd', name: 'Terracotta Matka Curd', format: 'A clay handi', thought: 'I set it gently in clay. The old ways know how to make good things feel easy.', character: '/images/bella-cow-curd-introduction.png', alt: 'Bella Cow presenting Terracotta Matka Curd' },
  { id: 'paneer', name: 'Fresh Paneer', format: 'A cane basket', thought: 'Soft, simple, and made to share that is exactly how I like my paneer.', character: '/images/bella-cow-paneer-introduction.png', alt: 'Bella Cow presenting Fresh Paneer' },
  { id: 'ice-cream', name: 'Pull-Tab Ice Cream', format: 'A 475ml metal tin', thought: 'This is my little celebration tin. Open it whenever you feel like a scoop of joy.', character: '/images/bella-cow-ice-cream-introduction.png', alt: 'Bella Cow presenting Pull-Tab Ice Cream' },
];

function GardenBackground({ index, reduceMotion, lazy = false }) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet="/images/bella-botanical-product-stage-mobile.png" />
      <motion.img
        src="/images/bella-botanical-product-stage-desktop.png"
        alt=""
        aria-hidden="true"
        loading={lazy ? 'lazy' : 'eager'}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.045 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.9, delay: index ? 0.04 : 0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
  );
}

function ProductScene({ product, index, reduceMotion }) {
  const [held, setHeld] = useState(false);

  return (
    <article id={`bella-product-${product.id}`} className="relative isolate min-h-[100svh] overflow-hidden bg-[#DCEAF1]">
      <GardenBackground index={index} reduceMotion={reduceMotion} lazy={index > 0} />

      <motion.button
        type="button"
        onClick={() => setHeld((value) => !value)}
        aria-pressed={held}
        aria-label={`Focus ${product.name}`}
        initial={reduceMotion ? false : { opacity: 0, y: 44, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={reduceMotion ? undefined : { y: -10, rotate: index % 2 ? -1 : 1, scale: 1.015 }}
        animate={held && !reduceMotion ? { y: -10, scale: 1.025 } : undefined}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: reduceMotion ? 0 : 0.62, ease: [0.22, 1, 0.36, 1] }}
        className="group absolute bottom-0 left-1/2 z-10 h-[57svh] w-[min(97vw,46rem)] -translate-x-1/2 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-18px] focus-visible:outline-[#6A4636] sm:h-[61svh] lg:left-[68%] lg:h-[88vh] lg:w-[min(55vw,49rem)]"
      >
        <img src={product.character} alt={product.alt} loading={index > 0 ? 'lazy' : 'eager'} className="h-full w-full object-contain object-bottom drop-shadow-[0_22px_20px_rgba(47,52,38,0.2)] transition-[filter] duration-300 group-hover:drop-shadow-[0_28px_25px_rgba(47,52,38,0.3)]" />
      </motion.button>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.42 }}
        transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="bella-liquid-glass absolute left-4 right-4 top-[11svh] z-20 rounded-[1.8rem] px-5 py-5 text-[#2F3426] sm:left-8 sm:right-auto sm:top-[10svh] sm:max-w-[31rem] sm:px-7 sm:py-6 lg:left-[7vw] lg:top-1/2 lg:w-[min(31rem,38vw)] lg:-translate-y-1/2 lg:px-9 lg:py-8"
      >
        <p className="font-serif text-lg leading-none text-[#6A4636]">{product.format}</p>
        <h2 className="mt-2 font-serif text-4xl leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-6xl">{product.name}</h2>
        <p className="mt-4 max-w-md font-serif text-lg leading-snug sm:text-xl lg:text-2xl">“{product.thought}” </p>
      </motion.div>
    </article>
  );
}

export default function FarmProductFilm() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="bella-products" className="relative bg-[#DCEAF1]">
      {products.map((product, index) => (
        <ProductScene key={product.id} product={product} index={index} reduceMotion={reduceMotion} />
      ))}

      <section className="relative min-h-[82svh] overflow-hidden bg-[#DCEAF1]">
        <GardenBackground index={0} reduceMotion={reduceMotion} lazy />
        <div className="relative mx-auto flex min-h-[82svh] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }} className="bella-liquid-glass max-w-2xl rounded-[2rem] p-7 text-[#2F3426] sm:p-10">
            <h2 className="font-serif text-[clamp(4.25rem,10vw,8.5rem)] leading-[0.78] tracking-[-0.065em]">Coming<br />soon.</h2>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-serif text-xl text-[#4B513B] sm:text-3xl">
              <span>Artisanal Ice Cream Cups</span>
              <span>Pocket Chaas Cartons</span>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
