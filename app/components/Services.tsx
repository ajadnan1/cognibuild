"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        image: "/services/ai-automation.png",
        title: "AI Automation",
        description: "Deploy intelligent agents that work 24/7. We build autonomous workflows to handle complex tasks, reducing operational costs by up to 60%.",
        tags: ["Agentic AI", "Process Automation"],
        href: "/services/ai-automation",
    },
    {
        image: "/services/data-engineering.png",
        title: "Data Engineering",
        description: "Your data is your moat. We architect scalable data meshes and governance frameworks that turn raw information into a competitive asset.",
        tags: ["Data Mesh", "Governance"],
        href: "/services/data-engineering",
    },
    {
        image: "/services/custom-projects.png",
        title: "Custom Projects",
        description: "Off-the-shelf software fails at the edge. We engineer bespoke AI solutions and platforms specifically for your unique business logic.",
        tags: ["Full-Stack AI", "Enterprise Dev"],
        href: "/services/custom-projects",
    },
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(1); // Start with middle item

    // Auto-rotate effect
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 6000); // 6 seconds to read

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const getCardStyle = (index: number) => {
        // Calculate offset for a circular list of 3 items
        // 0 = active
        // 1 = right
        // -1 (or 2) = left

        const len = services.length;
        // Circular distance: -1, 0, 1
        let offset = (index - activeIndex + len) % len;

        // Adjust for "left" being index 2 when length is 3
        if (offset === len - 1) offset = -1;

        if (offset === 0) {
            return {
                x: 0,
                scale: 1,
                opacity: 1,
                zIndex: 20,
                rotateY: 0,
                filter: "blur(0px)",
                display: "block"
            };
        } else if (offset === 1) {
            return {
                x: "60%", // Push to right
                scale: 0.85,
                opacity: 0.6,
                zIndex: 10,
                rotateY: -15, // Rotate inwards
                filter: "blur(1px)",
                display: "block"
            };
        } else {
            return {
                x: "-60%", // Push to left
                scale: 0.85,
                opacity: 0.6,
                zIndex: 10,
                rotateY: 15, // Rotate inwards
                filter: "blur(1px)",
                display: "block"
            };
        }
    };

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Core Capabilities</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We focus on high-impact areas where technology creates exponential value.
                    </p>
                </div>

                {/* 3D Carousel Container */}
                <div className="relative h-[600px] flex items-center justify-center perspective-1000">
                    {services.map((service, index) => {
                        const style = getCardStyle(index);
                        const isCenter = style.zIndex === 20;

                        return (
                            <motion.div
                                key={index}
                                initial={false}
                                animate={style}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute w-full max-w-lg"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div
                                    className={`
                                        glass-card p-10 rounded-3xl h-full flex flex-col bg-white border border-slate-100 shadow-xl
                                        ${isCenter ? 'shadow-2xl ring-1 ring-slate-900/5' : 'pointer-events-none'}
                                    `}
                                >
                                    {/* Gradient Blob on Hover (Only visible on center) */}
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl transition-transform duration-500" />

                                    <div className="mb-8 relative z-10 flex justify-center md:justify-start">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={140}
                                            height={140}
                                            className="w-32 h-32 object-contain drop-shadow-xl"
                                        />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 relative z-10 text-center md:text-left">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-8 relative z-10 text-lg text-center md:text-left">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8 relative z-10 justify-center md:justify-start">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 rounded-full border border-slate-200">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex justify-center md:justify-start relative z-10">
                                        <Link
                                            href={service.href}
                                            className={`
                                                flex items-center gap-2 font-bold px-6 py-3 rounded-full transition-all
                                                ${isCenter
                                                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg hover:shadow-cyan-500/30 hover:scale-105'
                                                    : 'text-slate-400 cursor-default'}
                                            `}
                                        >
                                            Explore <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center gap-8 mt-4">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="flex gap-2">
                        {services.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeIndex ? "bg-indigo-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors shadow-sm"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* Global perspective style for 3D effect */}
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
