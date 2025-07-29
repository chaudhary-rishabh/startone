import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendingUp, Users } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to transform your marketing?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of brands already using StartOne to reach their target audience with authentic creator
            partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Management Integrated</h3>
            <p className="text-gray-600">
              Integrated Project management tools and Premium CRM free to use.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">CRM</h3>
            <p className="text-gray-600">Comes with free CRM that has AI integrated</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wallet management</h3>
            <p className="text-gray-600">Make money in few clicks just by building products</p>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg flex items-center space-x-2 mx-auto">
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
