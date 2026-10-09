import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function ZoomParallax() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Scale 4 matches Olivier Larose's formula: 25vw * 4 = 100vw, 25vh * 4 = 100vh at scroll end
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: '/images/bella-gallery/farm.webp',
      scale: scale4,
      alt: 'Sunrise over the Bella Cow farm, with grazing cows and a dairy farmhouse',
    },
    {
      src: '/images/bella-gallery/ghee.webp',
      scale: scale5,
      alt: 'Bella Cow Bilona Ghee jar in a sunlit farmhouse kitchen',
    },
    {
      src: '/images/bella-gallery/milk.webp',
      scale: scale6,
      alt: 'Bella Cow Protein Milk glass bottle overlooking the pasture',
    },
    {
      src: '/images/bella-gallery/ice-cream.webp',
      scale: scale5,
      alt: 'Bella Cow Ice Cream tin beside a scoop of almond ice cream',
    },
    {
      src: '/images/bella-gallery/paneer.webp',
      scale: scale6,
      alt: 'Bella Cow Paneer in its woven cane package on a farmhouse table',
    },
    {
      src: '/images/bella-gallery/curd.webp',
      scale: scale8,
      alt: 'Bella Cow Curd terracotta pot by a sunlit kitchen window',
    },
    {
      src: '/images/bella-gallery/buttermilk.webp',
      scale: scale9,
      alt: 'Bella Cow Buttermilk carton with its cow-head cap and brass bell',
    },
  ];

  return (
    <div ref={container} className="zoom_container">
      <div className="zoom_sticky">
        {pictures.map(({ src, scale, alt }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className="zoom_el">
              <div className="zoom_imageContainer">
                <img
                  src={src}
                  alt={alt}
                  decoding="async"
                  />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
