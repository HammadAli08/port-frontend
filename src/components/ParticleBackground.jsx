import { useEffect, useState } from 'react'

const ParticleBackground = () => {
    const [particles, setParticles] = useState([])

    useEffect(() => {
        const particleArray = Array.from({ length: 40 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 20,
            size: Math.random() * 4 + 2,
            opacity: Math.random() * 0.5 + 0.1,
        }))
        setParticles(particleArray)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="absolute rounded-full bg-primary animate-float-particle"
                    style={{
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animationDelay: `${p.delay}s`,
                        filter: 'blur(1px)'
                    }}
                />
            ))}
        </div>
    )
}

export default ParticleBackground
