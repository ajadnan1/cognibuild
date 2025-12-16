import { Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pt-20 pb-10 overflow-hidden">
            {/* Dark Glass Background */}
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-xl border-t border-white/10 z-0" />

            <div className="container mx-auto px-6 relative z-10 text-slate-300">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">Cognibuild</h2>
                        <p className="text-slate-400 max-w-sm mb-8 text-lg leading-relaxed">
                            Empowering enterprises with intelligent data solutions. We build the future with cognitive engineering.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-white">
                                <Linkedin size={20} />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-white">
                                <Twitter size={20} />
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer text-white">
                                <Github size={20} />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg">Services</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Generative AI</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Data Strategy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Predictive Analytics</li>
                            <li className="hover:text-white cursor-pointer transition-colors">ML Engineering</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-white text-lg">Company</h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2025 Cognibuild. All rights reserved.</p>
                    <p>Designed with Intelligence.</p>
                </div>
            </div>
        </footer>
    );
}
