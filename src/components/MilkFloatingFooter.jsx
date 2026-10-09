import React, { useRef } from "react";
import { Mail } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4 sm:w-4.5 sm:h-4.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function MilkFloatingFooter() {
  const videoRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#F5F2EB] text-[#1E1B18] pt-20 sm:pt-28 pb-10 select-none">
      {/* =================================================================== */}
      {/* 1. FLOATING MILK VIDEO BACKGROUND                                  */}
      {/* =================================================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          src="/videos/footer-milk.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-105"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* =================================================================== */}
      {/* 2. MAIN 4-COLUMN FOOTER CONTENT GRID                                */}
      {/* =================================================================== */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-start">
          
          {/* ---------------- COLUMN 1: GET IN TOUCH ---------------- */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col pr-0 sm:pr-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] mb-2">
              Stay Connected
            </h3>
            <p className="text-xs sm:text-sm text-[#5C4C42] mb-5 leading-relaxed">
              Where every day has a little more goodness. Feel free to reach out to us for farm inquiries, fresh deliveries, or just to say hello.
            </p>
            
            <a
              href="mailto:bellacow.surat@gmail.com"
              className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#111111] text-white hover:bg-[#282828] active:bg-black transition-all shadow-sm hover:shadow text-xs sm:text-sm font-semibold tracking-wide self-start"
            >
              <Mail className="w-4 h-4 text-[#A8D5BA]" />
              <span>bellacow.surat@gmail.com</span>
            </a>
          </div>

          {/* ---------------- COLUMN 2: QUICK LINKS ---------------- */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-base font-normal text-[#333333]">
              <li>
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("our-story")}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("bella-products")}
                  className="hover:text-[#111111] hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                >
                  Our Products
                </button>
              </li>
            </ul>
          </div>

          {/* ---------------- COLUMN 3: CONTACT US ---------------- */}
          <div className="sm:col-span-1 lg:col-span-3 flex flex-col">
            <h4 className="font-sans text-base sm:text-lg font-bold text-[#111111] mb-3 sm:mb-4">
              Contact Us
            </h4>
            <div className="space-y-1.5 sm:space-y-2 text-sm sm:text-base font-normal text-[#333333]">
              <p>Surat & Navsari</p>
              <p>Gujarat 395007, India</p>
              {/* <p className="pt-1">
                Phone:{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#111111] hover:underline transition-colors"
                >
                  +91 98765 43210
                </a>
              </p> */}
              <p>
                Email:{" "}
                <a
                  href="mailto:bellacow.surat@gmail.com"
                  className="hover:text-[#111111] hover:underline transition-colors break-all whitespace-nowrap"
                >
                  bellacow.surat@gmail.com
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
            
            <div className="flex items-center gap-3 sm:gap-4">
              {/* 1. Instagram */}
              <a
                href="https://instagram.com/_.bellacow"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="Instagram @bellacow"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>

              {/* 2. Direct Email */}
              <a
                href="mailto:bellacow.surat@gmail.com"
                className="w-10 h-10 rounded-full border border-[#C5BCB0] bg-white/80 hover:bg-white hover:border-[#111111] flex items-center justify-center text-[#222222] hover:text-[#111111] transition-all shadow-xs hover:scale-105 cursor-pointer"
                title="Email Us: bellacow.surat@gmail.com"
                aria-label="Email Us"
              >
                <Mail className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
            </div>
          </div>

        </div>

        {/* =================================================================== */}
        {/* 3. SUBTLE DIVIDER & COPYRIGHT FOOTER                                */}
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
