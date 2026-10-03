import React, { useState, useRef } from "react";
import { Link2, MessageCircle, Camera, ShoppingBag, Check } from "lucide-react";

export default function MilkFloatingFooter({ onOpenStory, onOpenSignUp }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const videoRef = useRef(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#F5F2EB] text-[#1E1B18] pt-20 sm:pt-28 pb-10 select-none">
      
      {/* =================================================================== */}
      {/* 1. REAL FLOATING MILK VIDEO BACKGROUND (FULL BLEED & SEAMLESS LOOP) */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* Real Video Element (Loads /videos/footer-milk.mp4) */}
        <video
          ref={videoRef}
          src="/videos/footer-milk.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-105"
        />

        {/* Soft Milk Frosted Glass Overlay (Ensures Text Stays 100% Crisp & High Contrast) */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* =================================================================== */}
      {/* 2. MAIN 4-COLUMN FOOTER CONTENT GRID (FROM PRD & 100% RESPONSIVE)   */}
      {/* =================================================================== */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* ---------------- COLUMN 1: STAY CONNECTED (PRD ALIGNED) ---------------- */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col pr-0 sm:pr-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mb-2">
              Stay Connected
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4C42] mb-4 leading-relaxed">
              Where every day has a little more goodness. Join our morning milk guild for fresh farm batch updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="w-full max-w-sm">
              <label
                htmlFor="footer-email-input"
                className="block text-xs sm:text-sm font-bold text-[#222222] mb-1.5"
              >
                Email
              </label>
              
              <div className="relative flex flex-col gap-2.5">
                <input
                  id="footer-email-input"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-w-0 px-4 py-2.5 sm:py-3 rounded-lg border border-[#C5BCB0] bg-white/90 backdrop-blur-md text-sm text-[#111111] placeholder:text-[#888888] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] shadow-xs transition-all"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto self-start px-7 py-2.5 sm:py-3 rounded-lg bg-[#111111] hover:bg-[#282828] active:bg-[#000000] text-white text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm hover:shadow flex items-center justify-center gap-2"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-[#A8D5BA]" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <span>Subscribe</span>
                  )}
                </button>
              </div>

              {subscribed && (
                <p className="text-xs font-medium text-[#2E6B38] mt-2">
                  Welcome to Bella's World! We'll keep your family updated.
                </p>
              )}
            </form>
          </div>

          {/* ---------------- COLUMN 2: QUICK LINKS (FROM PRD) ---------------- */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base font-normal text-[#333333]">
              <li>
                <button
                  onClick={scrollToTop}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStory}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Meet Bella (Our Story)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStory}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  The Bell That Started It All
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSignUp}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  18-Ft Surat Pavilion (Navratri Pass)
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSignUp}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Reserve Morning Bottle
                </button>
              </li>
            </ul>
          </div>

          {/* ---------------- COLUMN 3: CONTACT US (FROM PRD) ---------------- */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
              Contact Us
            </h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-normal text-[#333333]">
              <p>Navsari & Surat Pastures</p>
              <p>Gujarat 395007, India</p>
              <p className="pt-1">
                Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#111111] hover:underline transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@bellacow.in"
                  className="hover:text-[#111111] hover:underline transition-colors break-all"
                >
                  hello@bellacow.in
                </a>
              </p>
              <p className="text-xs text-[#7A6B5F] pt-1">
                Morning Delivery: 5:30 AM – 7:00 AM Daily
              </p>
            </div>
          </div>

          {/* ---------------- COLUMN 4: FOLLOW US ---------------- */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
              Follow Us
            </h4>
            
            {/* Horizontal Icons Row matching reference screenshot */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              
              {/* 1. Website / Ledger Link */}
              <button
                onClick={onOpenStory}
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="Bella's Story Ledger"
                aria-label="Story Ledger"
              >
                <Link2 className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* 2. Message / WhatsApp Direct */}
              <button
                onClick={onOpenSignUp}
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="WhatsApp Direct Pass"
                aria-label="Chat & Support"
              >
                <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

              {/* 3. Instagram Camera Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="Instagram @bellacow"
                aria-label="Instagram Camera"
              >
                <Camera className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>

              {/* 4. Bag / Store Reserve */}
              <button
                onClick={onOpenSignUp}
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="Claim Free Tasting Pass"
                aria-label="Shop & Products"
              >
                <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </button>

            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* 3. SUBTLE DIVIDER & COPYRIGHT FOOTER (FROM PRD)                     */}
        {/* =================================================================== */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#B5AAA0]/40 text-center">
          <p className="text-xs sm:text-sm font-medium text-[#666666]">
            &copy; 2026 Bella Cow. Where every day has a little more goodness.
          </p>
        </div>

      </div>

    </footer>
  );
}
