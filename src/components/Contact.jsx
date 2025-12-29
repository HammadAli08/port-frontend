import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const mailtoLink = `mailto:hammadalitahir8@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`
        window.location.href = mailtoLink
    }

    const contactMethodVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: 0.2 + i * 0.1 }
        })
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-secondary">Let's <span className="text-accent underline decoration-primary underline-offset-8">Connect</span></h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                    {/* Contact Info Side */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-primary italic">Have a project in mind?</h3>
                            <p className="text-secondary/60 text-lg leading-relaxed">
                                I'm always open to discussing AI integrations, machine learning research, or agentic system development. Feel free to reach out through any of these channels.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: <FaEnvelope />, text: 'hammadalitahir8@gmail.com', label: 'Email' },
                                { icon: <FaPhone />, text: '+92 333 4247884', label: 'Call' },
                                { icon: <FaMapMarkerAlt />, text: 'Lahore, Pakistan', label: 'Location' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    variants={contactMethodVariants}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    className="flex items-center gap-6 group"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary text-2xl group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs text-secondary/40 uppercase tracking-widest font-bold mb-1">{item.label}</p>
                                        <p className="text-lg text-secondary font-medium tracking-wide">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex gap-6">
                            <a href="https://linkedin.com/in/hammad-ali08" className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center text-secondary/50 hover:text-primary hover:border-primary transition-all text-xl">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/HammadAli08" className="w-12 h-12 border border-primary/20 rounded-full flex items-center justify-center text-secondary/50 hover:text-accent hover:border-accent transition-all text-xl">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        className="glass-card p-10 relative overflow-hidden"
                    >
                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                            <div className="floating-label-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="floating-input"
                                    placeholder=" "
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label className="floating-label">Full Name</label>
                            </div>

                            <div className="floating-label-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="floating-input"
                                    placeholder=" "
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <label className="floating-label">Email Address</label>
                            </div>

                            <div className="floating-label-group">
                                <textarea
                                    name="message"
                                    className="floating-input min-h-[120px]"
                                    placeholder=" "
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label className="floating-label">How can I help you?</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 bg-primary hover:bg-accent text-secondary font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-colors duration-500 shadow-xl shadow-primary/20 group"
                            >
                                <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </section>
    )
}

export default Contact
