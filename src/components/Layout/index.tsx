import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import ScrollToTop from "../ScrollToTop"

const RootLayout = () => {
  return (
    <div className="flex flex-col antialiased">
      <ScrollToTop />
      <Header />
      <main className="grow flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
