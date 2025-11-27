import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold mb-6">Shift Spa <span className="text-primary">.</span></h3>
                        <p className="text-white/60 leading-relaxed">
                            Premium doorstep spa services for women. Professional, safe, and relaxing experiences in the comfort of your home.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white/60 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#how-it-works" className="text-white/60 hover:text-primary transition-colors">How It Works</a></li>
                            <li><a href="#book" className="text-white/60 hover:text-primary transition-colors">Book Now</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-white/60">
                                <Phone size={18} className="mr-3 text-primary" />
                                <span>+91 93914 77511</span>
                            </li>
                            <li className="flex items-center text-white/60">
                                <Mail size={18} className="mr-3 text-primary" />
                                <span>shiftspa@gmail.com</span>
                            </li>
                            <li className="flex items-center text-white/60">
                                <MapPin size={18} className="mr-3 text-primary" />
                                <span>Bengaluru, India</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-medium mb-6">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/spa_sift?igsh=bXltNG1ueXkydTln&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            {/* Add more social icons as needed */}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Shift Spa. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
