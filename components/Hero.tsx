"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ avatarUrl }: { avatarUrl?: string | null }) {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background to-background/50"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-blue-900/10 blur-3xl rounded-full translate-y-1/4 -translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-2">
                        Bonjour, je suis
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                        Ezechiel <span className="text-primary">YAO</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                        Développeur Web & <span className="text-blue-400">Data Analyst</span>
                    </h3>
                    <p className="text-gray-400 max-w-lg mb-8 text-lg leading-relaxed">
                        Je conçois des solutions performantes et esthétiques. Passionné par le code propre et les interfaces utilisateur intuitives.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-background font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 flex items-center gap-2"
                        >
                            Voir mes projets <ArrowRight size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 border border-blue-500 text-blue-400 font-medium rounded-full hover:bg-blue-500/10 transition-colors"
                        >
                            Me contacter
                        </a>
                    </div>

                    <div className="flex gap-6 mt-10">
                        <SocialLink href="https://github.com/zecky-cmd" icon={<Github size={24} />} />
                        <SocialLink href="https://www.linkedin.com/in/ezechiel-yao-454a003aa/" icon={<Linkedin size={24} />} />
                        <SocialLink href="mailto:yaoezchiel@gmail.com" icon={<Mail size={24} />} />
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
                        <div className="absolute inset-4 border-2 border-blue-500/30 rounded-full animate-reverse-spin" style={{ animationDuration: '10s' }} />
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-surface shadow-2xl bg-surface">
                            {/* Replace src with your actual image path */}
                            <Image
                                src={avatarUrl || "https://placehold.co/400x400/1e293b/ffffff?text=Ezechiel"}
                                alt="Ezchiel YAO"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Decoration Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4 }}
                            className="absolute -bottom-4 -right-4 bg-surface p-4 rounded-xl border border-gray-800 shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-white">Disponible pour projets</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-surface text-gray-400 hover:text-white hover:bg-primary hover:scale-110 transition-all border border-gray-800"
        >
            {icon}
        </a>
    );
}
