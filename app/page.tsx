import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import ScheduleConsultation from "./components/ScheduleConsultation";

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
      <ScheduleConsultation />

      <Footer />
    </main>
  );
}
