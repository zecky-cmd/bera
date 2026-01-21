"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function Contact() {
    const supabase = createClient();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        if (!supabaseUrl || !supabaseKey) {
            // Simulation for demo if no Supabase
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Form submitted (Simulation):", formData);
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            return;
        }

        try {
            const { error } = await supabase
                .from('messages')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                    }
                ]);

            if (error) throw error;

            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Contactez-moi</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-gray-400 mt-4">Parlons de votre prochain projet.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
                        <p className="text-gray-400 mb-8">
                            Je suis actuellement disponible pour des missions freelance ou des opportunités en CDI. N'hésitez pas à me contacter.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Téléphone</p>
                                <p className="text-white font-medium">+225 05 85 49 73 13</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Email</p>
                                <p className="text-white font-medium">yaoezchiel@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Localisation</p>
                                <p className="text-white font-medium">Abidjan, Côte d'Ivoire</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface p-8 rounded-2xl border border-gray-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="Votre nom"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="votre@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Sujet</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Proposition de projet..."
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Dites-moi tout..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${status === "success"
                                    ? "bg-green-500 text-white cursor-default"
                                    : "bg-primary text-background hover:bg-orange-600"
                                    }`}
                            >
                                {status === "loading" ? (
                                    <span className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    "Message envoyé !"
                                ) : (
                                    <>Envoyer le message <Send size={20} /></>
                                )}
                            </button>

                            {status === "error" && (
                                <p className="text-red-400 text-sm text-center mt-2">
                                    Une erreur est survenue. Veuillez réessayer.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
