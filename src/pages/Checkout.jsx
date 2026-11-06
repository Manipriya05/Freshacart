import { useState } from "react"

function Checkout({ cart }) {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
  }
  return (
    <section className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-8">
          Checkout 🛒
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2"> Address</label>
            <textarea
              placeholder="Enter your address"
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Place Order 🛒
          </button>
        </form>
        {orderPlaced && (
          <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-lg text-center font-semibold">
            ✅ Order placed successfully!
          </div>
        )}
      </div>
    </section>
  )
}

export default Checkout