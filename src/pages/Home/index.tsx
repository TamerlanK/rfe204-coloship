import Banner from "./Banner"
import Benefits from "./Benefits"
import BestSellers from "./BestSellers"
import Hero from "./Hero"
import LatestBlogs from "./LatestBlogs"
import NewArrivals from "./NewArrivals"
import Newsletter from "./Newsletter"
import WeekDeal from "./WeekDeal"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <NewArrivals />
      <WeekDeal />
      <BestSellers />
      <Benefits />
      <LatestBlogs />
      <Newsletter />
    </>
  )
}

export default HomePage
