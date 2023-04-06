import React, { useState } from "react";

import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from "react-icons/bi";
import { Link } from "react-router-dom";

function Navbar() {
  const defaultIconSize = "1.875rem";

  const items = [
    {
      name: "Home",
      icon: <BiHomeAlt size={defaultIconSize} />,
      active: true,
    },
    {
      name: "Movies",
      icon: <BiMoviePlay size={defaultIconSize} />,
    },
    {
      name: "About",
      icon: <BiInfoCircle size={defaultIconSize} />,
    },
  ];

  const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false);

  return (
    <nav className=" ">
      <h4 className="uppercase font-bold text-primary py-4 border-b border-primary  text-xl sm:text-2xl mr-2 flex  md:justify-end ">
        PhimLuan.net
      </h4>
      <BiMenu
        size={"45px"}
        className="
      md:hidden
      absolute
      top-0
      right-0
      m-4
      cursor-pointer
      "
        onClick={() => setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}
      />

      <ul
        className={`
        flex
        flex-col
        justify-center
        md:justify-end
        text-xl
        font-bold
        text-primary
        ${isNavMenuMobileOpen ? "block" : "hidden"}
        md:flex
        `}
      >
        {items.map((item, index) => (
          <Link
            to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
            key={index}
            className="flex justify-end items-center py-2 mx-1 cursor-pointer hover:bg-primary hover:text-white px-2"
            style={{
              borderRadius: "2%",
            }}
            
          >
            <Link
              to={item.name === "Home" ? "/" : `/${item.name.toLowerCase()}`}
              className="text-xl mr-2"
            >
              {item.name}
            </Link>
            <span className=" ">{item.icon}</span>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
