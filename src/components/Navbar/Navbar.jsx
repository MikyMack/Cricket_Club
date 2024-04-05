import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
import { Link, useLocation } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "HOME",
    link: "/",
  },
  {
    id: 2,
    name: "ABOUT US",
    link: "/about",
  },
  {
    id: 3,
    name: "MATCHES",
    link: "/matches",
  },
  {
    id: 4,
    name: "SPONSORS",
    link: "/sponsors",
  },
  {
    id: 5,
    name: "GALLERY",
    link: "/gallery",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-2xl dark:shadow-none dark:bg-black dark:text-white duration-300">
      <div className="container py-2 md:py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="w-20" />
            <div className="hidden md:block w-36 pt-2 font-extrabold">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-blue-900 hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 transition-all duration-300 ease-in-out font-serif">Taunton Indian Cricket Club</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <Link to={link} className={`text-sm font-medium ${location.pathname === link ? 'text-red-500' : 'text-black'} hover:text-primary py-1 hover:border-b-2 dark:text-white dark:hover:text-primary hover:border-primary transition-colors duration-500 font-serif`}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <DarkMode />
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <DarkMode />
            {showMenu ? (
              <HiX
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-black dark:text-white"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all  text-black dark:text-white"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />

    </nav>
  );
};

export default Navbar;
