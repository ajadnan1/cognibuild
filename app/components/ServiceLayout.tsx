"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface ServicePageProps {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    benefits: { title: string; desc: string }[];
    icon: React.ReactNode;
}

export default function ServiceLayout({ title, subtitle, description, features, benefits, icon }: ServicePageProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % benefits.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [benefits.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % benefits.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
            <div className="mesh-bg" />
            <div className="dot-pattern" />
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/80 backdrop-blur-md border border-indigo-100 shadow-sm text-sm text-indigo-600 font-medium mb-8">
                            <Sparkles size={14} />
                            <span>Enterprise Grade Solution</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h1>
                        <p className="text-2xl text-slate-500 font-light mb-8">{subtitle}</p>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">{description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Capabilities Slideshow Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Background Gradient for Section */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-indigo-50/30 to-white/0 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Capabilities</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Explore our comprehensive suite of services designed for modern enterprises.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        <div className="relative glass-card rounded-[2.5rem] p-8 md:p-16 min-h-[400px] flex items-center shadow-2xl shadow-indigo-100/50 border border-white/60">

                            {/* Navigation Buttons */}
                            <button onClick={prevSlide} className="absolute left-4 md:left-8 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:scale-110 transition-all text-slate-600 hover:text-indigo-600">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={nextSlide} className="absolute right-4 md:right-8 z-20 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:scale-110 transition-all text-slate-600 hover:text-indigo-600">
                                <ChevronRight size={24} />
                            </button>

                            {/* Slide Content */}
                            <div className="w-full overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="flex flex-col md:flex-row items-center gap-12"
                                    >
                                        {/* Visual Side */}
                                        <div className="flex-1 flex justify-center items-center">
                                            <div className="relative w-48 h-48 md:w-64 md:h-64">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full opacity-20 blur-3xl animate-pulse" />
                                                <div className="relative z-10 w-full h-full bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center">
                                                    <div className="text-indigo-600">
                                                        {icon}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Text Side */}
                                        <div className="flex-1 text-center md:text-left">
                                            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                                {benefits[currentSlide].title}
                                            </h3>
                                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                                {benefits[currentSlide].desc}
                                            </p>
                                            <div className="flex justify-center md:justify-start gap-2">
                                                {benefits.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentSlide(idx)}
                                                        className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-indigo-600" : "w-2 bg-slate-300 hover:bg-indigo-300"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Excellence (Cleaner Grid) */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Technical Excellence</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
                            Built on a foundation of robust, scalable technologies.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-sm border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                                    <CheckCircle2 className="text-indigo-600 w-5 h-5" />
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/50 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Ready to modernize your data stack?</h2>
                    <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-indigo-900/20">
                        Schedule a Strategy Call
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
