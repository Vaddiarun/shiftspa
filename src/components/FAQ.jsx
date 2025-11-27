import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Is this service only for women?",
        answer: "Yes, Shift Spa is exclusively for female clients to ensure a comfortable and safe environment."
    },
    {
        question: "Are the therapists trained & certified?",
        answer: "Absolutely. All our male therapists are certified professionals with years of experience and have undergone strict background checks."
    },
    {
        question: "What locations do you cover?",
        answer: "We currently serve Bengaluru and nearby areas. Please enter your location in the booking form to check availability."
    },
    {
        question: "How do I pay?",
        answer: "You can pay via cash, credit card, or digital wallet after the service is completed."
    },
    {
        question: "Is my information private?",
        answer: "Yes, we adhere to strict privacy policies. Your personal details are never shared with third parties."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-dark mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-6 text-left focus:outline-none group"
                            >
                                <span className={`text-lg font-medium transition-colors ${activeIndex === index ? 'text-primary' : 'text-dark group-hover:text-primary'}`}>
                                    {faq.question}
                                </span>
                                <span className={`ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-primary' : 'text-dark/40'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-dark/60 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
