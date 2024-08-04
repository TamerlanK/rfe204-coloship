import Container from "../../../components/Container"

const Newsletter = () => {
  return (
    <div className="bg-ntrl-clr200 py-12">
      <Container>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-6">
          <div>
            <h6 className="text-ntrl text-2xl font-semibold">Newsletter</h6>
            <p className="text-sm text-ntrl-clr500">
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div className="flex max-w-md w-full flex-col gap-y-3 md:gap-y-0 md:flex-row">
            <input type="text" className="focus:outline-none p-2 w-full" placeholder="Your email" />
            <button className="md:w-fit py-2 md:py-3 px-8 bg-primary hover:bg-primary-dark transition-colors duration-300 text-white">Subscribe</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Newsletter
