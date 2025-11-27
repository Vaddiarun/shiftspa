import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past Hero (approx 500px)
            setIsVisible(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-primary/20 z-40 md:hidden"
                >
                    <a href="#book" className="block w-full bg-primary text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-primary/20">
                        Book Now
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
