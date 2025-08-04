"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Code, Rocket, TrendingUp } from "lucide-react"

const tabs = [
    {
        id: "plan",
        label: "Plan",
        icon: Zap,
        content:
            "Transform your ideas into comprehensive project blueprints with AI-powered planning. StartOne analyzes your requirements and generates detailed specifications, user stories, and technical architecture in seconds.",
    },
    {
        id: "build",
        label: "Build",
        icon: Code,
        content:
            "Watch your vision come to life as StartOne generates production-ready code across the full stack. From database schemas to frontend components, every line is crafted with best practices and modern frameworks.",
    },
    {
        id: "deploy",
        label: "Deploy",
        icon: Rocket,
        content:
            "Launch your application with enterprise-grade CI/CD pipelines automatically configured. StartOne handles containerization, cloud deployment, and monitoring setup so you can focus on growing your product.",
    },
    {
        id: "scale",
        label: "Scale",
        icon: TrendingUp,
        content:
            "Grow your application seamlessly with intelligent infrastructure scaling. StartOne automatically configures autoscaling, improves CI/CD pipelines, and implements advanced deployment strategies like blue-green and rolling deployments for zero-downtime updates.",
    },
]

export default function HeroSection() {
    const [activeTab, setActiveTab] = useState("plan")

    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
                    {/* Left Content - 60% */}
                    <motion.div
                        className="lg:col-span-3 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6">
                            <motion.h1
                                className="text-4xl lg:text-6xl font-serif leading-tight text-gray-900"
                                style={{ fontFamily: "Lora, serif" }}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                From Idea → To Production-Ready, <span className="text-blue-600">AI-Integrated</span> Software Product
                                in One Click
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 font-sans leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Prompt your app into reality — full-stack, CI/CD-ready, from just your idea.
                            </motion.p>
                        </div>

                        {/* Tab Buttons */}
                        <motion.div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {tabs.map((tab) => {
                                const Icon = tab.icon
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-3 px-6 py-3 rounded-3xl font-sans font-medium transition-all duration-300 ${activeTab === tab.id
                                                ? "bg-blue-600 text-white shadow-lg transform scale-105"
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                                            }`}
                                    >
                                        <Icon size={20} />
                                        {tab.label}
                                    </button>
                                )
                            })}
                        </motion.div>

                        {/* Tab Content */}
                        <div className="min-h-[120px]">
                            <AnimatePresence mode="wait">
                                {tabs.map(
                                    (tab) =>
                                        activeTab === tab.id && (
                                            <motion.div
                                                key={tab.id}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                transition={{ duration: 0.5 }}
                                                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                                            >
                                                <p
                                                    className="text-lg text-gray-700 leading-relaxed font-serif"
                                                    style={{ fontFamily: "Lora, serif" }}
                                                >
                                                    {tab.content}
                                                </p>
                                            </motion.div>
                                        ),
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Right Visual - 40% */}
                    <motion.div
                        className="lg:col-span-2 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative w-full max-w-md">
                            <motion.div
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <svg viewBox="0 0 400 300" className="w-full h-auto">
                                    <defs>
                                        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#3B82F6" />
                                            <stop offset="100%" stopColor="#8B5CF6" />
                                        </linearGradient>
                                    </defs>

                                    {/* AI Brain */}
                                    <circle cx="200" cy="80" r="40" fill="url(#gradient1)" opacity="0.8" />
                                    <circle cx="200" cy="80" r="25" fill="white" />
                                    <text x="200" y="85" textAnchor="middle" className="text-sm font-bold fill-blue-600">
                                        AI
                                    </text>

                                    {/* Flow Lines */}
                                    <path d="M200 120 L200 160" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="5,5">
                                        <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite" />
                                    </path>

                                    {/* Code Blocks */}
                                    <rect
                                        x="120"
                                        y="160"
                                        width="60"
                                        height="40"
                                        rx="8"
                                        fill="#F3F4F6"
                                        stroke="url(#gradient1)"
                                        strokeWidth="2"
                                    />
                                    <text x="150" y="182" textAnchor="middle" className="text-xs fill-gray-600">
                                        Frontend
                                    </text>

                                    <rect
                                        x="220"
                                        y="160"
                                        width="60"
                                        height="40"
                                        rx="8"
                                        fill="#F3F4F6"
                                        stroke="url(#gradient1)"
                                        strokeWidth="2"
                                    />
                                    <text x="250" y="182" textAnchor="middle" className="text-xs fill-gray-600">
                                        Backend
                                    </text>

                                    {/* Deploy Cloud */}
                                    <ellipse cx="200" cy="240" rx="80" ry="25" fill="url(#gradient1)" opacity="0.6" />
                                    <text x="200" y="245" textAnchor="middle" className="text-sm font-semibold fill-white">
                                        Production
                                    </text>
                                </svg>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
