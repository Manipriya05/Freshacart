import { useState } from "react"
import ProductCard from "../Components/ProductCard"
import products from "../data/products"
function Products({ addToCart, selectedCategory = "All" }) {
  const [category, setCategory] = useState(selectedCategory)
  const [search, setSearch] = useState("")
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" || product.category === category
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase())

    return matchesCategory && matchesSearch
  })
  return (
    <section className="min-h-screen bg-green-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-8">
        {category === "Fruits"
          ? "Fresh Fruits 🍎"
          : category === "Vegetables"
          ? "Fresh Vegetables 🥕"
          : "Our Products 🛒"}
      </h1>
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search fruits or vegetables..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button onClick={() => setCategory("All")}className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">All</button>
        <button onClick={() => setCategory("Fruits")}className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600">🍎 Fruits</button>
        <button onClick={() => setCategory("Vegetables")}className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">🥕 Vegetables</button></div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}product={product}addToCart={addToCart}/>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-10">No products found 😕
        </p>
      )}
    </section>
  )
}
export default Products