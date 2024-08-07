import { AiOutlineDelete } from "react-icons/ai"
import Button from "../../../components/UI/Button"
import { WishlistItem as WishlistItemType } from "../../../redux/features/wishlistSlice"

interface WishlistItemProps {
  item: WishlistItemType
  onRemove: () => void
  onAddToCart: () => void
}

const WishlistItem = ({ item, onRemove, onAddToCart }: WishlistItemProps) => {
  return (
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
          <h3 className="font-bold text-ntrl text-xl">{item.title}</h3>
          <p className="text-ntrl-clr500">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 mt-4 max-sm:self-end">
        <Button
          size="small"
          onClick={onAddToCart}
          variant="secondary"
          className="w-full"
        >
          Add to cart
        </Button>
        <Button
          size="small"
          onClick={onRemove}
          className="flex items-center gap-2 w-full md:w-fit"
        >
          <AiOutlineDelete />
          Remove
        </Button>
      </div>
    </li>
  )
}

export default WishlistItem
