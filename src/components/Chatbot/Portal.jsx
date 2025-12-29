
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const GlitchOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0, 0.4, 0] }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.4, 0.6, 1], repeat: 3 }}
            className="absolute inset-0 bg-accent-light bg-opacity-10 pointer-events-none z-[101] flex items-center justify-center font-mono text-accent-light text-4xl"
        >
            <motion.span
                animate={{ x: [-10, 10, -5, 5, 0] }}
                transition={{ duration: 0.1, repeat: 10 }}
            >
                ESTABLISHING NEURAL LINK...
            </motion.span>
        </motion.div>
    );
};

const Portal = ({ isOpen, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ clipPath: 'circle(0% at 90% 90%)', opacity: 0 }}
                    animate={{ clipPath: 'circle(150% at 90% 90%)', opacity: 1 }}
                    exit={{ clipPath: 'circle(0% at 90% 90%)', opacity: 0 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] bg-[#050505] bg-opacity-95 backdrop-blur-2xl flex items-center justify-center overflow-hidden"
                >
                    <GlitchOverlay />
                    {/* Quantum Rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{
                                    scale: [1, 2, 3],
                                    opacity: [0, 0.2, 0],
                                    rotate: [0, 180, 360]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 0.8,
                                    ease: "linear"
                                }}
                                className="absolute border border-accent-light rounded-full"
                                style={{ width: '20vw', height: '20vw' }}
                            />
                        ))}
                    </div>

                    {/* Content */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="w-full h-full max-w-6xl p-6 relative z-10"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Portal;
