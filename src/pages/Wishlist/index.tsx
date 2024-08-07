import { useCallback } from "react"
import { FaHeart } from "react-icons/fa"
import Container from "../../components/Container"
import HeadText from "../../components/UI/HeadText"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import {
  removeFromWishlist,
  WishlistItem as WishlistItemType,
} from "../../redux/features/wishlistSlice"
import WishlistItem from "./WishlistItem"
import { Product } from "../../types"
import { addToCart } from "../../redux/features/cartSlice"

const WishlistPage = () => {
  const dispatch = useAppDispatch()
  const wishlistItems = useAppSelector(
    (state) => state.wishlist.items
  ) as WishlistItemType[]

  const handleRemoveFromWishlist = useCallback(
    (id: string) => {
      dispatch(removeFromWishlist(id))
    },
    [dispatch]
  )

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart(product))
    },
    [dispatch]
  )

  const renderEmptyWishlist = () => (
    <div className="text-center md:py-32">
      <FaHeart className="text-gray-400 text-6xl mx-auto" />
      <p className="text-ntrl-clr500 text-xl mt-4">Your wishlist is empty.</p>
      <p className="text-ntrl-clr500 text-lg mt-2">
        Start adding items to your wishlist!
      </p>
    </div>
  )

  const renderWishlistItems = () => (
    <div className="py-20">
      <HeadText>Your Wishlist</HeadText>
      <div className="mt-12 flex flex-col">
        <ul className="space-y-4">
          {wishlistItems.map((item) => (
            <WishlistItem
              key={item.id}
              item={item}
              onRemove={() => handleRemoveFromWishlist(item.id)}
              onAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </ul>
      </div>
    </div>
  )

  return (
    <div className="flex justify-center max-sm:h-screen">
      <Container>
        {wishlistItems.length === 0
          ? renderEmptyWishlist()
          : renderWishlistItems()}
      </Container>
    </div>
  )
}

export default WishlistPage
