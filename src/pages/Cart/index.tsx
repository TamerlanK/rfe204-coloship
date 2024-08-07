import { useCallback } from "react"
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
import CartItem from "./CartItem"

const CartPage = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleRemoveFromCart = useCallback(
    (id: string) => {
      dispatch(removeFromCart(id))
    },
    [dispatch]
  )

  const handleIncrementQuantity = useCallback(
    (id: string) => {
      dispatch(incrementQuantity(id))
    },
    [dispatch]
  )

  const handleDecrementQuantity = useCallback(
    (id: string) => {
      dispatch(decrementQuantity(id))
    },
    [dispatch]
  )

  const renderEmptyCart = () => (
    <div className="text-center md:py-32">
      <FaShoppingCart className="text-gray-400 text-6xl mx-auto" />
      <p className="text-ntrl-clr500 text-xl mt-4">Your cart is empty.</p>
      <p className="text-ntrl-clr500 text-lg mt-2">Start adding items now!</p>
    </div>
  )

  const renderCartList = () => (
    <div className="py-20">
      <HeadText>Your Cart</HeadText>
      <div className="mt-12 flex flex-col">
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => handleIncrementQuantity(item.id)}
              onDecrement={() => handleDecrementQuantity(item.id)}
              onRemove={() => handleRemoveFromCart(item.id)}
            />
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
  )

  return (
    <div className="flex justify-center max-sm:min-h-screen">
      <Container>
        {cartItems.length === 0 ? renderEmptyCart() : renderCartList()}
      </Container>
    </div>
  )
}

export default CartPage
