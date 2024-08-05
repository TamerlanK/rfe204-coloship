import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="fixed top-0 w-full inset-x-0 z-50">
      <HeaderTop />
      <HeaderMain />
    </header>
  );
};

export default Header;
