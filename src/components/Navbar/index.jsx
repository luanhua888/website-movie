import React from "react";
import { BiHomeAlt, BiInfoCircle, BiMoviePlay } from "react-icons/bi";

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

  return (
    <nav className="col-span-1 bg-cyan-200 ">
      <div className=" mx-4 justify-between items-center ">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right text-3xl ">
          Phimmoi.net
        </h4>

        <ul className="mx-4 my-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-end  items-center py-2 mx-1 cursor-pointer hover:bg-primary
               hover:text-white px-2"
              style={{
                borderRadius: "2%",
              }}
            >
              <span className="text-xl mr-2">{item.name}</span>
              <span className=" ">{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
