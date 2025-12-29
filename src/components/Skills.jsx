import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPython, FaBrain, FaDatabase, FaRobot, FaChartLine, FaCode, FaServer, FaCogs } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiScikitlearn, SiPandas, SiNumpy, SiFastapi, SiDocker, SiLangchain } from 'react-icons/si'

const skillGroups = [
    {
        title: 'Core Expertise',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'Data Science', icon: FaChartLine },
            { name: 'RAG Systems', icon: FaRobot },
            { name: 'Prompt Engineering', icon: FaBrain },
        ]
    },
    {
        title: 'AI & Machine Learning',
        skills: [
            { name: 'TensorFlow', icon: SiTensorflow },
            { name: 'PyTorch', icon: SiPytorch },
            { name: 'Deep Learning', icon: FaBrain },
            { name: 'NLP', icon: FaCode },
        ]
    },
    {
        title: 'Developer Stack',
        skills: [
            { name: 'FastAPI', icon: SiFastapi },
            { name: 'LangChain', icon: SiLangchain },
            { name: 'Docker', icon: SiDocker },
            { name: 'Vector DBs', icon: FaDatabase },
        ]
    }
]

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="skills" className="py-24 bg-rich-black" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
                        Technical <span className="text-primary italic">Matrix</span>
                    </h2>
                    <p className="text-secondary/50 max-w-2xl mx-auto">
                        My toolkit for building intelligent systems and AI-powered solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {skillGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: groupIdx * 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-accent uppercase tracking-widest border-l-4 border-primary pl-4">
                                {group.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {group.skills.map((skill, skillIdx) => (
                                    <SkillCard
                                        key={skillIdx}
                                        skill={skill}
                                        groupIdx={groupIdx}
                                        skillIdx={skillIdx}
                                        inView={inView}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const SkillCard = ({ skill, groupIdx, skillIdx, inView }) => {
    const Icon = skill.icon

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: groupIdx * 0.15 + skillIdx * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 10px 30px -10px rgba(44, 102, 110, 0.4)'
            }}
            className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden"
        >
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating particles effect */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-primary/50 rounded-full group-hover:animate-ping" />
            <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-accent/50 rounded-full group-hover:animate-pulse" />

            <div className="relative flex flex-col items-center gap-3 text-center">
                <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl text-primary group-hover:text-accent transition-colors duration-300"
                >
                    <Icon />
                </motion.div>
                <span className="text-secondary/80 font-medium text-sm group-hover:text-secondary transition-colors duration-300">
                    {skill.name}
                </span>
            </div>

            {/* Bottom highlight line */}
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    )
}

export default Skills
