import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Swedish Massage",
        price: "₹1,999",
        duration: "60 mins",
        description: "Drift into relaxation with long, gliding strokes and aromatic oils that soothe the senses and improve circulation."
    },
    {
        title: "Deep Tissue",
        price: "₹2,499",
        duration: "60 mins",
        description: "Intense relief for tired muscles. Targeted pressure melts away chronic tension and knots, restoring your body's natural balance."
    },
    {
        title: "Aromatherapy",
        price: "₹2,299",
        duration: "60 mins",
        description: "A sensory journey using premium essential oils. Let the calming scents and gentle touch elevate your physical and emotional well-being."
    },
    {
        title: "Head, Neck & Shoulder",
        price: "₹999",
        duration: "45 mins",
        description: "Instant relief for stress. Focused attention on the upper body dissolves tension, perfect for unwinding after a long day."
    },
    {
        title: "Foot Reflexology",
        price: "₹899",
        duration: "45 mins",
        description: "Revitalize from the ground up. Ancient pressure point techniques restore energy flow and leave you walking on air."
    },
    {
        title: "Shift Signature",
        price: "₹2,999",
        duration: "90 mins",
        description: "The ultimate indulgence. A bespoke fusion of Swedish and Aromatherapy techniques for complete mind-body rejuvenation."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">Our Menu</span>
                    <h2 className="text-4xl font-serif font-bold text-dark mb-4">Premium Services</h2>
                    <p className="text-dark/60 max-w-2xl mx-auto">Choose from our range of professional therapies designed to relax, heal, and rejuvenate.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-serif font-bold text-dark group-hover:text-primary transition-colors">{service.title}</h3>
                                <span className="text-lg font-bold text-primary">{service.price}</span>
                            </div>

                            <div className="flex items-center text-dark/40 text-sm mb-4">
                                <Clock size={16} className="mr-2" />
                                {service.duration}
                            </div>

                            <p className="text-dark/60 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <a href="#book" className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all">
                                Book Now <ArrowRight size={16} className="ml-1" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
