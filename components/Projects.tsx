"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Données statiques pour l'instant (à remplacer par Supabase plus tard)
const projects = [
    {
        id: 1,
        title: "Portfolio Personnel",
        description: "Mon site personnel présentant mes projets et compétences. Design moderne et animations fluides.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        image: "https://placehold.co/600x400/1e293b/ffffff?text=Portfolio",
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Application E-commerce",
        description: "Une plateforme de vente en ligne complète avec panier, paiement Stripe et dashboard admin.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "https://placehold.co/600x400/0f172a/ffffff?text=E-commerce",
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        description: "Tableau de bord pour visualiser des données en temps réel avec des graphiques interactifs.",
        tags: ["Vue.js", "Chart.js", "Firebase"],
        image: "https://placehold.co/600x400/334155/ffffff?text=Dashboard",
        demoUrl: "#",
        githubUrl: "#",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Mes Projets</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4">Quelques réalisations récentes.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-surface rounded-2xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:-translate-y-2 hover:shadow-xl shadow-black/50"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.demoUrl}
                                        className="p-3 bg-primary text-white rounded-full hover:scale-110 transition-transform"
                                        title="Voir le site"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="p-3 bg-surface text-white rounded-full hover:scale-110 transition-transform border border-gray-600"
                                        title="Voir le code"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-background text-primary rounded-full border border-gray-800"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
                        Voir tous les projets <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
