import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2, VolumeX, RotateCcw,
} from 'lucide-react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ZoomParallax from './components/ZoomParallax';
import ScrollFloat from './components/ui/ScrollFloat';
import MilkFloatingFooter from './components/MilkFloatingFooter';
import FarmProductFilm from './components/FarmProductFilm';
import OurStory from './components/OurStory';


/* ========================================================================= */
/* INSTAGRAM SVG ICON                                                        */
/* ========================================================================= */
function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* ========================================================================= */
/* DAIRY DOODLE COMPONENTS (HAND-DRAWN JOURNAL STYLE)                       */
/* ========================================================================= */
function MilkBottleDoodle({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2h6" />
      <path d="M10 2v3a4 4 0 0 1-.8 2.4L8 9v11a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V9l-1.2-1.6A4 4 0 0 1 14 5V2" />
      <line x1="8" y1="14" x2="16" y2="14" strokeDasharray="2 2" />
    </svg>
  );
}

function MilkCanDoodle({ className = "w-12 h-12" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Lid & Neck */}
      <rect x="11" y="2" width="10" height="3" rx="1.5" />
      <path d="M12 5v3h8V5" />
      {/* Shoulder & Body */}
      <path d="M8 12l4-4h8l4 4v14a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V12z" />
      {/* Handles */}
      <path d="M7 13c-2.5 1-3.5 3-3.5 5.5s1 4.5 3.5 5.5" />
      <path d="M25 13c2.5 1 3.5 3 3.5 5.5s-1 4.5-3.5 5.5" />
      {/* Body detail lines */}
      <line x1="10" y1="18" x2="22" y2="18" strokeDasharray="2 3" />
    </svg>
  );
}

function ButterChurnDoodle({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Wooden Mathani Stick */}
      <line x1="16" y1="2" x2="16" y2="24" />
      <ellipse cx="16" cy="4" rx="2" ry="1" />
      {/* Mathani Churn Petals */}
      <path d="M11 22c2-2 8-2 10 0" />
      <path d="M12 25c2 2 6 2 8 0" />
      {/* Clay Pot Base */}
      <path d="M8 16c-3 3-3 8 0 11 3 3 13 3 16 0 3-3 3-8 0-11" />
      <ellipse cx="16" cy="16" rx="8" ry="2.5" />
    </svg>
  );
}

function CowBellDoodle({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Ribbon Loop */}
      <path d="M10 2a2 2 0 0 1 4 0v2h-4V2z" />
      {/* Bell Trapezoid */}
      <path d="M8 4h8l2 11H6L8 4z" />
      {/* Bottom lip */}
      <ellipse cx="12" cy="15" rx="6" ry="1.5" />
      {/* Clapper */}
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  );
}

function MilkSplashDoodle({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {/* Central Drop */}
      <path d="M14 4c0 3 4 7 4 9a4 4 0 0 1-8 0c0-2 4-6 4-9z" />
      {/* Ripple Drops */}
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="21" cy="17" r="1.5" />
      <circle cx="14" cy="24" r="1" />
      {/* Splash arcs */}
      <path d="M4 22c4 2 16 2 20 0" strokeDasharray="3 3" />
    </svg>
  );
}

function MilkDropDoodle({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function WheatDoodle({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22s5-3 8-8" />
      <path d="M8 8c1-3 4-5 7-5 0 3-2 6-5 7" />
      <path d="M11 11c1-3 4-5 7-5 0 3-2 6-5 7" />
      <path d="M14 14c1-3 4-5 7-5 0 3-2 6-5 7" />
    </svg>
  );
}

function CurdMatkaDoodle({ className = "w-9 h-9" }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="14" cy="6" rx="6" ry="2" />
      <path d="M8 7v2c0 1-2 2-3 5-1 4 1 9 9 9s10-5 9-9c-1-3-3-4-3-5V7" />
      <path d="M8 9h12" strokeDasharray="2 2" />
    </svg>
  );
}

/* ========================================================================= */
/* REALISTIC COWBELL CHIME AUDIO SYNTHESIZER (WEB AUDIO API)                 */
/* ========================================================================= */
function playCowbellChime() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const now = ctx.currentTime;
    const harmonics = [
      { freq: 784, gain: 0.32, decay: 1.8, type: 'sine' },        // G5 fundamental
      { freq: 1174.6, gain: 0.22, decay: 1.4, type: 'triangle' }, // D6 resonant fifth
      { freq: 1568, gain: 0.14, decay: 1.1, type: 'sine' },       // G6 octave
      { freq: 2349.3, gain: 0.09, decay: 0.7, type: 'sine' },     // D7 shimmer
      { freq: 587.3, gain: 0.26, decay: 1.6, type: 'sine' }       // D5 warm body
    ];

    harmonics.forEach(({ freq, gain, decay, type }) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.996, now + decay);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(gain, now + 0.012);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + decay);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decay + 0.05);
    });
  } catch (err) {
    console.error("Audio bell chime failed:", err);
  }
}



/* ========================================================================= */
/* MAIN COMPONENT                                                            */
/* ========================================================================= */
export default function App() {
  const heroVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.loop = false;

    // Start with sound ON initially
    video.muted = false;
    setIsMuted(false);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // If browser strictly blocks unmuted autoplay without prior interaction,
          // mute as fallback so visual playback starts smoothly
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => { });
        });
    }

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleSound = (e) => {
    e?.stopPropagation();
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
      setIsMuted(false);
      if (video.ended || video.currentTime > 8) {
        video.currentTime = 0;
        setVideoEnded(false);
      }
      video.play().catch(() => { });
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  const replayVideo = (e) => {
    e?.stopPropagation();
    const video = heroVideoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    setIsMuted(false);
    setVideoEnded(false);
    video.play().catch(() => { });
  };

  // Lenis smooth scroll for zoom parallax experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Synchronize Lenis smooth scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#F4F1E8] text-[#3D2517] font-sans relative selection:bg-[#B46B55] selection:text-white">

      {/* =================================================================== */}
      {/* 1. TOP NAVBAR (LOGO FROM 2ND IMAGE + TERRACOTTA INSTAGRAM ICON)     */}
      {/* =================================================================== */}
      <header className="w-full px-4 sm:px-8 md:px-16 pt-4 sm:pt-6 md:pt-7 pb-3 sm:pb-4 flex items-center justify-between z-30 absolute top-0 left-0 right-0 bg-transparent">
        {/* Left balance space so Logo is perfectly centered */}
        <div className="w-8 sm:w-10 md:w-12"></div>

        {/* Center: Official Bella Cow Logo from 2nd Image */}
        <a href="#" className="flex items-center justify-center">
          <img
            src="/images/bella-cow-logo.png"
            alt="Bella Cow Logo"
            className="h-9 sm:h-12 md:h-14 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
          />
        </a>

        {/* Right: Instagram Icon in matching Brand Terracotta Color */}
        <div className="w-8 sm:w-10 md:w-12 flex justify-end">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-[#BA6951] hover:text-[#2F3426] transition-colors p-1.5 drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)]"
            title="Follow Bella on Instagram"
          >
            <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </header>

      {/* =================================================================== */}
      {/* SECTION 1: HERO VIDEO (AUTOPLAY, UNMUTED, 1-TIME PLAY, NATURAL HT)  */}
      {/* =================================================================== */}
      <section className="relative w-full overflow-hidden bg-[#FAF8F5]">
        {/* Responsive Video: Centered, Natural Height */}
        <div className="relative w-full overflow-hidden">
          <video
            ref={heroVideoRef}
            src="/videos/hero-video.mp4"
            autoPlay
            playsInline
            className="w-full h-[60vh] sm:h-[72vh] md:h-auto min-h-[420px] sm:min-h-[500px] md:min-h-0 object-cover object-center block"
          />

          {/* Floating Sound & Replay Controls (Bottom-Right, Icon-Only, Optimal Ergonomics) */}
          <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-30 flex items-center gap-2.5 pointer-events-auto">
            <button
              type="button"
              onClick={toggleSound}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1E1B18]/75 hover:bg-[#1E1B18]/90 text-[#FAF5EC] backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer"
              title={isMuted ? "Unmute Bella's Voice" : "Mute Sound"}
              aria-label={isMuted ? "Unmute Bella's Voice" : "Mute Sound"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-[#BA6951]" />
              ) : (
                <Volume2 className="w-5 h-5 text-[#A8D5BA]" />
              )}
            </button>

            <button
              type="button"
              onClick={replayVideo}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full backdrop-blur-md border border-white/20 shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer ${videoEnded
                  ? "bg-[#BA6951] hover:bg-[#A35540] text-white ring-2 ring-[#BA6951]/40 animate-pulse"
                  : "bg-[#1E1B18]/75 hover:bg-[#1E1B18]/90 text-[#FAF5EC]"
                }`}
              title="Replay Video"
              aria-label="Replay Video"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Smooth Creamy Milk Fade Connecting Directly Into Section 2 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-36 md:h-48 lg:h-64 bg-gradient-to-b from-transparent via-[#F4F1E8]/50 via-50% via-[#F4F1E8]/85 via-80% to-[#F4F1E8] pointer-events-none" />
        </div>
      </section>


      {/* =================================================================== */}
      {/* INTERLUDE: FROM OUR FARM TO YOUR EVERYDAY (SCROLLFLOAT REVEAL)      */}
      {/* =================================================================== */}
      <section className="relative w-full py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-8 bg-[#F4F1E8] flex flex-col items-center justify-center text-center overflow-visible">
        <div className="max-w-4xl mx-auto flex flex-col items-center overflow-visible">
          <ScrollFloat
            animationDuration={0.8}
            ease="back.out(2)"
            scrollStart="top 85%"
            scrollEnd="top 35%"
            stagger={0.015}
            containerClassName="w-full flex justify-center overflow-visible"
            textClassName="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal sm:font-medium text-[#2F3426] tracking-[-0.02em] leading-[1.2] pb-3"
          >
            From our farm to your everyday
          </ScrollFloat>
        </div>
      </section>


      {/* =================================================================== */}
      {/* SECTION 2: ZOOM PARALLAX (OLIVIER LAROSE SIGNATURE ARCHITECTURE)    */}
      {/* =================================================================== */}
      <ZoomParallax />

      <OurStory />

      <FarmProductFilm />

      {/* =================================================================== */}
      {/* REAL FLOATING MILK FOOTER (100% RESPONSIVE - MOBILE TO ULTRA-WIDE)  */}
      {/* =================================================================== */}
      <MilkFloatingFooter />
    </div>
  );
}
