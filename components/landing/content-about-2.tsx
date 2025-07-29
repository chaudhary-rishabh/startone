import { BarChart3, Users, Target, TrendingUp } from "lucide-react"

export default function ContentAbout2() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Analytics dashboard"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Data-driven results you can trust</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get detailed insights into your campaign performance with our comprehensive analytics suite. Make informed
              decisions with real-time data.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">One click doc</div>
                <div className="text-sm text-gray-600">Document Management with diagrams</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">90%</div>
                <div className="text-sm text-gray-600">Working Project</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100 Credit</div>
                <div className="text-sm text-gray-600">100 Credit on Signup</div>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">100X</div>
                <div className="text-sm text-gray-600">Optimize your development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
