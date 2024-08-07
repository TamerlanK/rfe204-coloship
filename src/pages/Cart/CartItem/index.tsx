import { AiOutlineDelete } from "react-icons/ai"
import Button from "../../../components/UI/Button"
import { CartItem as CartItemType } from "../../../redux/features/cartSlice"

interface CartItemProps {
  item: CartItemType
  onIncrement: () => void
  onDecrement: () => void
  onRemove: () => void
}

const CartItem = ({
  item,
  onIncrement,
  onDecrement,
  onRemove,
}: CartItemProps) => {
  return (
    <li className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm">
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
      <div className="flex items-center gap-x-4 w-full md:w-fit justify-center mt-4 gap-y-4">
        <div className="flex items-center w-24 justify-between">
          <button
            className="size-8 bg-ntrl text-white rounded-md"
            onClick={onDecrement}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="size-8 bg-ntrl text-white rounded-md"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
        <Button
          size="small"
          onClick={onRemove}
          className="flex items-center gap-2 self-end md:self-center"
        >
          <AiOutlineDelete />
          Remove
        </Button>
      </div>
    </li>
  )
}

export default CartItem
