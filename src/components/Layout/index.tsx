import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col antialiased">
      <Header />
      <main className="grow flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout
