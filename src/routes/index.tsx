import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import RootLayout from "../components/Layout"
import HomePage from "../pages/Home"
import AddProductPage from "../pages/AddProduct"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="add-product" element={<AddProductPage />} />
    </Route>
  )
)
