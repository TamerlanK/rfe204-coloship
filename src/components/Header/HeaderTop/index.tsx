import { useEffect, useState } from "react";
import Container from "../../Container";
import { MdOutlineKeyboardArrowDown, MdLogin } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { cn } from "../../../lib/utils";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTop]);

  const handleCurrencyChange = (currency: string) => {
    setSelectedCurrency(currency);
    setIsCurrencyOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  return (
    <div
      className={cn(
        "bg-ntrl text-ntrl-clr400 transition-all duration-200",
        isTop ? "hidden lg:block h-12" : "h-0 overflow-hidden"
      )}
    >
      <Container className="h-full">
        <div className="w-full h-full flex justify-between items-center">
          <span className="uppercase text-sm">
            Free shipping on all U.S orders over $50
          </span>
          <div className="flex justify-between items-center h-full text-sm text-center">
            <div
              className="relative h-full flex items-center justify-center px-6"
              onMouseEnter={() => setIsCurrencyOpen(true)}
              onMouseLeave={() => setIsCurrencyOpen(false)}
            >
              <span className="cursor-pointer flex items-center gap-x-1">
                {selectedCurrency} <MdOutlineKeyboardArrowDown />
              </span>
              {isCurrencyOpen && (
                <div className="absolute top-full w-full bg-white text-ntrl shadow-lg z-50">
                  <ul className="divide-y">
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleCurrencyChange("USD")}
                    >
                      USD
                    </li>
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleCurrencyChange("EUR")}
                    >
                      EUR
                    </li>
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleCurrencyChange("GBP")}
                    >
                      GBP
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative h-full flex items-center justify-center px-6 border-x-ntrl-clr500 border-x"
              onMouseEnter={() => setIsLanguageOpen(true)}
              onMouseLeave={() => setIsLanguageOpen(false)}
            >
              <span className="cursor-pointer flex items-center gap-x-1">
                {selectedLanguage} <MdOutlineKeyboardArrowDown />
              </span>
              {isLanguageOpen && (
                <div className="absolute top-full w-full bg-white text-ntrl shadow-lg text-center z-50">
                  <ul className="divide-y">
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleLanguageChange("English")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleLanguageChange("Spanish")}
                    >
                      Spanish
                    </li>
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleLanguageChange("French")}
                    >
                      French
                    </li>
                    <li
                      className="px-4 py-3 cursor-pointer hover:text-primary transition-colors duration-300"
                      onClick={() => handleLanguageChange("German")}
                    >
                      German
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div
              className="relative h-full flex items-center justify-center px-6"
              onMouseEnter={() => setIsAccountOpen(true)}
              onMouseLeave={() => setIsAccountOpen(false)}
            >
              <span className="cursor-pointer flex items-center gap-x-1">
                My Account <MdOutlineKeyboardArrowDown />
              </span>
              {isAccountOpen && (
                <div className="absolute top-full w-full bg-white text-ntrl shadow-lg z-50">
                  <ul className="w-full divide-y">
                    <li className="px-4 py-3 flex justify-center items-center cursor-pointer hover:text-primary transition-colors duration-300">
                      <Link to="/login" className="flex gap-x-1 items-center">
                        <MdLogin /> Log In
                      </Link>
                    </li>
                    <li className="px-4 py-3 flex justify-center items-center cursor-pointer hover:text-primary transition-colors duration-300">
                      <Link
                        to="/register"
                        className="flex gap-x-1 items-center"
                      >
                        <IoMdPersonAdd /> Register
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
