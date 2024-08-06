import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

const RootLayout = () => {
  return (
    <div className="flex flex-col antialiased">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
