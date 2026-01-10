"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">À propos de moi</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shine-effect">
                            {/* Replace with actual image */}
                            <Image
                                src="https://placehold.co/600x400/1e293b/ffffff?text=Workspace"
                                alt="Workspace"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decoration dots */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-white mb-6">
                            De l'idée à la réalité numérique
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Je suis Ezechiel YAO, un développeur passionné avec une solide expérience dans la création d'applications web modernes. Mon parcours m'a permis de maîtriser à la fois le développement Frontend et Backend, ainsi que l'analyse de données.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Mon objectif est de créer des interfaces intuitives et performantes qui résolvent de vrais problèmes. Je suis constamment en train d'apprendre de nouvelles technologies pour rester à la pointe de l'innovation.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {["Développement Fullstack", "Design Responsive", "Optimisation SEO", "Analyse de Données"].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-primary w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mt-8 px-8 py-3 bg-surface border border-gray-700 hover:border-primary text-white font-medium rounded-full transition-colors"
                        >
                            En savoir plus
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
