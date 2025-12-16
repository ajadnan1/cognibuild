import { Metadata } from "next";
import ServiceLayout from "@/app/components/ServiceLayout";
import { Code2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Projects | Bespoke AI Solutions",
    description: "High-performance, custom software solutions infused with state-of-the-art AI capabilities tailored to your specific edge cases.",
};

export default function CustomProjectsPage() {
    return (
        <ServiceLayout
            title="Custom Projects"
            subtitle="Bespoke AI Engineering"
            description="When off-the-shelf SaaS isn't enough. We build high-performance, custom software solutions infused with state-of-the-art AI capabilities tailored to your specific edge cases."
            icon={<Code2 className="w-12 h-12 text-violet-600" />}
            features={[
                "Full-Stack AI Application Development",
                "Custom LLM Fine-Tuning & Training",
                "Edge AI Deployment",
                "Computer Vision Systems",
                "Proprietary Algorithm Development"
            ]}
            benefits={[
                { title: "Competitive Advantage", desc: "Own your IP. Build unique capabilities that your competitors cannot simply buy." },
                { title: "Perfect Fit", desc: "No more workarounds. Software designed exactly for your unique workflows and constraints." },
                { title: "High Performance", desc: "Optimized for speed and efficiency, stripping away the bloat of generic platforms." }
            ]}
        />
    );
}
