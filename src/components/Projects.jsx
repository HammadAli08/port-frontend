import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
    {
        title: 'AI Legal Case Management System',
        description: 'Advanced legal platform with 91.5% classification accuracy using custom LLM pipelines.',
        tech: ['FastAPI', 'LangChain', 'ChromaDB', 'React'],
        demo: 'https://legal-management-system.streamlit.app/',
        github: null,
    },
    {
        title: 'Academic RAG Assistant',
        description: 'Multi-Vector retrieval system processing 160+ academic regulation documents with zero hallucinations.',
        tech: ['Python', 'OpenAI', 'RAG', 'Streamlit'],
        demo: null,
        github: null,
        inProgress: true,
    },
    {
        title: 'Loan Approval Prediction',
        description: 'Predictive modeling system with 98% accuracy, deployed as a full-stack automated pipeline.',
        tech: ['Scikit-learn', 'Docker', 'FastAPI'],
        demo: null,
        github: 'https://github.com/HammadAli08/Loan_Approval_Prediction',
    },
    {
        title: 'GitHub Research Tool',
        description: 'Agentic system for analyzing codebases and generating deep technical insights from repositories.',
        tech: ['Agentic AI', 'GROQ', 'HuggingFace'],
        demo: null,
        github: null,
    },
]

const Projects = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="projects" className="py-24 bg-dark relative overflow-hidden" ref={ref}>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-black mb-4 text-secondary">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const ProjectCard = ({ project, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card p-8 group relative overflow-hidden h-full flex flex-col"
        >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-bold text-secondary group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary/50 hover:text-accent text-2xl transition-colors">
                                <FaGithub />
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="text-secondary/50 hover:text-primary text-2xl transition-colors">
                                <FaExternalLinkAlt />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-secondary/70 mb-8 leading-relaxed text-lg">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {project.tech.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20 rounded-lg group-hover:border-primary/50 transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.inProgress ? (
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-bold border border-accent/30 animate-pulse">
                            Development in Progress
                        </div>
                    ) : (
                        <button className="text-sm font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors flex items-center gap-2">
                            View Details <span className="transform group-hover:translate-x-2 transition-transform">→</span>
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
