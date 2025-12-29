import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane, FaEraser, FaCircle, FaExpand, FaCompress } from 'react-icons/fa'
import { processRAG, getChatWS } from '../../services/aiService'
import ReactMarkdown from 'react-markdown'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hello! I'm Hammad's RAG Agent. I have access to all his project data and experience. How can I help you today?" }
    ])
    const [input, setInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [connectionStatus, setConnectionStatus] = useState('offline')
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    const handleSend = async (e) => {
        e.preventDefault()
        if (!input.trim()) return

        const userMsg = input
        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setIsTyping(true)

        // Add a placeholder message for the AI response
        setMessages(prev => [...prev, { role: 'ai', content: '', sources: [] }])

        try {
            let streamAnswer = ""
            await processRAG(userMsg, (chunk) => {
                setIsTyping(false) // Hide typing animation once we start receiving chunks
                streamAnswer += chunk
                setMessages(prev => {
                    const newMessages = [...prev]
                    newMessages[newMessages.length - 1] = {
                        ...newMessages[newMessages.length - 1],
                        content: streamAnswer
                    }
                    return newMessages
                })
            })
        } catch (error) {
            setMessages(prev => {
                const newMessages = [...prev]
                newMessages[newMessages.length - 1] = {
                    role: 'ai',
                    content: "Connection error. Is the backend server running?"
                }
                return newMessages
            })
        } finally {
            setIsTyping(false)
        }
    }

    const clearChat = () => {
        setMessages([{ role: 'ai', content: "Memory cleared. How can I help you now?" }])
    }

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500 ${isOpen ? 'bg-accent' : 'bg-primary'}`}
            >
                {isOpen ? <FaTimes className="text-2xl text-secondary" /> : <FaRobot className="text-3xl text-secondary" />}
            </motion.button>

            {/* Chat Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0, x: 100, y: 100, rotate: -20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0, rotate: 0, filter: 'blur(0)' }}
                        exit={{ opacity: 0, scale: 0, x: 100, y: 100, rotate: 20, filter: 'blur(10px)' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`absolute bottom-20 right-0 glass-card flex flex-col overflow-hidden shadow-2xl rounded-3xl transition-all duration-300 ${isExpanded
                            ? 'w-[600px] h-[800px] max-h-[85vh]'
                            : 'w-[400px] h-[600px] max-h-[75vh]'
                            }`}
                    >
                        {/* Header */}
                        <div className="p-6 bg-primary/20 border-b border-primary/20 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                                    <FaRobot className="text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-secondary text-sm tracking-widest uppercase">Portfolio Intelligence</h3>
                                    <div className="flex items-center gap-2">
                                        <FaCircle className="text-[6px] text-success-emerald animate-pulse" />
                                        <span className="text-[10px] text-secondary/50 uppercase tracking-tighter">RAG Agent v1.2 Enabled</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-secondary/30 hover:text-primary transition-colors"
                                    title={isExpanded ? "Shrink" : "Expand"}
                                >
                                    {isExpanded ? <FaCompress /> : <FaExpand />}
                                </button>
                                <button onClick={clearChat} className="text-secondary/30 hover:text-accent transition-colors" title="Clear chat">
                                    <FaEraser />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-4 ${msg.role === 'user' ? 'message-user' : 'message-ai shadow-lg shadow-primary/10'}`}>
                                        {msg.role === 'ai' ? (
                                            <div className="text-sm leading-relaxed prose prose-invert prose-sm max-w-none prose-p:my-2 prose-headings:my-2 prose-ul:my-2 prose-li:my-0.5">
                                                <ReactMarkdown>{msg.content}</ReactMarkdown>
                                            </div>
                                        ) : (
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                        )}

                                        {msg.sources && msg.sources.length > 0 && (
                                            <div className="mt-3 pt-3 border-t border-white/10">
                                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Sources:</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {msg.sources.map((s, idx) => (
                                                        <span key={idx} className="text-[9px] bg-white/10 px-2 py-0.5 rounded italic">
                                                            {s.replace('.json', '')}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="message-ai p-4 flex gap-2 items-center">
                                        <span className="thinking-dot"></span>
                                        <span className="thinking-dot"></span>
                                        <span className="thinking-dot"></span>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-6 bg-rich-black/50 border-t border-primary/20 flex gap-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about Hammad's projects..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-secondary focus:outline-none focus:border-primary transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-secondary hover:bg-accent transition-colors disabled:opacity-50"
                            >
                                <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Chatbot
