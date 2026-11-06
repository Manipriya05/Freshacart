import { useState } from "react"
import Navbar from "./Components/Navbar"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState("home")
  const [message, setMessage] = useState("")
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )
      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }
      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    })
    setMessage(`${product.name} added to cart!`)
    setTimeout(() => {
      setMessage("")
    }, 2000)
  }
  const removeFromCart = (indexToRemove) => {
    setCart((currentCart) =>
      currentCart.filter((_, index) => index !== indexToRemove)
    )
  }
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }
  return (
    <div className="min-h-screen">
      <Navbar
        cartCount={cart.length}
        setPage={setPage}
      />
      {message && (
        <div className="fixed top-20 right-5 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ {message}
        </div>
      )}
      <div key={page} className="animate-fadeIn">
        {page === "home" && (
          <Home setPage={setPage} />
        )}
        {page === "products" && (
          <Products
            addToCart={addToCart}
            selectedCategory="All"
          />
        )}
        {page === "fruits" && (
          <Products
            addToCart={addToCart}
            selectedCategory="Fruits"
          />
        )}
        {page === "vegetables" && (
          <Products
            addToCart={addToCart}
            selectedCategory="Vegetables"
          />
        )}
        {page === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            setPage={setPage}
          />
        )}
        {page === "checkout" && (
          <Checkout cart={cart} />
        )}
      </div>
    </div>
  )
}
export default App