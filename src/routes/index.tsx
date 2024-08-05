import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import RootLayout from "../components/Layout"
import HomePage from "../pages/Home"
import AddProductPage from "../pages/AddProduct"
import NotFoundPage from "../pages/NotFound"
import ShopPage from "../pages/Shop"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="add-product" element={<AddProductPage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)
