"use client";

import { motion } from "framer-motion";
import { Brain, Database, Code2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: <Brain className="w-10 h-10 text-indigo-600" />,
        title: "AI Automation",
        description: "Deploy intelligent agents that work 24/7. We build autonomous workflows to handle complex tasks, reducing operational costs by up to 60%.",
        tags: ["Agentic AI", "Process Automation"],
        href: "/services/ai-automation",
    },
    {
        icon: <Database className="w-10 h-10 text-cyan-600" />,
        title: "Data Engineering",
        description: "Your data is your moat. We architect scalable data meshes and governance frameworks that turn raw information into a competitive asset.",
        tags: ["Data Mesh", "Governance"],
        href: "/services/data-engineering",
    },
    {
        icon: <Code2 className="w-10 h-10 text-violet-600" />,
        title: "Custom Projects",
        description: "Off-the-shelf software fails at the edge. We engineer bespoke AI solutions and platforms specifically for your unique business logic.",
        tags: ["Full-Stack AI", "Enterprise Dev"],
        href: "/services/custom-projects",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Core Capabilities</h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        We focus on high-impact areas where technology creates exponential value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className="block h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col"
                            >
                                {/* Gradient Blob on Hover */}
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

                                <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm border border-slate-100 group-hover:shadow-md transition-all relative z-10">
                                    {service.icon}
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-slate-900 relative z-10">{service.title}</h3>
                                <p className="text-slate-600 leading-relaxed mb-8 relative z-10">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                                    {service.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all cursor-pointer relative z-10 mt-auto">
                                    Learn more <ArrowRight size={18} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
