import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section id="home" className="relative min-h-screen flex items-start md:items-center overflow-hidden bg-gradient-to-br from-secondary/30 to-white pt-32 pb-12 md:py-0">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    style={{ y: y1 }}
                    className="z-10 order-2 md:order-1"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
                    >
                        Your Private Sanctuary
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-dark leading-tight mb-6"
                    >
                        Indulge in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Pure Bliss
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg text-dark/70 mb-8 max-w-lg leading-relaxed"
                    >
                        Transform your home into a haven of relaxation. Experience the luxury of professional spa therapies, delivered to your doorstep with absolute privacy and care.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.a
                            href="#book"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 shadow-xl shadow-primary/20"
                        >
                            Reserve My Bliss
                        </motion.a>
                        <a href="#services" className="bg-white text-dark border border-dark/10 px-8 py-4 rounded-full font-medium hover:bg-dark/5 transition-colors">
                            View Services
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-12 flex items-center gap-6 text-sm font-medium text-dark/60"
                    >
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Verified Therapists
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Hygiene First
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span> Privacy Assured
                        </span>
                    </motion.div>
                </motion.div>

                {/* 3D Image */}
                <motion.div
                    style={{ y: y2 }}
                    className="relative z-0 order-1 md:order-2"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full transform translate-y-20"></div>
                        <img
                            src="/hero.png"
                            alt="Relaxing Spa Experience"
                            className="relative w-full h-auto drop-shadow-2xl rounded-3xl"
                        />

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl hidden md:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">4.9</div>
                                <div>
                                    <div className="text-xs text-dark/50">Customer Rating</div>
                                    <div className="font-bold text-dark">Excellent</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
