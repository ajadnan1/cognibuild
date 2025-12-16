"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
    {
        id: 1,
        date: "Dec 08, 2025",
        title: "The Future of RAG",
        excerpt: "Why Retrieval-Augmented Generation is becoming the standard for internal knowledge management.",
        tag: "AI Trends",
        color: "bg-indigo-500",
    },
    {
        id: 2,
        date: "Nov 24, 2025",
        title: "AI Governance 2026",
        excerpt: "A comprehensive guide to the new regulatory landscape for automated decision-making systems.",
        tag: "Compliance",
        color: "bg-emerald-500",
    },
    {
        id: 3,
        date: "Nov 10, 2025",
        title: "Data Mesh Shift",
        excerpt: "Decentralizing data ownership to improve agility and reduce bottlenecks in large organizations.",
        tag: "Architecture",
        color: "bg-cyan-500",
    },
    {
        id: 4,
        date: "Oct 28, 2025",
        title: "Agentic Workflows",
        excerpt: "Moving beyond simple chatbots to autonomous agents that can execute complex multi-step tasks.",
        tag: "Innovation",
        color: "bg-violet-500",
    },
];

export default function Blogs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="blogs" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Latest Insights</h2>
                    <p className="text-xl text-slate-600">
                        Thoughts on technology, strategy, and the future of work.
                    </p>
                </div>

                {/* Expanding Cards Layout */}
                <div className="flex flex-col md:flex-row gap-6 h-[500px] w-full">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            layout
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out glass-card ${hoveredIndex === index ? "md:flex-[2]" : "md:flex-[1]"
                                } flex-1 min-h-[150px] md:min-h-auto group`}
                        >
                            {/* Decorative Bar */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${blog.color}`} />

                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-xs text-slate-500 font-mono">{blog.date}</span>
                                        <span className={`text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200`}>
                                            {blog.tag}
                                        </span>
                                    </div>

                                    <h3 className={`font-bold text-slate-900 transition-all duration-300 ${hoveredIndex === index ? "text-2xl" : "text-xl"}`}>
                                        {blog.title}
                                    </h3>
                                </div>

                                <div className={`transition-all duration-500 ${hoveredIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 md:opacity-0 md:translate-y-4"}`}>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {blog.excerpt}
                                    </p>
                                    <span className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight size={16} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
