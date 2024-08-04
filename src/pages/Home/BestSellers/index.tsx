import { useGetProductsQuery } from "../../../api/productApi"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import HeadText from "../../../components/UI/HeadText"
import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const BestSellers = () => {
  const { data: products, isError } = useGetProductsQuery()
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth
      sliderRef.current.scrollLeft -= cardWidth
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth
      sliderRef.current.scrollLeft += cardWidth
    }
  }

  if (isError || !products || products.length === 0) return null

  return (
    <Container>
      <div className="w-full py-12 md:py-20 space-y-12">
        <HeadText>Best Sellers</HeadText>
        <div className="relative group">
          <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden p-2 text-white bg-[#d3d3d6] py-8 shadow-lg group-hover:flex items-center"
          >
            <FaChevronLeft />
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="snap-start min-w-full sm:min-w-[50%] md:min-w-[25%] lg:min-w-[20%]"
              >
                <Card product={product} />
              </div>
            ))}
          </div>
          <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden p-2 text-white bg-[#d3d3d6] py-8 shadow-lg group-hover:flex items-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </Container>
  )
}

export default BestSellers
