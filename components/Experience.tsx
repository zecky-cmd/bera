"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data/experiences";



export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Mon Expérience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2 ml-4 md:ml-0" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-surface border-4 border-primary rounded-full transform md:-translate-x-1/2 -ml-0 md:-ml-0 ml-0 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 w-full md:w-1/2">
                  <div
                    className={`bg-surface p-6 rounded-2xl border border-gray-800 hover:border-primary/30 transition-colors ${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-blue-400 font-medium mb-3 flex items-center gap-2 md:justify-end">
                      {index % 2 !== 0 && <Briefcase size={16} />}
                      {exp.company}
                      {index % 2 === 0 && <Briefcase size={16} />}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
