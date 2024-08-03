import Container from "../../../components/Container"

const Hero = () => {
  return (
    <section
      className="relative h-[700px] mt-0 lg:mt-24 bg-cover bg-[60%] md:bg-center flex items-center bg-[#e3e3e3]"
      style={{ backgroundImage: "url(src/assets/images/slider_1.jpg)" }}
    >
      <Container className="h-screen flex items-center pt-32">
        <div className="space-y-4 md:space-y-6">
          <span className="text-ntrl text-sm uppercase">
            Spring / Summer Collection 2017
          </span>
          <h1 className="text-ntrl text-5xl md:text-7xl max-w-xl">
            Get up to 30% Off New Arrivals
          </h1>
          <button className="px-8 py-3 bg-primary text-white rounded-md">
            SHOP NOW
          </button>
        </div>
      </Container>
    </section>
  )
}

export default Hero
