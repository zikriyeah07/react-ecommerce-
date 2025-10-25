import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products, currency } = useContext(ShopContext)
  
  const product = products.find((item) => item._id === productId)

  if (!product) {
    return <div className="text-center py-8">Product not found</div>
  }

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex justify-center">
          <img 
            src={product.image[0]} 
            alt={product.name} 
            className="max-w-full h-auto"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-xl font-semibold">{currency}{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          
          {/* Sizes */}
          <div>
            <h3 className="font-medium mb-2">Available Sizes:</h3>
            <div className="flex gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Category Info */}
          <div className="space-y-1">
            <p><span className="font-medium">Category:</span> {product.category}</p>
            <p><span className="font-medium">Sub Category:</span> {product.subCategory}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
