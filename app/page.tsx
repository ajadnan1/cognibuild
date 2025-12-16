import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cognibuild | AI & Data Strategy",
  description: "We help enterprises modernize their data stack and deploy autonomous AI agents to drive efficiency and growth.",
};


export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-indigo-100 selection:text-indigo-900">
      {/* Global Background Elements */}
      <div className="mesh-bg" />
      <div className="dot-pattern" />

      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Blogs />

      {/* Contact CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50/80 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 tracking-tight">Ready to Transform?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Let's discuss how we can leverage AI to solve your most complex business challenges.
          </p>
          <button className="px-12 py-5 bg-slate-900 text-white text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-indigo-900/20">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
