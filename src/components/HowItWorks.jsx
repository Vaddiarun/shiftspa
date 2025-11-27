import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle, Smile } from 'lucide-react';

const steps = [
    {
        icon: <Calendar size={32} />,
        title: "Choose Service",
        description: "Select your preferred massage therapy and duration from our menu."
    },
    {
        icon: <MapPin size={32} />,
        title: "Share Location",
        description: "Provide your home address. We serve Bengaluru and nearby areas."
    },
    {
        icon: <CheckCircle size={32} />,
        title: "Confirmation",
        description: "Our therapist confirms the schedule and arrives fully equipped."
    },
    {
        icon: <Smile size={32} />,
        title: "Relax",
        description: "Enjoy a professional spa experience in the comfort of your home."
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">Simple Process</span>
                    <h2 className="text-4xl font-serif font-bold text-dark mb-4">How It Works</h2>
                    <p className="text-dark/60 max-w-2xl mx-auto">Experience luxury in four simple steps. We handle everything, so you can focus on relaxation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-50 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:border-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                            <p className="text-dark/60 leading-relaxed">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
