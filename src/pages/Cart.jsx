function Cart({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setPage,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  return (
  <section className="min-h-screen bg-green-50 py-12 px-6">
<h1 className="text-4xl font-bold text-green-700 text-center mb-10">Your Cart 🛒</h1>
{cart.length === 0 ? (
<p className="text-center text-gray-600 text-lg"> Your cart is empty 😕
</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-5">
          {cart.map((item, index) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-5 flex items-center gap-5">
              <img src={item.image} alt={item.name}className="w-24 h-24 object-cover rounded-lg"/>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                <p className="text-gray-500">{item.category}</p>
                <p className="text-green-600 font-semibold"> ₹{item.price} / {item.unit}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 px-3 py-1 rounded" > -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="bg-green-600 text-white px-3 py-1 rounded">   +
                </button>
              </div>
              <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(index)} className="bg-red-500 text-white px-3 py-2 rounded-lg" >Remove</button>
            </div>
          ))}
          <div className="bg-white rounded-xl shadow-md p-6 text-right">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ₹{total}
            </h2>
            <button onClick={() => setPage("checkout")}className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Checkout
</button>
          </div>
        </div>
      )}
    </section>
  )
}
export default Cart