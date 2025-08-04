"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ImageSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-16 lg:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-12 lg:p-16"
                >
                    <div className="relative z-10 text-center space-y-8">
                        <motion.h2
                            className="text-3xl lg:text-5xl font-serif text-white leading-tight"
                            style={{ fontFamily: "Lora, serif" }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Idea to GitHub in One Click
                        </motion.h2>

                        <motion.p
                            className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Natural language to full production-ready code. Built-in CI/CD, GitHub integration, and cloud deployment.
                            Works with GPT-4, Claude, Grok, DeepSeek, and Dev0.
                        </motion.p>

                        {/* Visual Flow */}
                        <motion.div
                            className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">💡</div>
                                <div className="text-white font-medium">Your Idea</div>
                            </div>

                            <div className="text-white text-2xl">→</div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">🤖</div>
                                <div className="text-white font-medium">AI Processing</div>
                            </div>

                            <div className="text-white text-2xl">→</div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                                <div className="text-4xl mb-2">🚀</div>
                                <div className="text-white font-medium">Production App</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <defs>
                                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100" height="100" fill="url(#grid)" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
