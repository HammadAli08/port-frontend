import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars as Bars, FaTimes as Times } from 'react-icons/fa'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                ? 'bg-rich-black/80 backdrop-blur-xl py-3 border-b border-primary/20 shadow-lg shadow-primary/5'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2 group cursor-pointer"
                    >
                        <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg group-hover:bg-accent transition-colors duration-300">
                            <span className="text-secondary">H</span>
                        </div>
                        <span className="text-secondary group-hover:text-primary transition-colors">Hammad <span className="text-primary group-hover:text-accent">Ali</span></span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="nav-link text-secondary/80 hover:text-secondary transition-colors duration-300 font-semibold text-sm tracking-widest uppercase"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-2xl text-secondary p-2 hover:bg-primary/20 rounded-lg transition-colors"
                    >
                        {mobileMenuOpen ? <Times /> : <Bars />}
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden mt-4 bg-rich-black/95 rounded-2xl overflow-hidden border border-primary/20 p-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block px-6 py-4 text-secondary/80 hover:text-secondary hover:bg-primary/10 rounded-xl transition-all duration-300 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
