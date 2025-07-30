"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

// Define pricing data for monthly and yearly cycles
const pricingData = {
    standard: {
        monthly: { price: 10, original: 12 },
        yearly: { price: 8, original: 10 },
    },
    premium: {
        monthly: { price: 20, original: 24 },
        yearly: { price: 16, original: 20 },
    },
}

export default function PricingSection() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly")

    // Function to get prices based on the selected billing cycle
    const getPlanPrices = (plan: "standard" | "premium") => {
        return billingCycle === "monthly" ? pricingData[plan].monthly : pricingData[plan].yearly
    }

    // Animation variants for cards appearing from left and right
    const cardVariantsLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    const cardVariantsRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none text-gray-900">
                        Balance Of Features & Affordability
                    </h2>
                    <div className="relative flex items-center rounded-full bg-gray-100 p-1 text-sm font-medium text-gray-600">
                        {/* The sliding indicator with gradient */}
                        <motion.div
                            className="absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 shadow-sm"
                            layoutId="billingCycleToggle"
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            initial={false}
                            animate={{
                                left: billingCycle === "monthly" ? "0%" : "50%",
                                width: "50%",
                            }}
                        />
                        <Button
                            variant="ghost"
                            onClick={() => setBillingCycle("monthly")}
                            className={`relative z-10 flex-1 rounded-full px-4 py-2 hover:bg-gradient-to-r from-purple-500 to-violet-600  ${billingCycle === "monthly" ? "text-white" : "text-gray-600"}`}
                        >
                            Monthly
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => setBillingCycle("yearly")}
                            className={`relative z-10 flex-1 rounded-full hover:bg-gradient-to-r from-purple-500 to-violet-600 ${billingCycle === "yearly" ? "text-white" : "text-gray-600"}`}
                        >
                            Yearly
                        </Button>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    {/* Standard Card with entry animation */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        // variants={cardVariantsLeft}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="relative flex flex-col justify-between h-full p-6 rounded-3xl shadow-2xl shadow-gray-700/40 border-none bg-gradient-to-br from-blue-500 via-gray-100 to-purple-600">
                            {/* Grainy overlay layer */}
                            <div
                                className="absolute inset-0 opacity-30 pointer-events-none rounded-3xl"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch' seed='7'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                    mixBlendMode: "color-burn",
                                    borderRadius: "inherit",
                                }}
                            />

                            {/* Finer secondary texture (adds subtle crispness) */}
                            <div
                                className="absolute inset-0 opacity-25 pointer-events-none rounded-3xl"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.5' numOctaves='6' stitchTiles='stitch' seed='11'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.85 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineNoise)'/%3E%3C/svg%3E")`,
                                    mixBlendMode: "overlay",
                                    borderRadius: "inherit",
                                }}
                            />

                            {/* Shimmer highlight with more intensity */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer pointer-events-none rounded-3xl" />

                            {/* Moving shimmer with richer angle and bounce */}
                            <div
                                className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
                                style={{
                                    background: "linear-gradient(120deg, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%)",
                                    animation: "shimmer 5s ease-in-out infinite alternate",
                                    borderRadius: "inherit",
                                }}
                            />
                            <CardHeader className="pb-4">
                                <CardTitle className="text-2xl font-bold text-gray-900">Standard</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Efficiently organize your transactions, accounts, reports, and books
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-4xl font-bold text-gray-900">
                                    ${getPlanPrices("standard").price}
                                    <span className="ml-2 text-xl font-normal text-gray-500 line-through">
                                        ${getPlanPrices("standard").original}
                                    </span>
                                </div>
                                <Button className="w-full mt-6 bg-gradient-to-t from-white to-white rounded-xl text-black shadow-2xl">Start for free</Button>
                                <div className="mt-8 space-y-3 text-gray-700">
                                    <h3 className="font-semibold text-gray-900">Everything in Standard +</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Progress invoicing
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Connect bank feeds
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Setup recurring expenses
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Early payment discount
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Create custom reports
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            and a lot more
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Premium Card with entry animation */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        // variants={cardVariantsRight}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="relative flex flex-col justify-between h-full p-6 rounded-3xl shadow-2xl shadow-gray-700/40 border-none bg-gradient-to-br from-purple-100 via-gray-100 to-blue-300">
                            <Badge className="absolute -top-3 right-6 px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-full shadow-md rotate-3">
                                MOST POPULAR
                            </Badge>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-2xl font-bold text-gray-900">Premium</CardTitle>
                                <CardDescription className="text-gray-600">
                                    Confidently take on projects, track your inventory, and handle purchases
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="text-4xl font-bold text-gray-900">
                                    ${getPlanPrices("premium").price}
                                    <span className="ml-2 text-xl font-normal text-gray-500 line-through">
                                        ${getPlanPrices("premium").original}
                                    </span>
                                </div>
                                <Button className="w-full mt-6 bg-gradient-to-t from-gray-300 to-purple-700 rounded-xl text-white shadow-2xl">Start for free</Button>
                                <div className="mt-8 space-y-3 text-gray-700">
                                    <h3 className="font-semibold text-gray-900">Everything in Professional +</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Manage vendor bills and payments
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Track sales and purchase orders
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Record multi-currency transactions
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Analyze project profitability
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            Customize business workflows
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 h-4 w-4 text-green-500" />
                                            and a lot more
                                        </li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
