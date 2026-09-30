import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Check, Bell, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import Lenis from 'lenis';
import ZoomParallax from './components/ZoomParallax';


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
/* MAIN COMPONENT                                                            */
/* ========================================================================= */
export default function App() {
  const [storyOpen, setStoryOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [contactVal, setContactVal] = useState('');

  const heroVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    video.loop = false;

    // Attempt unmuted play first
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {
          // Browser policy blocked unmuted autoplay, start muted
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {});
        });
    }

    const handleEnded = () => {
      setVideoEnded(true);
    };

    video.addEventListener('ended', handleEnded);

    // On user's first gesture, unmute and replay if it already finished
    const handleFirstGesture = () => {
      if (video && video.muted) {
        video.muted = false;
        setIsMuted(false);
        if (video.ended || video.currentTime > 8) {
          video.currentTime = 0;
          setVideoEnded(false);
        }
        video.play().catch(() => {});
      }
    };

    window.addEventListener('click', handleFirstGesture, { once: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true });

    return () => {
      video.removeEventListener('ended', handleEnded);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
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
      video.play().catch(() => {});
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
    video.play().catch(() => {});
  };

  // Lenis smooth scroll for zoom parallax experience
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!contactVal.trim()) return;
    setSignedUp(true);
  };

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
      <section className="relative w-full overflow-hidden">
        {/* Responsive Video: Prominent & Centered on Mobile, Natural on Desktop */}
        <div className="relative w-full overflow-hidden">
          <video
            ref={heroVideoRef}
            src="/videos/hero-video.mp4"
            autoPlay
            playsInline
            onClick={toggleSound}
            className="w-full h-[60vh] sm:h-[72vh] md:h-auto min-h-[420px] sm:min-h-[500px] md:min-h-0 object-cover object-center block cursor-pointer"
          />

          {/* Floating Sound & Replay Controls */}
          <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 flex items-center gap-2">
            <button
              onClick={toggleSound}
              className="bg-[#2F3426]/80 hover:bg-[#2F3426] backdrop-blur-md text-[#FAF5EC] px-3.5 py-2 rounded-full flex items-center gap-2 text-xs font-medium shadow-lg transition-all border border-white/20 cursor-pointer"
              title={isMuted ? "Unmute Bella" : "Mute Bella"}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-[#BA6951]" />
                  <span>Tap for Bella's Voice</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#A8D5BA] animate-pulse" />
                  <span>Sound On</span>
                </>
              )}
            </button>
            {videoEnded && (
              <button
                onClick={replayVideo}
                className="bg-[#BA6951] hover:bg-[#A35540] text-white px-3 py-2 rounded-full shadow-lg transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold"
                title="Replay Video with Voice"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Listen Again</span>
              </button>
            )}
          </div>

          {/* Smooth Creamy Milk Fade Connecting Directly Into Section 2 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-36 md:h-48 lg:h-64 bg-gradient-to-b from-transparent via-[#F4F1E8]/50 via-50% via-[#F4F1E8]/85 via-80% to-[#F4F1E8] pointer-events-none" />
        </div>
      </section>

      {/* =================================================================== */}
      {/* SECTION 2: ZOOM PARALLAX (OLIVIER LAROSE SIGNATURE ARCHITECTURE)    */}
      {/* =================================================================== */}
      <ZoomParallax />


      {/* =================================================================== */}
      {/* STORY MODAL: BELLA PERSONALLY NARRATES HER STORY                    */}
      {/* =================================================================== */}
      <AnimatePresence>
        {storyOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2F1C14]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setStoryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF9] border border-[#EADBCE] rounded-2xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setStoryOpen(false)}
                className="absolute top-5 right-5 text-[#8F6355] hover:text-[#3D2517] p-2 rounded-full hover:bg-[#F3ECE2] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6 border-b border-[#EADBCE] pb-4">
                <div className="w-10 h-10 rounded-full bg-[#B46B55] text-white flex items-center justify-center shadow-sm">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#3D2517] leading-none">
                    Bella's Diary
                  </h2>
                  <span className="font-handwritten text-base text-[#B46B55]">
                    "From my pasture to your glass"
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-sm sm:text-base text-[#6A4636] leading-relaxed font-normal">
                <p>
                  <strong>Hello, I am Bella.</strong> If you walk into a grocery shop today, hundreds of plastic cartons shout at you. They boast of vitamins, laboratory testing, and glossy discount labels.
                </p>
                <p>
                  I never wanted our dairy to show up like that. Before my milk ever reaches a store shelf, I wanted to reach your heart. I wanted to meet your children, share a cold scoop of kesar ice cream, and give you a genuine reason to smile.
                </p>

                <div className="bg-[#FAF5EC] p-4 rounded-xl border border-[#EADBCE] space-y-3 my-4">
                  <h3 className="font-serif text-lg text-[#3D2517]">
                    Why I Wear The Bell
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Long before milk came in a bottle, it came with a sound. A quiet bicycle bell outside your gate at dawn meant honest milk was here. In every herd, one cow wears the bell because every other cow trusts her to guide them safely home. That quiet responsibility is who I am.
                  </p>
                </div>

                <div className="bg-[#FAF5EC] p-4 rounded-xl border border-[#EADBCE] space-y-3">
                  <h3 className="font-serif text-lg text-[#3D2517]">
                    The Untouched Promise
                  </h3>
                  <p className="text-xs sm:text-sm">
                    The less it is touched, the more it is yours to trust. From the moment milk leaves the cow, it moves through sealed, chilled stainless lines directly into bottles and cartons at four degrees Celsius. Human love in caring for the herd, clean technology in protecting the milk.
                  </p>
                </div>

                <p>
                  Come visit our 18-foot giant ice cream cup stall in Surat this Navratri. I have saved a scoop of fresh kesar gelato just for you.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#EADBCE] flex items-center justify-between">
                <span className="font-handwritten text-lg text-[#3D2517]">
                  With love, Bella
                </span>
                <button
                  onClick={() => {
                    setStoryOpen(false);
                    setSignUpOpen(true);
                  }}
                  className="bg-[#3D2517] hover:bg-[#2F1C14] text-[#FAF5EC] text-xs font-semibold px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                >
                  Get Tasting Pass
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================================== */}
      {/* SIGN UP MODAL: GET FREE FESTIVAL TASTING PASS                       */}
      {/* =================================================================== */}
      <AnimatePresence>
        {signUpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2F1C14]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSignUpOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FFFDF9] border border-[#EADBCE] rounded-2xl max-w-md w-full p-5 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
            >
              <button
                onClick={() => setSignUpOpen(false)}
                className="absolute top-4 right-4 text-[#8F6355] hover:text-[#3D2517] p-2 rounded-full hover:bg-[#F3ECE2] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-5 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#BA6951] text-white flex items-center justify-center mx-auto mb-2.5 sm:mb-3 shadow-sm">
                  <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#3D2517]">
                  Meet Bella in Surat
                </h3>
                <p className="text-xs text-[#6A4636] mt-1">
                  Get your free artisanal ice cream tasting pass for our 18ft Navratri stall.
                </p>
              </div>

              {!signedUp ? (
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#3D2517] block mb-1">
                      WhatsApp or Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+91 98765 43210"
                      value={contactVal}
                      onChange={(e) => setContactVal(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-[#EADBCE] bg-[#FAF5EC] text-base sm:text-sm text-[#3D2517] focus:outline-none focus:border-[#3D2517]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#3D2517] hover:bg-[#2F1C14] text-[#FAF5EC] font-semibold text-xs uppercase tracking-wider py-3 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Claim Free Scoop Pass
                  </button>
                </form>
              ) : (
                <div className="p-4 bg-[#F2F7EE] border border-[#A4C4A0] rounded-xl text-center space-y-2 text-[#2F472B]">
                  <Check className="w-6 h-6 mx-auto text-[#4B7545]" />
                  <p className="font-serif text-lg font-bold">Pass Confirmed!</p>
                  <p className="text-xs">
                    Show this confirmation at our 18-foot stall in Surat for your complimentary tasting scoop.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
