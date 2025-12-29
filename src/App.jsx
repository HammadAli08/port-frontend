import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'
import Chatbot from './components/Chatbot/Chatbot'

function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading animation
        setTimeout(() => setLoading(false), 1500)
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-bg-primary">
                <div className="text-center">
                    <div className="w-20 h-20 border-4 border-accent-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-accent-gold text-xl font-semibold">Loading Portfolio...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="relative">
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
            <Chatbot />
        </div>
    )
}

export default App
