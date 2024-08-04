import { useState } from "react"
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa"
import { IoMdPersonAdd } from "react-icons/io"
import { MdLogin, MdOutlineKeyboardArrowDown } from "react-icons/md"
import { cn } from "../../../lib/utils"
import Container from "../../Container"

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isCurrencyAccordionOpen, setisCurrencyAccordionOpen] = useState(false)
  const [isLangaugeAccordionOpen, setisLangaugeAccordionOpen] = useState(false)
  const [isAccountAccordionOpen, setIsAccountAccordionOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="bg-white w-full h-20 md:h-24">
      <Container className="h-full">
        <div className="w-full flex justify-between items-center h-full">
          <a href="#" className="text-2xl text-ntrl font-bold focus:outline-none">
            COLO<span className="text-primary">SHOP</span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex justify-between items-center gap-x-4 lg:gap-x-12">
            <nav className="hidden md:flex items-center gap-x-4 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                HOME
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                SHOP
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                PROMOTION
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                PAGES
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                BLOG
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                CONTACT
              </a>
            </nav>
            <div className="flex justify-center items-center gap-x-3">
              <button className="p-3 rounded-full hover:text-ntrl-clr400 transition-colors">
                <FaSearch className="size-3" />
              </button>
              <button className="p-3 rounded-full hover:text-ntrl-clr400 transition-colors">
                <FaUser className="size-3" />
              </button>
              <button className="p-3 rounded-full hover:text-ntrl-clr400 bg-ntrl-clr300 transition-colors">
                <FaShoppingCart className="size-3" />
              </button>
            </div>
            {/* Hamburger Menu */}
            <button className="md:hidden p-3" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="size-3" />
              ) : (
                <FaBars className="size-3" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed md:hidden inset-0 top-20 left-0 bg-white bg-opacity-95 shadow-lg z-50 transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <nav className="flex flex-col py-4 px-6 items-start">
            <ul className="w-full divide-y">
              <li>
                <button
                  className="flex w-full justify-end items-center gap-x-1 focus:outline-none py-3 text-sm hover:text-primary text-right"
                  onClick={() => setisLangaugeAccordionOpen((prev) => !prev)}
                >
                  English{" "}
                  <MdOutlineKeyboardArrowDown
                    className={cn(
                      "transition-transform",
                      isLangaugeAccordionOpen && "rotate-180"
                    )}
                  />
                </button>
                {isLangaugeAccordionOpen && (
                  <ul className="w-full divide-y text-sm text-right">
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      French
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      Italian
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      German
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      Spanish
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex w-full justify-end items-center gap-x-1 focus:outline-none py-3 text-sm hover:text-primary text-right"
                  onClick={() => setisCurrencyAccordionOpen((prev) => !prev)}
                >
                  USD{" "}
                  <MdOutlineKeyboardArrowDown
                    className={cn(
                      "transition-transform",
                      isCurrencyAccordionOpen && "rotate-180"
                    )}
                  />
                </button>
                {isCurrencyAccordionOpen && (
                  <ul className="w-full divide-y text-sm text-right">
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      USD
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      CAD
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      AUD
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      EUR
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button
                  className="flex w-full justify-end items-center gap-x-1 focus:outline-none py-3 text-sm hover:text-primary text-right"
                  onClick={() => setIsAccountAccordionOpen((prev) => !prev)}
                >
                  My Account{" "}
                  <MdOutlineKeyboardArrowDown
                    className={cn(
                      "transition-transform",
                      isAccountAccordionOpen && "rotate-180"
                    )}
                  />
                </button>
                {isAccountAccordionOpen && (
                  <ul className="w-full divide-y text-sm text-right">
                    <li className="w-full py-3 hover:text-primary transition-colors">
                      <a
                        href="#"
                        className="flex justify-end items-center gap-x-1 w-full"
                      >
                        <MdLogin /> Login
                      </a>
                    </li>
                    <li className="w-full py-3 hover:text-primary transition-colors">
                      <a
                        href="#"
                        className="flex justify-end items-center gap-x-1 w-full"
                      >
                        <IoMdPersonAdd /> Register
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              {["HOME", "SHOP", "PROMOTION", "PAGES", "BLOG", "CONTACT"].map(
                (item) => (
                  <li key={item} className="w-full">
                    <a
                      href="#"
                      className="block w-full py-3 text-sm hover:text-primary transition-colors text-right"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default HeaderMain
