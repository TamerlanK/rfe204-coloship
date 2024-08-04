import { FaHeart } from "react-icons/fa"
import Container from "../Container"
import {
  FaXTwitter,
  FaInstagram,
  FaSkype,
  FaPinterest,
  FaFacebook,
} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="">
      <Container>
        <div className="py-12 flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-12 md:gap-y-0">
          {/* LINKS */}
          <ul className="flex gap-8 flex-col md:flex-row md:gap-16 items-center text-ntrl-clr500">
            <li>
              <a href="#" className="p-2 hover:text-primary transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="p-2 hover:text-primary transition-colors">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="p-2 hover:text-primary transition-colors">
                Add product
              </a>
            </li>
          </ul>
          {/* SOCIALS */}
          <div className="flex items-center flex-wrap gap-x-4 text-ntrl">
            <div className="p-3 hover:text-primary transition-colors duration-300 cursor-pointer">
              <FaFacebook />
            </div>
            <div className="p-3 hover:text-primary transition-colors duration-300 cursor-pointer">
              <FaXTwitter />
            </div>
            <div className="p-3 hover:text-primary transition-colors duration-300 cursor-pointer">
              <FaInstagram />
            </div>
            <div className="p-3 hover:text-primary transition-colors duration-300 cursor-pointer">
              <FaSkype />
            </div>
            <div className="p-3 hover:text-primary transition-colors duration-300 cursor-pointer">
              <FaPinterest />
            </div>
          </div>
        </div>
        <div className="py-12 text-ntrl-clr500 text-center md:text-left text-sm w-full text-balance">
          ©{new Date().getFullYear()} All Rights Reserved. This template is
          made with <FaHeart className="text-primary inline" /> by{" "}
          <span className="text-primary">Colorlib</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
