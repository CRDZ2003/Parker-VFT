"use client"

import { useState } from "react"

export function CalculatorSection() {
    const [packages, setPackages] = useState([{ weight: "" }])
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [shipDate, setShipDate] = useState("")
    const [result, setResult] = useState<number | null>(null)

    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(today.getDate() + 1)

    const todayStr = today.toISOString().split("T")[0]
    const tomorrowStr = tomorrow.toISOString().split("T")[0]

    const handlePackageChange = (index: number, value: string) => {
        const updated = [...packages]
        updated[index].weight = value
        setPackages(updated)
    }

    const addPackage = () => {
        setPackages([...packages, { weight: "" }])
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let totalWeight = packages.reduce((sum, p) => sum + Number(p.weight || 0), 0)

        // Pricing rule: Start price 80 + 8 per kg
        let baseCost = 80 + (totalWeight * 8)

        setResult(baseCost)
    }

    return (
        <section id="calculator" className="mx-auto px-4">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Freight Calculator</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="space-y-6 text-black bg-white p-6 rounded-xl shadow-lg">

                        {/* From / To */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                required
                                placeholder="From (City)"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                className="w-full rounded-md border px-3 py-2"
                            />
                            <input
                                type="text"
                                required
                                placeholder="To (City)"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className="w-full rounded-md border px-3 py-2"
                            />
                        </div>

                        {/* Packages */}
                        <div>
                            <h2 className="font-semibold mb-2">Packages</h2>
                            {packages.map((p, i) => (
                                <div key={i} className="flex gap-4 mb-2">
                                    <input
                                        type="number"
                                        required
                                        placeholder="Weight (kg)"
                                        value={p.weight}
                                        onChange={(e) => handlePackageChange(i, e.target.value)}
                                        className="w-full rounded-md border px-3 py-2"
                                    />
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addPackage}
                                className="text-purple-900 font-medium hover:underline"
                            >
                                + Add Another Package
                            </button>
                        </div>

                        {/* Ship Date */}
                        <div>
                            <h2 className="font-semibold mb-2">Ship Date</h2>
                            <input
                                type="date"
                                required
                                value={shipDate}
                                onChange={(e) => setShipDate(e.target.value)}
                                className="w-full rounded-md border px-3 py-2"
                                min={new Date().toISOString().split("T")[0]} // disable past dates
                            />
                        </div>

                        {/* Submit */}
                        <div>
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-purple-900 hover:bg-purple-950 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                            >
                                Calculate
                            </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-500 mb-0">*Rates shown here may be different than the actual charges for your shipment.</p>
                        <p className="text-sm text-gray-500">*The transit times and rates shown here may be different than the actual charges for your shipment. Differences may occur based on actual weight, dimensions, currency conversion rate, date, commodity type and other factors.
                        </p>
                    </form>

                    {/* Result */}
                    {result !== null && (
                        <div className="mt-6 text-center text-white">
                            <h2 className="text-2xl font-bold">Estimated Base Cost: AED {result.toFixed(2)}</h2>
                        </div>
                    )}
                </div>

                <div>
                    <img src="/home/calc.jpg" alt="Calculator" className="mx-auto rounded-3xl" />
                </div>
            </div>
        </section>
    )
}
