"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Mock Data for Case Studies
const caseStudiesData: Record<string, any> = {
    "fintech-fraud-detection": {
        title: "FinTech Fraud Detection",
        category: "Machine Learning",
        stats: [
            { label: "Accuracy", value: "99.8%" },
            { label: "False Positives", value: "-40%" },
            { label: "Processing Time", value: "<50ms" }
        ],
        challenge: "A leading neo-bank was facing a surge in sophisticated fraud attacks that traditional rule-based systems couldn't catch without blocking legitimate users.",
        solution: "We engineered a real-time anomaly detection pipeline using an ensemble of Gradient Boosted Trees and Deep Learning autoencoders. The system analyzes 500+ features per transaction in milliseconds.",
        techStack: ["Python", "TensorFlow", "AWS SageMaker", "Kafka", "Redis"]
    },
    "retail-supply-chain": {
        title: "Retail Supply Chain Optimization",
        category: "Predictive Analytics",
        stats: [
            { label: "Cost Reduction", value: "30%" },
            { label: "Stockouts", value: "-85%" },
            { label: "Locations", value: "500+" }
        ],
        challenge: "A major retail chain struggled with inventory management, leading to frequent stockouts in high-demand items and overstocking in others.",
        solution: "We built a demand forecasting engine that ingests historical sales, weather data, and local events to predict SKU-level demand 30 days out.",
        techStack: ["Databricks", "PySpark", "Prophet", "Azure ML", "PowerBI"]
    },
    "healthcare-triage-ai": {
        title: "Healthcare Patient Triage",
        category: "Generative AI",
        stats: [
            { label: "Triage Speed", value: "2x" },
            { label: "Nurse Satisfaction", value: "4.8/5" },
            { label: "Patient Wait", value: "-25%" }
        ],
        challenge: "Emergency departments were overwhelmed, with nurses spending excessive time on initial patient intake and documentation.",
        solution: "We deployed a HIPAA-compliant LLM assistant that listens to patient intake (speech-to-text), summarizes symptoms, and suggests triage priority codes for nurse review.",
        techStack: ["OpenAI API (Enterprise)", "LangChain", "React Native", "AWS Lambda", "PostgreSQL"]
    },
    "legal-doc-automation": {
        title: "Legal Document Automation",
        category: "NLP",
        stats: [
            { label: "Hours Saved", value: "500/mo" },
            { label: "Review Cost", value: "-60%" },
            { label: "Accuracy", value: "99.5%" }
        ],
        challenge: "A top-tier law firm needed to review thousands of merger documents under tight deadlines, a process prone to human fatigue and error.",
        solution: "We fine-tuned a BERT-based model to automatically extract key clauses, identify risks, and flag anomalies in contracts, presenting them in a review dashboard.",
        techStack: ["HuggingFace", "PyTorch", "Docker", "Elasticsearch", "React"]
    }
};

export default function CaseStudyDetail() {
    const params = useParams();
    const slug = params.slug as string;
    const data = caseStudiesData[slug];

    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-slate-900">Case Study Not Found</h1>
                    <Link href="/" className="text-indigo-600 hover:underline mt-4 block">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
            <div className="mesh-bg" />
            <div className="dot-pattern" />
            <Navbar />

            <section className="pt-40 pb-20">
                <div className="container mx-auto px-6">
                    <Link href="/#case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors mb-8">
                        <ArrowLeft size={18} /> Back to Case Studies
                    </Link>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                            {data.category}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-12">{data.title}</h1>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-8 mb-20 border-y border-slate-200 py-10">
                            {data.stats.map((stat: any, i: number) => (
                                <div key={i} className="text-center md:text-left">
                                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.value}</div>
                                    <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            <div className="lg:col-span-2 space-y-12">
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Challenge</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">{data.challenge}</p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Solution</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed">{data.solution}</p>
                                </div>
                            </div>

                            <div className="glass-card p-8 rounded-3xl h-fit">
                                <h3 className="font-bold text-slate-900 mb-6">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {data.techStack.map((tech: string) => (
                                        <span key={tech} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-sm text-slate-600">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
