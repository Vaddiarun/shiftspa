import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Sarah Jenkins",
        rating: 5,
        text: "A truly transformative experience. The therapist created a serene spa atmosphere right in my living room. I felt completely rejuvenated.",
        location: "Indiranagar"
    },
    {
        name: "Priya Patel",
        rating: 5,
        text: "I was hesitant about a home service, but the professionalism and safety checks were impeccable. I could finally relax and let go of all my stress.",
        location: "Koramangala"
    },
    {
        name: "Emily Wong",
        rating: 5,
        text: "Pure bliss! The convenience of not driving home after a massage is a luxury in itself. The aromatic oils they use are absolutely divine.",
        location: "Whitefield"
    }
];

const Testimonials = () => {
    return (
        <section id="reviews" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">Happy Clients</span>
                    <h2 className="text-4xl font-serif font-bold text-dark mb-4">What Women Say</h2>
                    <p className="text-dark/60 max-w-2xl mx-auto">Join hundreds of satisfied customers who have made Shift Spa their go-to home wellness service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex text-primary mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" className="mr-1" />
                                ))}
                            </div>
                            <p className="text-dark/70 mb-6 italic leading-relaxed">"{review.text}"</p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark text-sm">{review.name}</h4>
                                    <span className="text-xs text-dark/40">{review.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
