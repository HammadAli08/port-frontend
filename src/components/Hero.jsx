import { useRef } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'

const Hero = () => {
    const name = "Hammad Ali Tahir"
    const letters = Array.from(name)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.5
            }
        }
    }

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            x: () => (Math.random() - 0.5) * 100,
            scale: 0.5,
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0)",
            transition: { type: "spring", damping: 12, stiffness: 200 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    const handleRipple = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add("ripple");

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }

    return (
        <section
            id="home"
            className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            <ParticleBackground />

            <div className="container mx-auto px-6 text-center z-10 relative pt-20">
                {/* Animated Name Assembly */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-6xl md:text-8xl font-black mb-6 tracking-tight flex flex-wrap justify-center"
                >
                    {letters.map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className={char === " " ? "mr-4" : "text-primary shimmer-teal"}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtitle with sequential delay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mb-8 flex justify-center"
                >
                    <p className="text-xl md:text-2xl text-secondary font-semibold border-r-2 border-accent pr-2 animate-pulse-teal">
                        AI/ML Engineer | Data Scientist
                    </p>
                </motion.div>

                {/* Location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-lg md:text-xl mb-12 text-secondary/70"
                >
                    Lahore, Pakistan
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16">
                    <motion.a
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2 }}
                        href="/resume_lat.pdf"
                        download="Hammad_Ali_Tahir_Resume.pdf"
                        className="ripple-container"
                    >
                        <button
                            onClick={handleRipple}
                            className="bg-primary hover:bg-accent text-secondary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-colors duration-500 shadow-lg shadow-primary/20"
                        >
                            <FaDownload />
                            Download Resume
                        </button>
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 }}
                        href="#contact"
                    >
                        <button className="border-2 border-primary hover:border-accent text-secondary px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-500 hover:shadow-lg hover:shadow-accent/20">
                            <FaEnvelope />
                            Get In Touch
                        </button>
                    </motion.a>
                </div>

                {/* Social Links with Sequential Delay */}
                <div className="flex justify-center gap-8">
                    {[
                        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/hammad-ali08" },
                        { icon: <FaGithub />, href: "https://github.com/HammadAli08" },
                        { icon: <FaEnvelope />, href: "mailto:hammadalitahir8@gmail.com" },
                        { icon: <FaPhone />, href: "tel:+923334247884" }
                    ].map((social, i) => (
                        <motion.a
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.5 + i * 0.1, type: "spring" }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-secondary/80 hover:text-primary transition-all duration-300 text-3xl hover:scale-125"
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            >
                <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
