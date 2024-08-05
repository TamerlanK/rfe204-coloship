import React from "react"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { removeFromCart } from "../../features/cart/cartSlice"
import Button from "../../components/UI/Button"
import Container from "../../components/Container"
import HeadText from "../../components/UI/HeadText"

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

  return (
    <div className="pt-36 min-h-screen">
      <Container>
        <HeadText>Your Cart</HeadText>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="mt-12">
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain"
                    />
                    <div>
                      <h3 className="font-bold text-ntrl text-xl">{item.title}</h3>
                      <p className="text-ntrl-clr500">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                  </div>
                  <Button size="small" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <h3 className="text-xl font-bold text-ntrl">
                Total: ${totalPrice.toFixed(2)}
              </h3>
              <Button className="mt-4">Proceed to Buy</Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default CartPage
