import React, { useRef } from 'react';
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
      src: '/images/zoom_1_pasture.jpg',
      scale: scale4,
      alt: 'Lush green morning dairy pasture in Gujarat',
    },
    {
      src: '/images/zoom_2_ghee.jpg',
      scale: scale5,
      alt: 'Artisanal Vedic Bilona cow ghee in earthen pot',
    },
    {
      src: '/images/zoom_3_milk.jpg',
      scale: scale6,
      alt: 'Fresh organic cow milk pouring into glass dairy bottle',
    },
    {
      src: '/images/zoom_4_gelato.jpg',
      scale: scale5,
      alt: 'Slow-churned saffron kesar and pistachio gelato ice cream',
    },
    {
      src: '/images/zoom_5_paneer.jpg',
      scale: scale6,
      alt: 'Handmade artisanal paneer in woven bamboo cane basket',
    },
    {
      src: '/images/zoom_6_curd.jpg',
      scale: scale8,
      alt: 'Naturally set thick curd in traditional terracotta matka',
    },
    {
      src: '/images/zoom_7_calf.jpg',
      scale: scale9,
      alt: 'Adorable young dairy calf in sunlit wildflower meadow',
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
                  />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
