import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="py-12 border-t border-primary/10 bg-rich-black">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-10 mb-8">
                    {[
                        { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/hammad-ali08" },
                        { icon: <FaGithub />, href: "https://github.com/HammadAli08" },
                        { icon: <FaEnvelope />, href: "mailto:hammadalitahir8@gmail.com" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-secondary/40 hover:text-primary transition-all text-2xl hover:scale-125"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <p className="text-secondary/30 text-xs font-mono tracking-widest uppercase">
                    Designed & Crafted by Hammad Ali Tahir
                </p>
                <div className="mt-4 flex justify-center items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-[10px] text-secondary/20 uppercase tracking-tighter">Hand-coded in React & FastAPI</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
