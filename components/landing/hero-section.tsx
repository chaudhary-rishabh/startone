"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  Code,
  Database,
  Cpu,
  Zap,
  Bot,
  Terminal,
  Smartphone,
  Cloud,
  GitBranch,
  Layers,
  Send,
} from "lucide-react"
import { motion, Variants } from "framer-motion"
import { AvatarGroupDemo } from "../ui/avatar-group"

// Animation variants for main content
const contentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
}

// Animation variants for laptop
const laptopVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
}

export default function HeroSection() {
  return (
    <section className="relative bg-grid-lines sm:mt-20 min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden pt-24 md:pt-0">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left Icons */}
        <div className="absolute top-20 md:top-20 left-4 md:left-20 animate-float">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl shadow-2xl shadow-purple-500/60 flex items-center justify-center transform rotate-12 hover:shadow-purple-300/50 transition-shadow">
            <Brain className="h-6 w-6 md:h-8 md:w-8 text-white shadow-2xl shadow-purple-500" />
          </div>
        </div>

        <div className="absolute top-32 md:top-56 left-60 md:left-80 animate-float-delayed">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-2xl shadow-green-500/90 flex items-center justify-center transform -rotate-6 hover:shadow-green-300/50 transition-shadow">
            <Code className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        {/* Top Right Icons */}
        <div className="absolute top-20 md:top-20 right-4 md:right-20 animate-float">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-2xl shadow-orange-600/90 flex items-center justify-center transform -rotate-12 hover:shadow-orange-300/50 transition-shadow">
            <Database className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        <div className="absolute top-40 md:top-40 right-32 md:right-40 animate-float-delayed">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-2xl shadow-blue-500/90 flex items-center justify-center transform rotate-6 hover:shadow-blue-300/50 transition-shadow">
            <Cpu className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        {/* Left Side Icons */}
        <div className="absolute left-8 md:left-32 top-1/2 animate-float">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-2xl shadow-yellow-700 flex items-center justify-center transform rotate-12 hover:shadow-yellow-300/50 transition-shadow">
            <Zap className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        <div className="absolute left-4 md:left-20 bottom-40 animate-float-delayed">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-2xl shadow-indigo-700/90 flex items-center justify-center transform -rotate-6 hover:shadow-indigo-300/50 transition-shadow">
            <Bot className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="absolute right-8 md:right-32 top-1/2 animate-float">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-2xl shadow-pink-500/80 flex items-center justify-center transform -rotate-12 hover:shadow-pink-300/50 transition-shadow">
            <Terminal className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        <div className="absolute right-4 md:right-20 bottom-40 animate-float-delayed">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-teal-500 to-green-600 rounded-xl shadow-2xl shadow-green-500 flex items-center justify-center transform rotate-6 hover:shadow-teal-300/50 transition-shadow">
            <Smartphone className="h-6 w-6 md:h-8 md:w-8 text-white" />
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="absolute bottom-20 left-1/4 animate-float">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-2xl shadow-purple-700 flex items-center justify-center transform rotate-12 hover:shadow-gray-300/50 transition-shadow">
            <Cloud className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
        </div>

        <div className="absolute bottom-32 right-1/4 animate-float-delayed">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg shadow-2xl shadow-orange-700 flex items-center justify-center transform -rotate-6 hover:shadow-violet-300/50 transition-shadow">
            <GitBranch className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg shadow-2xl shadow-purple-700 flex items-center justify-center transform rotate-3 hover:shadow-emerald-300/50 transition-shadow">
            <Layers className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <motion.div
        className="text-center sm:mt-8 max-w-4xl mx-auto relative z-10 flex-1 flex flex-col justify-center"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
      >
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center px-3 md:px-4 py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Live on StartOne
          </div>
        </div>

        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          style={{ fontFamily: "Domine, serif" }}
        >
          Idea to Product Click away
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12">signup today and get list of million $ ideas</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <AvatarGroupDemo />
          <Button
            variant="outline"
            className="px-6 md:px-8 py-3 bg-gradient-to-br from-indigo-500 via-white hover:via-gray-100 to-purple-600 hover:to-purple-500 hover:shadow-xl hover:shadow-gray-500/20 transition duration-500 md:py-4 rounded-xl text-base md:text-lg border-gray-300 hover:bg-gray-50 w-full sm:w-auto z-50"
          >
            Join Waiting List
          </Button>
        </div>
      </motion.div>

      {/* Glowing Laptop at Bottom */}
      <motion.div
        className="relative z-10 mb-8 md:mb-16 md:mt-10"
        initial="hidden"
        animate="visible"
        variants={laptopVariants}
      >
        <div className="relative">
          {/* Laptop Base */}
          <div className="relative mx-auto w-80 md:w-96 rounded-3xl lg:w-[800px]">
            {/* Laptop Screen */}
            <div className="bg-gray-900 rounded-t-3xl p-2 animate-glow-laptop">
              <div className="bg-gray-100 rounded-3xl aspect-[16/10] overflow-hidden relative">
                {/* Chat Interface */}
                <div className="h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">AI Assistant</div>
                        <div className="text-xs text-green-500 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                          Online
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="flex-1 p-4 space-y-4 bg-gray-50">
                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs text-sm">
                        I have an idea for a mobile app
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md max-w-xs text-sm shadow-sm">
                        That's exciting! Tell me more about your app idea. What problem does it solve?
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-br-md max-w-xs text-sm">
                        It's a productivity app for remote teams
                      </div>
                    </div>

                    {/* AI Response with typing indicator */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-3 w-3 text-white" />
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-bl-md shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="bg-white border-t border-gray-200 p-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">
                        Type your message...
                      </div>
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Send className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop Base */}
            <div className="bg-gray-800 h-4 rounded-b-2xl shadow-lg relative">
              <div className="absolute inset-x-0 top-1 h-1 bg-gray-700 rounded-full mx-auto w-16"></div>
            </div>

            {/* Laptop Stand */}
            <div className="bg-gray-700 h-2 w-24 mx-auto rounded-b-lg shadow-md"></div>
          </div>

          {/* Glowing Effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl blur-xl animate-pulse-glow"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}