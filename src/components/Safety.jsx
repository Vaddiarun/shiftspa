import React from 'react';
import { motion } from 'framer-motion';
import { Shield, PhoneCall, UserCheck } from 'lucide-react';

const Safety = () => {
    return (
        <section id="safety" className="py-24 bg-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-2 block">Safety First</span>
                    <h2 className="text-4xl font-serif font-bold mb-4">Your Safety & Privacy</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">We prioritize your peace of mind with strict protocols and professional standards.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <Shield size={40} className="text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">Professional Integrity</h3>
                        <p className="text-white/60 leading-relaxed">
                            Our therapists are strictly professionals focused solely on your wellness. We uphold a zero-tolerance policy to ensure a safe, respectful, and therapeutic environment.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <UserCheck size={40} className="text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">Verified & Vetted</h3>
                        <p className="text-white/60 leading-relaxed">
                            Every therapist undergoes comprehensive background checks and certification verification. We prioritize your safety by ensuring only trusted professionals enter your home.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
                    >
                        <PhoneCall size={40} className="text-primary mb-6" />
                        <h3 className="text-xl font-bold mb-4">Transparent Process</h3>
                        <p className="text-white/60 leading-relaxed">
                            Peace of mind starts before the doorbell rings. We share your therapist's profile and details upon booking confirmation, so you know exactly who to expect.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};



export default Safety;
