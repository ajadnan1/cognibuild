"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Decorative Shapes */}
            <div className="absolute top-1/3 left-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-float delay-100" />
            <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-xl animate-float delay-700" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-indigo-100 shadow-sm text-sm text-indigo-600 font-medium mb-8 animate-fade-in-up">
                        <Sparkles size={14} />
                        <span>Redefining Enterprise Intelligence</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
                        Intelligence, <br />
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600">
                                Refined.
                            </span>
                            {/* Underline decoration */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        We don't just analyze data. We engineer <span className="font-semibold text-slate-800">clarity</span> from chaos, building the AI infrastructure that powers your next decade of growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-slate-900 text-white font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/30">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Transformation <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                        <button className="px-8 py-4 text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300 transition-all font-medium shadow-sm hover:shadow-md">
                            Explore Our Work
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
