import React from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { TbShoppingCartCheck } from "react-icons/tb"
import Container from "../../components/Container"
import Button from "../../components/UI/Button"
import HeadText from "../../components/UI/HeadText"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cartSlice"

const CartPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)


  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrementQuantity = (id: string) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementQuantity(id))
  }

  return (
    <div className="flex justify-center max-sm:min-h-screen">
      <Container>
        {cartItems.length === 0 ? (
          <div className="text-center md:py-32">
            <FaShoppingCart className="text-gray-400 text-6xl mx-auto" />
            <p className="text-ntrl-clr500 text-xl mt-4">Your cart is empty.</p>
            <p className="text-ntrl-clr500 text-lg mt-2">
              Start adding items now!
            </p>
          </div>
        ) : (
          <div className="py-20">
            <HeadText>Your Cart</HeadText>
            <div className="mt-12 flex flex-col">
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-contain"
                      />
                      <div>
                        <h3 className="font-bold text-ntrl text-xl">
                          {item.title}
                        </h3>
                        <p className="text-ntrl-clr500">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-x-4 w-full md:w-fit justify-center mt-4 gap-y-4">
                      <div className="flex items-center w-24 justify-between">
                        <button
                          className="size-8 bg-ntrl text-white rounded-md"
                          onClick={() => handleDecrementQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="size-8 bg-ntrl text-white rounded-md"
                          onClick={() => handleIncrementQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <Button
                        size="small"
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="flex items-center gap-2 self-end md:self-center"
                      >
                        <AiOutlineDelete />
                        Remove
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="py-4">
                <ul className="space-y-1">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="text-ntrl-clr500 text-right flex justify-between items-center"
                    >
                      <p className="text-xs md:text-sm">{item.title}</p>
                      <p className="text-xs md:text-sm">
                        ${item.price} x {item.quantity} = $
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 border-t">
                <h3 className="text-2xl font-bold text-ntrl text-right">
                  Total: ${totalPrice.toFixed(2)}
                </h3>
                <Button
                  className="mt-4 flex items-center w-full md:w-fit justify-center ml-auto group"
                  variant="secondary"
                >
                  Proceed to Buy{" "}
                  <TbShoppingCartCheck className="size-6 trasnform transition-all duration-300 ml-2 group-hover:translate-x-2 group-hover:text-green-400" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default CartPage
