import React from "react"
import { FaHeart } from "react-icons/fa"
import Container from "../../components/Container"
import HeadText from "../../components/UI/HeadText"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { removeFromWishlist } from "../../redux/features/wishlistSlice"
import WishlistItem from "./WishlistItem"

const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const wishlistItems = useAppSelector((state) => state.wishlist.items)

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id))
  }

  return (
    <div className="flex justify-center max-sm:h-screen">
      <Container>
        {wishlistItems.length === 0 ? (
          <div className="text-center md:py-32">
            <FaHeart className="text-gray-400 text-6xl mx-auto" />
            <p className="text-ntrl-clr500 text-xl mt-4">
              Your wishlist is empty.
            </p>
            <p className="text-ntrl-clr500 text-lg mt-2">
              Start adding items to your wishlist!
            </p>
          </div>
        ) : (
          <div className="py-20">
            <HeadText>Your Wishlist</HeadText>
            <div className="mt-12 flex flex-col">
              <ul className="space-y-4">
                {wishlistItems.map((item) => (
                  <WishlistItem
                    key={item.id}
                    item={item}
                    onRemove={() => handleRemoveFromWishlist(item.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default WishlistPage
