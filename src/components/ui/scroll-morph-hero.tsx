"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue, useScroll } from "framer-motion";
import { animate } from "animejs";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

interface CardTarget {
    x: number;
    y: number;
    rotation: number;
    scale: number;
    opacity: number;
}

interface GalleryCardProps {
    src: string;
    index: number;
    total: number;
    target: CardTarget;
    label?: string;
    sublabel?: string;
}

// --- Dimensions for Cards ---
const CARD_BASE_WIDTH = 76;
const CARD_BASE_HEIGHT = 108;

// --- GalleryCard Component (No 3D Flip, Smooth 1.1x Scale on Hover via Anime.js) ---
function GalleryCard({
    src,
    index,
    target,
    label,
    sublabel,
}: GalleryCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Ultra-smooth 1.1x scale on hover powered by Anime.js
    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        animate(cardRef.current, {
            scale: 1.1,
            duration: 260,
            ease: "outCubic",
        });
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        animate(cardRef.current, {
            scale: 1.0,
            duration: 300,
            ease: "outQuad",
        });
    };

    return (
        <motion.div
            // Coordinates and base transforms smoothly handled by spring physics
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{
                type: "spring",
                stiffness: 48,
                damping: 20,
            }}
            style={{
                position: "absolute",
                width: CARD_BASE_WIDTH,
                height: CARD_BASE_HEIGHT,
                transformOrigin: "center center",
            }}
            className="cursor-pointer select-none"
        >
            <div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative h-full w-full rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-[#E8DFD0] border border-[#D4A373]/40 group will-change-transform"
            >
                <img
                    src={src}
                    alt={label || `moment-${index}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                />

                {/* Subtle rich gradient for label readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Card Label & Sublabel */}
                {label && (
                    <div className="absolute bottom-2 inset-x-1.5 text-center pointer-events-none px-1">
                        <span className="text-[9.5px] sm:text-[10px] font-sans font-bold text-white tracking-wide truncate block drop-shadow-md">
                            {label}
                        </span>
                        {sublabel && (
                            <span className="text-[7.5px] sm:text-[8px] font-mono text-[#F4EDE2]/85 tracking-wider truncate block mt-0.5">
                                {sublabel}
                            </span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}

// Default Fallback Images
const IMAGES = [
    "/images/zoom_1_pasture.jpg",
    "/images/zoom_2_ghee.jpg",
    "/images/zoom_3_milk.jpg",
    "/images/zoom_4_gelato.jpg",
    "/images/zoom_5_paneer.jpg",
    "/images/zoom_6_curd.jpg",
    "/images/zoom_7_calf.jpg",
    "/images/navratri_wonder_stall.jpg",
    "/images/morning_bicycle_bell.jpg",
    "/images/untouched_dairy_pipeline.jpg",
];

// Helper for linear interpolation
const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export interface ScrollMorphHeroProps {
    images?: string[];
    cardDetails?: Array<{ label: string; sublabel: string }>;
    introTitle?: string;
    introSubtitle?: string;
    arcTitle?: string;
    arcSubtitle?: string;
    className?: string;
    standalone?: boolean;
}

export default function IntroAnimation({
    images = IMAGES,
    cardDetails,
    introTitle = "Before we reach your kitchen, I wanted to reach your heart.",
    introSubtitle = "SCROLL TO EXPLORE BELLA’S LIVING WORLD",
    arcTitle = "A World Built Around Goodness",
    arcSubtitle = "Bella’s world is simple. There are no complicated rules here. Just fresh milk, happy cows, honest processes and the little things that make everyday life complete.",
    className = "",
    standalone = false,
}: ScrollMorphHeroProps) {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const outerSectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Responsive card count: 6 for mobile, 8 for tablet, 10 for desktop
    const isMobile = containerSize.width > 0 && containerSize.width < 640;
    const isTablet = containerSize.width >= 640 && containerSize.width < 1024;
    const totalCards = isMobile ? 6 : (isTablet ? 8 : 10);

    // Active image subset tailored for the screen size
    const activeImages = useMemo(() => {
        const source = images && images.length > 0 ? images : IMAGES;
        return source.slice(0, totalCards);
    }, [images, totalCards]);

    const activeDetails = useMemo(() => {
        if (!cardDetails) return [];
        return cardDetails.slice(0, totalCards);
    }, [cardDetails, totalCards]);

    // --- Container Size via ResizeObserver ---
    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setContainerSize({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height,
                });
            }
        };

        const observer = new ResizeObserver(handleResize);
        observer.observe(containerRef.current);

        setContainerSize({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
        });

        return () => observer.disconnect();
    }, []);

    // --- Page-driven Scroll Tracking with useScroll ---
    const { scrollYProgress } = useScroll({
        target: outerSectionRef,
        offset: ["start start", "end end"],
    });

    // 1. Morph Progress: 0 (Circle) -> 1 (Rainbow Arch)
    const morphProgress = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 50, damping: 22 });

    // 2. Scroll Rotation (Shuffling through cards smoothly)
    const scrollRotate = useTransform(scrollYProgress, [0.35, 0.95], [0, 360]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 45, damping: 22 });

    // --- Mouse Parallax ---
    const mouseX = useMotionValue(0);
    const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            const relativeX = e.clientX - rect.left;
            const normalizedX = (relativeX / rect.width) * 2 - 1;
            mouseX.set(normalizedX * 60);
        };
        container.addEventListener("mousemove", handleMouseMove);
        return () => container.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX]);

    // --- Intro Sequence Transitions ---
    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 400);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 1800);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // --- Scatter Positions for Initial Reveal ---
    const scatterPositions = useMemo(() => {
        return activeImages.map(() => ({
            x: (Math.random() - 0.5) * (isMobile ? 500 : 1100),
            y: (Math.random() - 0.5) * (isMobile ? 400 : 700),
            rotation: (Math.random() - 0.5) * 120,
            scale: 0.6,
            opacity: 0,
        }));
    }, [activeImages, isMobile]);

    // --- Motion Values Subscription ---
    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);
    const [parallaxValue, setParallaxValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        const unsubscribeParallax = smoothMouseX.on("change", setParallaxValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
            unsubscribeParallax();
        };
    }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

    // --- Content Opacities ---
    const introOpacity = useTransform(smoothMorph, [0, 0.25], [1, 0]);
    const contentOpacity = useTransform(smoothMorph, [0.2, 0.5], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.2, 0.5], [20, 0]);

    const content = (
        <div
            ref={containerRef}
            className={`relative w-full h-full bg-[#FAF8F5] overflow-hidden select-none flex flex-col items-center justify-center ${className}`}
        >
            {/* Perspective Viewport */}
            <div className="flex h-full w-full flex-col items-center justify-center relative">

                {/* Intro Center Text (Fades out cleanly as soon as user scrolls) */}
                <motion.div
                    style={{ opacity: introOpacity }}
                    className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2 px-4 max-w-2xl"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={introPhase === "circle" ? { opacity: 1, y: 0 } : { opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1E1B18] leading-[1.2]"
                    >
                        {introTitle}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={introPhase === "circle" ? { opacity: 0.85 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-3 font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#BA6951] uppercase"
                    >
                        {introSubtitle}
                    </motion.p>
                </motion.div>

                {/* Arc Active Content (High-contrast, elegant typography & letter spacing) */}
                <motion.div
                    style={{ opacity: contentOpacity, y: contentY }}
                    className="absolute top-[6%] sm:top-[8%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4 max-w-3xl"
                >
                    <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#BA6951] uppercase mb-2 block">
                        A GENTLE HERITAGE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal sm:font-medium text-[#1E1B18] tracking-[-0.02em] leading-[1.12] mb-3">
                        {arcTitle}
                    </h2>
                    <p className="text-sm sm:text-base text-[#5C4C42] max-w-xl mx-auto leading-relaxed font-normal tracking-wide">
                        {arcSubtitle}
                    </p>
                </motion.div>

                {/* Main Cards Field */}
                <div className="relative flex items-center justify-center w-full h-full">
                    {activeImages.map((src, i) => {
                        let target: CardTarget = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                        // 1. Intro Phases (Scatter -> Line)
                        if (introPhase === "scatter") {
                            target = scatterPositions[i] || { x: 0, y: 0, rotation: 0, scale: 0.6, opacity: 0 };
                        } else if (introPhase === "line") {
                            const lineSpacing = isMobile ? 54 : 74;
                            const lineTotalWidth = totalCards * lineSpacing;
                            const lineX = i * lineSpacing - lineTotalWidth / 2;
                            target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                        } else {
                            // 2. Circle Phase & Rainbow Arch Morph Logic
                            const minDimension = Math.min(containerSize.width, containerSize.height);

                            // A. Circle Formation (Balanced for card count)
                            const circleRadius = isMobile 
                                ? Math.min(minDimension * 0.32, 160)
                                : Math.min(minDimension * 0.34, 290);
                            const circleAngle = (i / totalCards) * 360;
                            const circleRad = (circleAngle * Math.PI) / 180;
                            const circlePos = {
                                x: Math.cos(circleRad) * circleRadius,
                                y: Math.sin(circleRad) * circleRadius,
                                rotation: circleAngle + 90,
                            };

                            // B. Bottom Rainbow Arc Formation (Responsive & Spacious)
                            const baseRadius = Math.min(containerSize.width, containerSize.height * 1.4);
                            const arcRadius = baseRadius * (isMobile ? 1.25 : 1.05);

                            // Apex positioned with comfortable clearance below title
                            const arcApexY = containerSize.height * (isMobile ? 0.44 : 0.36);
                            const arcCenterY = arcApexY + arcRadius;

                            const spreadAngle = isMobile ? 80 : (isTablet ? 100 : 120);
                            const startAngle = -90 - (spreadAngle / 2);
                            const step = totalCards > 1 ? spreadAngle / (totalCards - 1) : 0;

                            // Smooth scroll rotation
                            const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                            const maxRotation = spreadAngle * 0.65;
                            const boundedRotation = -scrollProgress * maxRotation;

                            const currentArcAngle = startAngle + (i * step) + boundedRotation;
                            const arcRad = (currentArcAngle * Math.PI) / 180;

                            const arcPos = {
                                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                rotation: currentArcAngle + 90,
                                scale: isMobile ? 1.25 : 1.55,
                            };

                            // C. Morph Interpolation
                            target = {
                                x: lerp(circlePos.x, arcPos.x, morphValue),
                                y: lerp(circlePos.y, arcPos.y, morphValue),
                                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                scale: lerp(1, arcPos.scale, morphValue),
                                opacity: 1,
                            };
                        }

                        const details = activeDetails[i];

                        return (
                            <GalleryCard
                                key={i}
                                src={src}
                                index={i}
                                total={totalCards}
                                target={target}
                                label={details?.label}
                                sublabel={details?.sublabel}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );

    // If standalone (e.g. demo preview), return container directly
    if (standalone) {
        return (
            <div ref={containerRef} className={`relative w-full h-full ${className}`}>
                {content}
            </div>
        );
    }

    // Default: Pinned Sticky Full-Screen Section for smooth page scrolling
    return (
        <div ref={outerSectionRef} className="relative h-[250vh] bg-[#FAF8F5]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {content}
            </div>
        </div>
    );
}
