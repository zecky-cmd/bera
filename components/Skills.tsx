"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Settings, Terminal } from "lucide-react";

const skillsData = [
    {
        category: "Langages",
        icon: <Code className="w-8 h-8 text-orange-400" />,
        items: [
            { name: "JavaScript / TypeScript", level: 90 },
            { name: "Python", level: 85 },
            { name: "HTML / CSS", level: 95 },
        ],
    },
    {
        category: "Frameworks Frontend",
        icon: <Layout className="w-8 h-8 text-blue-400" />,
        items: [
            { name: "React / Next.js", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            
        ],
    },
    {
        category: "Backend & Base de données",
        icon: <Database className="w-8 h-8 text-green-400" />,
        items: [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 80 },
            { name: "Django", level: 65},
            { name: "Supabase / Firebase", level: 85 },
            { name: "PostgreSQL", level: 75 },
        ],
    },
    {
        category: "Outils & DevOps",
        icon: <Terminal className="w-8 h-8 text-purple-400" />,
        items: [
            { name: "Git / GitHub", level: 90 },
            { name: "Docker", level: 60 },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-background/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Mes Compétences</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Mon expertise technique et les outils que j'utilise au quotidien pour donner vie aux projets.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-surface p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-colors shadow-lg"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-background rounded-xl border border-gray-700">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.category}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.items.map((skill, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-500 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-background rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                                                className={`h-full rounded-full ${idx === 0 ? "bg-orange-400" :
                                                        idx === 1 ? "bg-blue-400" :
                                                            idx === 2 ? "bg-green-400" : "bg-purple-400"
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
