'use client'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Ticket, LayoutDashboard } from "lucide-react"

export default function GetConnectedSection() {
  const [activeSection, setActiveSection] = useState("dashboard")

  const renderPhoneContent = () => {
    switch (activeSection) {
      case "dashboard":
        return (
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

            {/* Dashboard Header */}
            <div className="flex justify-between items-center py-4">
              <h3 className="text-2xl font-bold">Dashboard</h3>
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-400 to-indigo-400 rounded-2xl p-4 text-white">
                <div className="text-sm font-medium">Active Projects</div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs opacity-80">3 In Progress, 9 Completed</div>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-teal-400 rounded-2xl p-4 text-white">
                <div className="text-sm font-medium">Pending Tickets</div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs opacity-80">2 High Priority</div>
              </div>
            </div>
          </div>
        )

      case "userManagement":
        return (
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

            {/* User Management Header */}
            <div className="flex justify-between items-center py-4">
              <h3 className="text-2xl font-bold">User Management</h3>
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
            </div>

            {/* User Management Table */}
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-gray-600 bg-gray-100 p-2 rounded-t-xl">
                <span>Name</span>
                <span>Role</span>
                <span>Status</span>
              </div>
              {[
                { name: "Emil Costa", role: "Admin", status: "Active" },
                { name: "Jane Doe", role: "User", status: "Active" },
                { name: "John Smith", role: "User", status: "Inactive" },
              ].map((user, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-2 text-sm p-2 bg-white rounded-md shadow-sm"
                >
                  <span>{user.name}</span>
                  <span>{user.role}</span>
                  <span
                    className={`${user.status === "Active" ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )

      case "assignTicket":
        return (
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

            {/* Ticket System Header */}
            <div className="flex justify-between items-center py-4">
              <h3 className="text-2xl font-bold">Assign Ticket</h3>
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">+</span>
              </div>
            </div>

            {/* Ticket Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Ticket #1234</span>
                <span className="text-xs text-red-600 font-semibold">High Priority</span>
              </div>
              <div className="text-sm text-gray-600">Website Bug - Login Issue</div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Assigned to:</span>
                <span className="text-xs text-gray-600">Emil Costa</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-medium">Status:</span>
                <span className="text-xs text-yellow-600">In Progress</span>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Reassign</Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Section - Navigation Steps */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12">
              Manage Project
              <br />
              From Mobile
            </h2>

            <div className="space-y-4">
              {[
                { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
                { id: "userManagement", label: "User Management", icon: Users },
                { id: "assignTicket", label: "Assign Ticket", icon: Ticket },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 flex items-center space-x-4 transition-all duration-200 ${activeSection === item.id ? "ring-2 ring-blue-400" : ""
                    }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-900 text-white"
                      }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium text-base md:text-lg">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Section - Phone Mockup */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative">
              <div className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[480px] sm:h-[560px] md:h-[640px] lg:h-[720px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                  {renderPhoneContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}