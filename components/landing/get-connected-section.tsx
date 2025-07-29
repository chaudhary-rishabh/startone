import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function GetConnectedSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Section - Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
              Get connected
              <br />
              in 72 seconds
            </h2>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <span className="text-gray-700 font-medium text-lg">Sign up</span>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex items-center space-x-4">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <span className="text-gray-700 font-medium text-lg">Install eSIM</span>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 relative">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <span className="text-gray-700 font-medium text-lg">You're online!</span>
                </div>
                <div className="absolute -bottom-2 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                  <span>Yes, we timed it</span>
                  <Check className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>

          {/* Center Section - Phone Mockup */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-64 md:w-80 h-[500px] md:h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone UI Content */}
                  <div className="p-6 space-y-4">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-3 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-3 bg-gray-900 rounded-full"></div>
                          <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                          <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
                        </div>
                        <span className="text-xs">5G</span>
                        <div className="w-6 h-3 bg-green-500 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex justify-between items-center py-4">
                      <h3 className="text-2xl font-bold">Home</h3>
                      <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">+</span>
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="text-sm text-gray-600 mb-4">
                      <div className="font-semibold text-gray-900">Emil Costa</div>
                      <div>(646) 777-2000</div>
                    </div>

                    {/* Popcorn Card */}
                    <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl p-4 text-white mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm opacity-90">Popcorn</div>
                          <div className="w-12 h-8 bg-white/20 rounded mt-2"></div>
                        </div>
                        <div className="w-16 h-10 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    {/* Coverage Section */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Coverage</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      </div>

                      <div className="bg-green-100 rounded-xl p-4 relative">
                        <div className="text-sm font-medium mb-2">Brazil 🇧🇷</div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full absolute top-6 left-8"></div>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span>Data</span>
                            <span className="text-green-600">Unlimited</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span>Calls</span>
                            <span className="text-green-600">Unlimited</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                            <span>SMS</span>
                            <span className="text-green-600">Unlimited</span>
                          </div>
                        </div>
                      </div>

                      {/* Data Usage */}
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm">
                          <div className="w-4 h-4 bg-gray-400 rounded"></div>
                          <span>Monthly Data</span>
                        </div>
                        <div className="text-2xl font-bold">
                          5.2<span className="text-sm font-normal text-gray-500">GB</span>
                        </div>
                        <div className="text-xs text-gray-500">Below monthly average</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Pricing */}
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              One plan,
              <br />
              one price.
            </h2>

            <div className="mb-8">
              <div className="text-5xl md:text-6xl font-bold mb-2">$69</div>
              <div className="text-gray-400 text-lg">Per Month</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your e-mail"
                className="bg-white text-gray-900 border-0 rounded-full px-6 py-3 flex-1"
              />
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold whitespace-nowrap">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
