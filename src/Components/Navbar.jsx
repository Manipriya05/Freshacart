import { useState } from "react"
function Navbar({ cartCount, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const handlePage = (page) => {
    setPage(page)
    setMenuOpen(false)
  }
  return (
    <nav className="bg-green-600 text-white px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold cursor-pointer"onClick={() => handlePage("home")}
        >FreshCart 🥕</h1>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => handlePage("home")}>Home</button>
          <button onClick={() => handlePage("products")}> Products
          </button>
          <button onClick={() => handlePage("fruits")}>Fruits</button>
          <button onClick={() => handlePage("vegetables")}>Vegetables
          </button>
        </div>
        <button onClick={() => handlePage("cart")}className="hidden md:block bg-white text-green-600 px-4 py-2 rounded-lg font-semibold">🛒 Cart ({cartCount})</button>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => handlePage("cart")}
            className="bg-white text-green-600 px-3 py-2 rounded-lg font-semibold"
          >
            🛒 {cartCount}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            ☰
          </button>

        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4 bg-green-700 rounded-lg p-4 space-y-3">

          <button
            onClick={() => handlePage("home")}
            className="block w-full text-left px-3 py-2 rounded hover:bg-green-800"
          >
            🏠 Home
          </button>

          <button
            onClick={() => handlePage("products")}
            className="block w-full text-left px-3 py-2 rounded hover:bg-green-800"
          >
            🛒 Products
          </button>

          <button
            onClick={() => handlePage("fruits")}
            className="block w-full text-left px-3 py-2 rounded hover:bg-green-800"
          >
            🍎 Fruits
          </button>

          <button
            onClick={() => handlePage("vegetables")}
            className="block w-full text-left px-3 py-2 rounded hover:bg-green-800"
          >
            🥕 Vegetables
          </button>

        </div>
      )}
    </nav>
  )
}

export default Navbar