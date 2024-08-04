import React, { useState } from "react"
import { useGetProductsQuery } from "../../../api/productApi"
import Container from "../../../components/Container"
import HeadText from "../../../components/UI/HeadText"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import Card from "../../../components/Card"

const categories = ["ALL", "WOMEN'S", "ACCESSORIES", "MEN'S"]

const NewArrivals: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  const { data: products, error, isError } = useGetProductsQuery()

  console.log(products)

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
  }

  if (isError) {
    let errorMessage: string

    if ((error as FetchBaseQueryError).status) {
      const err = error as FetchBaseQueryError
      errorMessage = `Error: ${err.status}`
      if (err.data && typeof err.data === "object" && "message" in err.data) {
        errorMessage += ` - ${(err.data as { message?: string }).message}`
      }
    } else {
      const err = error as Error
      errorMessage = `Error: ${err.message}`
    }
  }

  if (!products || products.length === 0) return null

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
              className={`px-4 md:px-8 py-2 border ${
                activeCategory === category
                  ? "bg-primary text-white border-transparent"
                  : "bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* PRODUCTS */}
        <div className="w-full gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-0">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default NewArrivals
