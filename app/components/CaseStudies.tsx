"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const cases = [
    {
        id: 1,
        title: "FinTech Fraud Detection",
        category: "Machine Learning",
        result: "99.8% Accuracy",
        description: "Implemented a real-time anomaly detection system for a major neo-bank, reducing false positives by 40%.",
        image: "bg-gradient-to-br from-blue-600 to-cyan-600",
        href: "/case-studies/fintech-fraud-detection",
    },
    {
        id: 2,
        title: "Retail Supply Chain",
        category: "Predictive Analytics",
        result: "30% Cost Reduction",
        description: "Built a demand forecasting model that optimized inventory levels across 500+ retail locations.",
        image: "bg-gradient-to-br from-purple-600 to-pink-600",
        href: "/case-studies/retail-supply-chain",
    },
    {
        id: 3,
        title: "Healthcare Triage AI",
        category: "Generative AI",
        result: "2x Faster Processing",
        description: "Deployed an LLM-based triage assistant to help nurses prioritize patient care effectively.",
        image: "bg-gradient-to-br from-emerald-600 to-teal-600",
        href: "/case-studies/healthcare-triage-ai",
    },
    {
        id: 4,
        title: "Legal Doc Automation",
        category: "NLP",
        result: "500h Saved/Month",
        description: "Automated contract review process using custom NLP models for a top-tier law firm.",
        image: "bg-gradient-to-br from-orange-500 to-red-500",
        href: "/case-studies/legal-doc-automation",
    },
];

export default function CaseStudies() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section id="case-studies" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Work</h2>
                        <p className="text-slate-600 max-w-xl">
                            Real-world challenges solved with intelligent data solutions.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:text-indigo-700 transition-colors font-medium">
                        View all projects <ArrowUpRight size={18} />
                    </button>
                </div>

                {/* Expanding Slideshow */}
                <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[500px] w-full">
                    {cases.map((item) => (
                        <Link href={item.href} key={item.id} className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${activeId === item.id ? "lg:flex-[3]" : "lg:flex-[1]"
                            } flex-1 min-h-[200px] lg:min-h-auto group shadow-lg hover:shadow-xl`}>
                            <motion.div
                                layout
                                onHoverStart={() => setActiveId(item.id)}
                                onHoverEnd={() => setActiveId(null)}
                                className="w-full h-full"
                            >
                                {/* Background */}
                                <div className={`absolute inset-0 ${item.image} opacity-90 transition-opacity duration-500`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className={`transition-all duration-500 ${activeId === item.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-90"}`}>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-medium px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm border border-white/20">
                                                {item.category}
                                            </span>
                                        </div>

                                        <h3 className={`font-bold text-white mb-2 leading-tight ${activeId === item.id ? "text-2xl md:text-3xl" : "text-xl"}`}>
                                            {item.title}
                                        </h3>

                                        <div className={`overflow-hidden transition-all duration-500 ${activeId === item.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                            <p className="text-white/90 text-sm md:text-base mb-4 font-medium">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="text-lg font-bold text-white">{item.result}</div>
                                                <div className="w-px h-4 bg-white/40" />
                                                <span className="text-xs text-white/80 flex items-center gap-1 hover:text-white transition-colors">
                                                    Read Case Study <ArrowUpRight size={12} />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
