'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 0.8,
  ease = 'back.out(2)',
  scrollStart = 'top 85%',
  scrollEnd = 'top 35%',
  stagger = 0.015
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');
    return words.map((word, wordIndex) => (
      <span className="inline-block whitespace-nowrap" key={wordIndex}>
        {word.split('').map((char, charIndex) => (
          <span className="char inline-block" key={charIndex}>
            {char}
          </span>
        ))}
        {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const charElements = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        charElements,
        {
          willChange: 'opacity, transform',
          opacity: 0,
          y: 40,
          scaleY: 1.35,
          scaleX: 0.85,
          transformOrigin: '50% 0%'
        },
        {
          duration: animationDuration,
          ease: ease,
          opacity: 1,
          y: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: stagger,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: scrollStart,
            end: scrollEnd,
            scrub: 0.8
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;
