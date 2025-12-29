import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        className="text-center text-4xl md:text-5xl font-black mb-12 text-secondary"
                    >
                        Architecting <span className="text-primary">Intelligence</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-10 md:p-16 relative"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-accent to-primary"></div>
                        <p className="bio-text">
                            Final-year <span className="keyword">BS Computer Science</span> student specializing in{' '}
                            <span className="keyword">AI, ML, and Deep Learning</span>.{' '}
                            As <em className="text-secondary">'The Agent Architect,'</em> I design{' '}
                            <span className="keyword">Intelligent Agentic Workflows</span> that combine data science,
                            predictive modeling, and transformer-based architectures to solve real-world problems.
                        </p>
                        <p className="bio-text mt-6">
                            My focus is on building AI-driven solutions that push automation boundaries through{' '}
                            <span className="keyword">Retrieval-Augmented Generation (RAG)</span>,
                            neural networks, and production-grade model optimization.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Geometric Decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 border border-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-accent/10 rounded-full animate-float"></div>
        </section>
    )
}

export default About
