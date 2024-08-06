import React, { useEffect } from "react"
import { AiOutlineDelete } from "react-icons/ai"
import { FaHeart } from "react-icons/fa"
import Container from "../../components/Container"
import Button from "../../components/UI/Button"
import HeadText from "../../components/UI/HeadText"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { removeFromWishlist } from "../../redux/features/wishlistSlice"

const WishlistPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const wishlistItems = useAppSelector((state) => state.wishlist.items)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

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
                        <p className="text-ntrl-clr500">${item.price}</p>
                      </div>
                    </div>
                    <Button
                      size="small"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="flex items-center gap-2 w-full md:w-fit mt-4 md:mt-0"
                    >
                      <AiOutlineDelete />
                      Remove
                    </Button>
                  </li>
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
