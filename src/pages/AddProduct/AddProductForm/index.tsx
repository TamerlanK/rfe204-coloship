import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
  ProductFormData,
  productSchema,
} from "../../../validation/productValidation"
import axios from "axios"
import { Product } from "../../../types"

const AddProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: 0,
      image: "",
      category: "",
      discount: 0,
    },
    mode: "onChange",
  })

  const onSubmit = async (data: ProductFormData) => {
    const newProduct: Omit<Product, "id"> = {
      ...data,
      isNew: true,
    }

    try {
      await axios.post("http://localhost:3000/products", newProduct)
      console.log("Product added successfully")
      reset()
    } catch (error) {
      console.error("Error adding product:", error)
    }
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-ntrl">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="title" className="block mb-1">
              Title
            </label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <input
                  id="title"
                  type="text"
                  className="border p-2 w-full focus:outline-none"
                  placeholder="Enter product title"
                  {...field}
                />
              )}
            />
            {errors.title && (
              <p className="text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label htmlFor="price" className="block mb-1">
              Price
            </label>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  id="price"
                  type="number"
                  className="border p-2 w-full focus:outline-none"
                  placeholder="Enter price"
                  {...field}
                />
              )}
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="category" className="block mb-1">
              Category
            </label>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <input
                  id="category"
                  type="text"
                  className="border p-2 w-full focus:outline-none"
                  placeholder="Enter category"
                  {...field}
                />
              )}
            />
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div className="flex-1">
            <label htmlFor="discount" className="block mb-1">
              Discount (%)
            </label>
            <Controller
              name="discount"
              control={control}
              render={({ field }) => (
                <input
                  id="discount"
                  type="number"
                  className="border p-2 w-full focus:outline-none"
                  placeholder="Enter discount percentage"
                  {...field}
                />
              )}
            />
            {errors.discount && (
              <p className="text-red-500">{errors.discount.message}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block mb-1">
            Image URL
          </label>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <input
                id="image"
                type="text"
                className="border p-2 w-full focus:outline-none"
                placeholder="Enter image URL"
                {...field}
              />
            )}
          />
          {errors.image && (
            <p className="text-red-500">{errors.image.message}</p>
          )}
        </div>

        <button
          type="submit"
          className={`bg-primary text-white py-2 px-4 rounded-md transition-colors duration-300 ${
            isSubmitting || !isValid
              ? "bg-opacity-50 cursor-not-allowed"
              : "hover:bg-primary-dark"
          }`}
          disabled={isSubmitting || !isValid}
        >
          {isSubmitting ? "Submitting..." : "Add Product"}
        </button>
      </form>
    </div>
  )
}

export default AddProductForm
