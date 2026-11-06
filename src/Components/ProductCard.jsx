function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
  <img src={product.image} alt={product.name} loading="lazy"className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"/>
<div className="p-5">
<h2 className="text-xl font-semibold"> {product.name}</h2>
<p className="text-sm text-gray-500">{product.category}</p>
<p className="text-lg font-bold text-green-600 mt-3">₹{product.price}
</p>
<p className="text-sm text-gray-500">{product.unit}</p>
<button onClick={() => addToCart(product)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition mt-4" >Add to Cart</button>
</div>
</div>
  )
}
export default ProductCard