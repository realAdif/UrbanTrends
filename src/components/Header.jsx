import React, { useContext, useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
//side context
import { SidebarContext } from "../contexts/SidebarContext";

import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  const handleThemeSwitched = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <header
      className={`${
        isActive ? "bg-white dark:bg-gray-500 py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all `}
    >
      <div className='container mx-auto flex items-center justify-between h-full '>
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className='w-[40px]' src={Logo} alt='' />
          </div>
        </Link>
        <div>
          <h1>UrbanTrends</h1>
        </div>

        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
        >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white dark:text-black rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
