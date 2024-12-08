import Image from "next/image";
import cheakout from "@/../../public/cheakout.png"

export default function CheakoutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Left Colum -Forms */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-xl font-semibold mb-4"> Shipping Address</h2>
                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                            </div>
                            <div className="grid  grid-cols-1 gap-4 s,:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone number
                                    </label>
                                    <input
                                        type="teL"
                                        id="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>

                            </div>
                            <div className="grid  grid-cols-1 gap-4 s,:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                                <div>
                                    <label
                                        htmlFor="country"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        Country
                                    </label>
                                    <select
                                        id="phone"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                                        <option
                                            value="">Choose country</option>
                                        <option
                                            value="us">United States</option>
                                        <option
                                            value="uk">United Kingdom</option>
                                        <option
                                            value="ca">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="city"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="Choose city"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="zipCode"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                       Zip Code
                                    </label>
                                    <input
                                        type="text"
                                        id="zip code"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                            </div>
                            <div>
                                    <label
                                        htmlFor="address 1"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        
                                        Address 1
                                    </label>
                                    <input
                                        type="text"
                                        id="address 1"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                                <div>
                                    <label
                                        htmlFor="address 2"
                                        className="block text-sm font-medium text-gray-700 mb-1">
                                        
                                        Address 2
                                    </label>
                                    <input
                                        type="text"
                                        id="address 2"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
                                </div>
                          </div>
                    </div>

                    <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
                    <div className="flex items-center space-x-2">
                        <input 
                        type="checkbox" 
                        id="same AsShipping"
                        className="h-4 w-4 rounded border-gray-300 text-orange-500"/>

                        <label 
                        htmlFor="sameAsShupping" 
                        className="text-sm text-gray-700">
                            Same as shipping address
                            </label>
                        </div>  
                    </div>

                    <div className="flex justify-between pt-4">
                    <button className="py-2 border border-gray-300 rounded-md shadow-sm text-sm font medium text-gray-700
                     hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 w-full md:w-1/2 lg:w-72">
                       Back to cart
                    </button>
                    <button className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sfont-">

                    </button>

                    </div>
                </div>

            </div>

    
    )
}