import { Product } from "../../types"
import { FaHeart } from "react-icons/fa"
import Button from "../UI/Button"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { addToCart } from "../../features/cart/cartSlice"

interface CardProps {
  product: Product
}

const Card = ({ product }: CardProps) => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)

  const discountedPrice =
    product.price - (product.price * product.discount) / 100

  const isInCart = cartItems.some((item) => item.id === product.id)

  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="flex flex-col h-full cursor-pointer group hover:shadow-2xl transition-shadow duration-300">
      <div className="flex-grow flex flex-col border-x md:border-y-transparent border-t border-b group-hover:border-gray-300">
        <div className="relative h-48 w-full flex-shrink-0">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 bg-success text-white text-xs px-3 py-1 rounded">
              NEW
              <span className="absolute bottom-0 right-0 mr-1 -mb-2 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-success"></span>
            </span>
          )}
          {product.discount > 0 && !product.isNew && (
            <span className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded">
              -{product.discount}%
              <span className="absolute bottom-0 right-0 mr-1 -mb-2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-primary"></span>
            </span>
          )}
          <FaHeart className="group-hover:opacity-100 opacity-0 absolute top-2 right-2 text-gray-300 hover:text-primary transition-all duration-300" />
        </div>

        <div className="p-4 text-center flex-grow flex flex-col justify-between">
          <h3 className="text-sm text-ntrl hover:text-ntrl-clr400 font-semibold mb-2">
            {product.title}
          </h3>
          {product.discount > 0 ? (
            <div className="text-primary font-bold">
              <span className="line-through text-ntrl-clr400 text-sm mr-1">
                ${product.price}
              </span>{" "}
              <span>${discountedPrice.toFixed(2)}</span>
            </div>
          ) : (
            <div className="text-primary font-bold">{`$${product.price}`}</div>
          )}
        </div>
      </div>
      <Button
        className="rounded-none mt-auto lg:opacity-0 group-hover:opacity-100"
        onClick={handleAddToCart}
      >
        {isInCart ? "IN CART" : "ADD TO CART"}
      </Button>
    </div>
  )
}

export default Card
