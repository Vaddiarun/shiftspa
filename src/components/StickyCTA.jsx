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
                    className="fixed bottom-0 left-0 w-full px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white/90 backdrop-blur-md border-t border-primary/20 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
                >
                    <a href="#book" className="block w-full bg-primary text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform">
                        Book Now
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default StickyCTA;
