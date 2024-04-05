import PropTypes from 'prop-types';
import { MenuLinks } from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const location = useLocation();

  useEffect(() => {
    const closeMenu = (e) => {
      const responsiveMenu = document.getElementById("responsive-menu");
      if (!responsiveMenu.contains(e.target) && showMenu) {
        setShowMenu(true);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu, setShowMenu]);

  return (
    <div
      id="responsive-menu"
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 z-50 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      style={{
        borderRadius: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        margin: '10px',
      }}
    >
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {MenuLinks.map((data) => (
              <li key={data.name}>
                <Link to={data.link}>
                  <a href={data.link} className={`mb-5 inline-block ${location.pathname === data.link ? 'text-red-500' : ''}`}>
                    {data.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>
          <a href="">Copyright ©2024 A2Z Alphabet Solutionz PVT.LTD. All Rights Reserved .</a>{" "}
        </h1>
      </div>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  setShowMenu: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
