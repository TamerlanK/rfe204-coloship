import { z } from "zod"

export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val > 0.01, {
      message: "Price must be a number greater than zero",
    }),
  image: z.string().url("Image URL must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  discount: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val) && val >= 0 && val <= 100, {
      message: "Discount must be between 0 and 100",
    }),
})

export type ProductFormData = z.infer<typeof productSchema>
