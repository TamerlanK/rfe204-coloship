import { useState } from "react";
import {
  FaBars,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMdPersonAdd } from "react-icons/io";
import { MdLogin, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../lib/hooks";
import { cn } from "../../../lib/utils";
import Container from "../../Container";
import Badge from "../../UI/Badge";

const HeaderMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCurrencyAccordionOpen, setisCurrencyAccordionOpen] = useState(false);
  const [isLangaugeAccordionOpen, setisLangaugeAccordionOpen] = useState(false);
  const [isAccountAccordionOpen, setIsAccountAccordionOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const cartItemsCount = useAppSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  const wishlistItemsCount = useAppSelector(state => state.wishlist.items.length)

  return (
    <div className="bg-white w-full h-20 shadow-md md:h-24 md:bg-opacity-50 md:backdrop-blur-lg">
      <Container className="h-full">
        <div className="w-full flex justify-between items-center h-full">
          <Link
            to="/"
            className="text-2xl text-ntrl font-bold focus:outline-none"
          >
            COLO<span className="text-primary">SHOP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex justify-between items-center gap-x-4 lg:gap-x-12">
            <nav className="hidden md:flex items-center gap-x-4 text-xs md:text-sm">
              <Link to="/" className="hover:text-primary transition-colors">
                HOME
              </Link>
              <Link to="/shop" className="hover:text-primary transition-colors">
                SHOP
              </Link>
              <Link
                to="/promotion"
                className="hover:text-primary transition-colors"
              >
                PROMOTION
              </Link>
              <Link
                to="/pages"
                className="hover:text-primary transition-colors"
              >
                PAGES
              </Link>
              <Link to="/blog" className="hover:text-primary transition-colors">
                BLOG
              </Link>
              <Link
                to="/add-product"
                className="hover:text-primary transition-colors"
              >
                ADD PRODUCT
              </Link>
            </nav>
            <div className="flex justify-center items-center gap-x-3">
              <button className="p-3 rounded-full hover:text-ntrl-clr400 transition-colors">
                <FaSearch className="size-3" />
              </button>
              <button className="p-3 rounded-full hover:text-ntrl-clr400 transition-colors">
                <FaUser className="size-3" />
              </button>
              <Link to="/cart" className="relative">
                <button className="p-3 rounded-full hover:text-ntrl-clr400 bg-ntrl-clr300 transition-colors">
                  <FaShoppingCart className="size-3" />
                  {cartItemsCount > 0 && <Badge count={cartItemsCount} />}
                </button>
              </Link>
              <Link to="/wishlist" className="relative">
                <button className="p-3 rounded-full hover:text-ntrl-clr400 bg-ntrl-clr300 transition-colors">
                  <FiHeart className="size-3" />
                  {wishlistItemsCount > 0 && <Badge count={wishlistItemsCount} />}
                </button>
              </Link>
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
                      <Link to="/french">French</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/italian">Italian</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/german">German</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/spanish">Spanish</Link>
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
                      <Link to="/usd">USD</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/cad">CAD</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/aud">AUD</Link>
                    </li>
                    <li className="block w-full py-3 hover:text-primary transition-colors">
                      <Link to="/eur">EUR</Link>
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
                      <Link
                        to="/login"
                        className="flex justify-end items-center gap-x-1 w-full"
                      >
                        <MdLogin /> Login
                      </Link>
                    </li>
                    <li className="w-full py-3 hover:text-primary transition-colors">
                      <Link
                        to="/register"
                        className="flex justify-end items-center gap-x-1 w-full"
                      >
                        <IoMdPersonAdd /> Register
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              {[
                "HOME",
                "SHOP",
                "PROMOTION",
                "PAGES",
                "BLOG",
                "ADD PRODUCT",
              ].map((item) => (
                <li key={item} className="w-full">
                  <Link
                    to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block w-full py-3 text-sm hover:text-primary transition-colors text-right"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default HeaderMain;
