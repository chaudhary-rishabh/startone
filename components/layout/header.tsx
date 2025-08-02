"use client"

import { useState } from "react"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full p-3 md:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="bg-white/60 backdrop-blur-md border border-gray-200/50 rounded-[20px] shadow-lg shadow-gray-200/20 px-4 md:px-8 py-3 md:py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo startone.png" alt="startone logo" height={20} width={20} className="w-8 h-10" />
              <Link href="/" className="text-xl md:text-2xl font-bold text-gray-900">StartOne</Link>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
              <nav className="hidden lg:flex items-center space-x-6">
                <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <nav className="hidden lg:flex items-center space-x-6">
                  <div className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors">
                    <span>Tools</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </nav>
              </nav>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-2 md:px-6 py-1 rounded-lg flex items-center space-x-2 text-sm md:text-base">
                <span>Login</span>
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-[20px] shadow-lg shadow-gray-200/20 p-6 animate-in slide-in-from-top-2">
              <nav className="space-y-4">
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 hover:shadow-sm hover:shadow-blue-200/20"
                >
                  About
                </Link>
                <Link href="/pricing"
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 hover:shadow-sm hover:shadow-blue-200/20"
                >
                  Pricing
                </Link>
                <div className="flex items-center justify-between text-gray-700 hover:text-gray-900 cursor-pointer transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 hover:shadow-sm hover:shadow-blue-200/20">
                  <span>Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
