import { useEffect, useState } from "react"
import { useGetProductsQuery } from "../../../api/productApi"
import Card from "../../../components/Card"
import Container from "../../../components/Container"
import HeadText from "../../../components/UI/HeadText"
import { cn } from "../../../lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")
  const [categories, setCategories] = useState<string[]>(["ALL"])

  const { data: products } = useGetProductsQuery()

  useEffect(() => {
    if (products) {
      const distinctCategories = Array.from(
        new Set(products.map((product) => product.category.toUpperCase()))
      )
      setCategories(["ALL", ...distinctCategories].slice(0, 4 ))
    }
  }, [products])

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  if (!products || products.length === 0) return null

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter(
          (product) => product.category.toUpperCase() === activeCategory
        )

  return (
    <Container>
      <section className="w-full py-6 md:py-12 space-y-12">
        <HeadText>New Arrivals</HeadText>
        {/* FILTER */}
        <div className="mx-auto w-full sm:w-fit flex flex-col sm:flex-row border border-gray-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={cn(
                "px-4 md:px-8 py-2 border",
                activeCategory === category
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-gray-700"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {/* PRODUCTS */}
        <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-0">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </Container>
  )
}

export default NewArrivals
