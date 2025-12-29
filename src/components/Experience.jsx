import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaBrain, FaCode, FaTrophy } from 'react-icons/fa'

const experiences = [
    {
        title: 'Generative AI Engineer',
        company: 'Uraan AI Techathone 1.0',
        period: 'Sept-Oct 2025',
        icon: FaRocket,
        achievements: [
            'Built AI-Powered Legal Case Management System using Agentic RAG',
            'Achieved 91.5% classification accuracy across complex legal datasets',
            'Implemented hybrid retrieval pipelines using ChromaDB and Custom LLMs',
        ],
    },
    {
        title: 'AI Developer',
        company: 'IBM Hackathon',
        period: 'Dec 2024',
        icon: FaTrophy,
        achievements: [
            'Developed Career Pathfinder AI on IBM Watsonx platform',
            'Built Resume Analyzer utilizing NLP for sentiment and skill gap analysis',
            'Won acclaim for dual-tool workflow integration',
        ],
    },
]

const Experience = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="experience" className="py-24 bg-dark/50 relative overflow-hidden" ref={ref}>
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-32 -right-32 w-64 h-64 border border-primary/10 rounded-full"
                />
                <motion.div
                    animate={{
                        rotate: -360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -bottom-48 -left-48 w-96 h-96 border border-accent/10 rounded-full"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-secondary">
                        Career <span className="text-accent italic relative">
                            Trajectory
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={inView ? { scaleX: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent origin-left"
                            />
                        </span>
                    </h2>
                </motion.div>

                {/* Timeline container */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Central timeline line */}
                    <motion.div
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : {}}
                        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary origin-top"
                    />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const Icon = exp.icon
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={index}
                                    initial={{
                                        opacity: 0,
                                        x: isEven ? -100 : 100,
                                        rotateY: isEven ? -15 : 15
                                    }}
                                    animate={inView ? {
                                        opacity: 1,
                                        x: 0,
                                        rotateY: 0
                                    } : {}}
                                    transition={{
                                        delay: 0.4 + index * 0.3,
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    className={`relative flex items-start gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Timeline node with pulsing animation */}
                                    <motion.div
                                        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20"
                                        initial={{ scale: 0 }}
                                        animate={inView ? { scale: 1 } : {}}
                                        transition={{ delay: 0.6 + index * 0.3, type: "spring" }}
                                    >
                                        <motion.div
                                            animate={{
                                                boxShadow: [
                                                    '0 0 0 0 rgba(44, 102, 110, 0.4)',
                                                    '0 0 0 15px rgba(44, 102, 110, 0)',
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-12 h-12 rounded-full bg-rich-black border-2 border-primary flex items-center justify-center"
                                        >
                                            <Icon className="text-primary text-lg" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Experience card */}
                                    <motion.div
                                        className={`ml-20 md:ml-0 md:w-[calc(50%-40px)] ${isEven ? '' : 'md:ml-auto'}`}
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: '0 20px 40px -20px rgba(44, 102, 110, 0.3)'
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="glass-card p-8 border-l-4 border-primary relative overflow-hidden group">
                                            {/* Hover gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            {/* Animated corner accent */}
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: '30%' } : {}}
                                                transition={{ delay: 0.8 + index * 0.3, duration: 0.5 }}
                                                className="absolute top-0 right-0 h-0.5 bg-gradient-to-l from-accent to-transparent"
                                            />

                                            <div className="relative">
                                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                                    <div>
                                                        <motion.h3
                                                            className="text-2xl font-bold text-secondary"
                                                            whileHover={{ x: 5 }}
                                                        >
                                                            {exp.title}
                                                        </motion.h3>
                                                        <p className="text-primary font-bold tracking-widest text-sm uppercase">{exp.company}</p>
                                                    </div>
                                                    <motion.span
                                                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-secondary/60"
                                                        whileHover={{
                                                            backgroundColor: 'rgba(44, 102, 110, 0.2)',
                                                            borderColor: 'rgba(44, 102, 110, 0.5)'
                                                        }}
                                                    >
                                                        {exp.period}
                                                    </motion.span>
                                                </div>

                                                <ul className="space-y-4">
                                                    {exp.achievements.map((item, i) => (
                                                        <motion.li
                                                            key={i}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={inView ? { opacity: 1, x: 0 } : {}}
                                                            transition={{ delay: 1 + index * 0.3 + i * 0.1 }}
                                                            className="flex gap-4 items-start text-secondary/70 group/item"
                                                        >
                                                            <motion.span
                                                                className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0"
                                                                whileHover={{ scale: 1.5, backgroundColor: '#2C666E' }}
                                                            />
                                                            <span className="leading-relaxed group-hover/item:text-secondary transition-colors duration-300">
                                                                {item}
                                                            </span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
