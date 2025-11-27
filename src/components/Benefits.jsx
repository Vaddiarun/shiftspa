import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Sparkles, Clock } from 'lucide-react';

const benefits = [
    {
        icon: <UserCheck size={24} />,
        title: "Certified Male Therapists",
        description: "Highly trained, background-verified professionals dedicated to your wellness."
    },
    {
        icon: <ShieldCheck size={24} />,
        title: "Safe & Professional",
        description: "Strict protocols ensuring a secure, respectful, and comfortable environment for women."
    },
    {
        icon: <Sparkles size={24} />,
        title: "Premium Products",
        description: "We use only high-quality, organic essential oils and fresh linens."
    },
    {
        icon: <Clock size={24} />,
        title: "Flexible Scheduling",
        description: "Book a session at your convenience, from early morning to late evening."
    }
];

const Benefits = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-secondary/30 rounded-full blur-[80px] transform scale-90"></div>
                        <img
                            src="/spa-elements.png"
                            alt="Premium Spa Elements"
                            className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                    {/* Content Side */}
                    <div>
                        <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">Why Choose Us</span>
                        <h2 className="text-4xl font-serif font-bold text-dark mb-8">Elevating Home Wellness</h2>

                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary mr-6 flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-dark mb-2">{benefit.title}</h3>
                                        <p className="text-dark/60 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Benefits;
