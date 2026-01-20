import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background text-gray-300 py-4 font-sans border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Colonne 1 : Branding */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'cursive' }}>
                            Ezchiel Yao
                        </h2>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Développeur Web Fullstack passionné, créant des applications web modernes et performantes avec Python, Django, JavaScript et Next.js.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Navigation</h3>
                        <ul className="space-y-3">
                            {[
                                { name: 'À propos', href: '#about' },
                                { name: 'Compétences', href: '#skills' },
                                { name: 'Projets', href: '#projects' },
                                { name: 'Expérience', href: '#experience' },
                                { name: 'Contact', href: '#contact' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-amber-500 transition-colors duration-200">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                                <span>Abidjan, Côte d'Ivoire</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                                <a href="mailto:yaoezchiel@gmail.com" className="hover:text-white transition-colors">
                                    yaoezchiel@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                                <span>+225 05 85 49 73 13</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:yaoezchiel@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>

                    <div className="text-sm text-gray-500">
                        © 2026 Ezechiel YAO. Tous droits réservés.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;