import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa'

const Education = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="education" className="py-24" ref={ref}>
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        className="space-y-10"
                    >
                        <h3 className="text-2xl font-bold text-secondary flex items-center gap-4">
                            <FaGraduationCap className="text-primary text-3xl" /> Academic Journey
                        </h3>
                        <div className="space-y-6">
                            {[
                                { degree: 'BS Computer Science', school: 'University of Education', year: '2022-2026' },
                                { degree: 'Intermediate (ICS)', school: 'GHSS Farooqabad', year: '2020-2022' }
                            ].map((edu, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
                                    <h4 className="font-bold text-secondary">{edu.degree}</h4>
                                    <p className="text-sm text-secondary/50">{edu.school}</p>
                                    <p className="text-xs text-primary font-bold mt-2">{edu.year}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="space-y-10 lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-secondary flex items-center gap-4">
                            <FaCertificate className="text-accent text-3xl" /> Industry Credentials
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'IBM Data Science Professional',
                                'NVIDIA: Fundamentals of Deep Learning',
                                'Supervised ML: Regression & Classification',
                                'Natural Language Processing Specialization',
                                'Data Analysis with Python (NumPy/Pandas)',
                                'Deep Learning Specialization (Coursera)'
                            ].map((cert, i) => (
                                <div key={i} className="px-6 py-4 rounded-xl glass-card flex items-center gap-4 group">
                                    <span className="text-primary group-hover:text-accent transition-colors">✓</span>
                                    <span className="text-secondary/70 text-sm group-hover:text-secondary transition-colors">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Achievements Segment */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mt-24 p-12 rounded-[2rem] bg-gradient-to-br from-primary/10 to-accent/10 border border-white/5 text-center"
                >
                    <FaTrophy className="text-5xl text-accent mx-auto mb-8" />
                    <h3 className="text-3xl font-black text-secondary mb-12">Distinctions & <span className="text-primary italic">Honors</span></h3>
                    <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        <div className="space-y-2">
                            <p className="text-xl font-bold text-secondary">Finalist, Uraan AI Techathone</p>
                            <p className="text-secondary/50">Top 30% performer out of 500+ participants nationwide.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-xl font-bold text-secondary">Best Solution, IBM Hackathon</p>
                            <p className="text-secondary/50">Award for most innovative use of Watsonx AI tools.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Education
