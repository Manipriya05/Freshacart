function Home({ setPage }) {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="min-h-[80vh] bg-green-50 flex items-center justify-center px-4 sm:px-6">
        <div className="text-center w-full max-w-3xl">
          <p className="text-green-600 font-semibold text-base sm:text-lg mb-3">
            🌿 Fresh & Healthy
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5 sm:mb-6 leading-tight">
            Fresh Fruits & Vegetables
            <span className="text-green-600"> Delivered</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-7 sm:mb-8 px-2">
            Get fresh and healthy fruits and vegetables delivered
            straight to your doorstep.
          </p>
          <button onClick={() => setPage("products")}className="bg-green-600 text-white px-7 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
            Shop Now 🛒
          </button>
        </div>
      </section>
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-8 sm:mb-10">Shop by Category
        </h2>
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          <div className="bg-green-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl sm:text-6xl mb-4">🥕 </div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2">Fresh Vegetables</h3>
            <p className="text-gray-600 mb-5 text-sm sm:text-base">Fresh and healthy vegetables for your daily needs.</p>
            <button
              onClick={() => setPage("vegetables")}
              className="bg-green-600 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-green-700"
            > Shop Vegetables</button>
          </div>
          <div className="bg-orange-100 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition">
            <div className="text-5xl sm:text-6xl mb-4"> 🍎
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-orange-600 mb-2">Fresh Fruits
            </h3>
            <p className="text-gray-600 mb-5 text-sm sm:text-base">Tasty and fresh fruits delivered to your doorstep.
            </p>
            <button onClick={() => setPage("fruits")}className="bg-orange-500 text-white px-5 sm:px-6 py-2 rounded-lg hover:bg-orange-600">Shop Fruits
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home