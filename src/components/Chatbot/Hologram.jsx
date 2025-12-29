
import React from 'react';
import { motion } from 'framer-motion';

const Hologram = ({ children, isAi, sources }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isAi ? -50 : 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`relative p-4 rounded-lg mb-4 max-w-[80%] ${isAi
                    ? 'bg-accent-light bg-opacity-10 border border-accent-light self-start ml-2'
                    : 'bg-accent-gold bg-opacity-10 border border-accent-gold self-end mr-2 text-right'
                }`}
            style={{
                boxShadow: isAi ? '0 0 20px rgba(240, 237, 238, 0.2)' : '0 0 20px rgba(212, 175, 55, 0.2)',
                backdropFilter: 'blur(10px)',
            }}
        >
            {/* Scanning Line Effect */}
            <motion.div
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className={`absolute left-0 right-0 h-[1px] opacity-30 ${isAi ? 'bg-accent-light' : 'bg-accent-gold'}`}
            />

            <p className={`text-sm md:text-base ${isAi ? 'text-accent-light' : 'text-accent-gold'} font-mono`}>
                {children}
            </p>

            {isAi && sources && sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-accent-light/10 text-[9px] text-accent-light/40 flex flex-wrap gap-2">
                    <span className="font-bold opacity-60">VERIFIED SOURCES:</span>
                    {sources.map((src, i) => (
                        <span key={i} className="bg-accent-light/5 px-2 py-0.5 rounded border border-accent-light/10">
                            {src}
                        </span>
                    ))}
                </div>
            )}

            {/* Glitch Overlay */}
            <motion.div
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 0.1, repeat: Infinity, repeatDelay: Math.random() * 5 }}
                className="absolute inset-0 bg-white pointer-events-none"
            />
        </motion.div>
    );
};

export default Hologram;
