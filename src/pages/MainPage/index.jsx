import React, { useEffect, useState } from "react";
import LoginButton from "../../components/BtnLogin";
import BtnFooter from "../../components/Footer/BtnFooter";
import Header from "../../components/Header";
import Trending from "../../components/Trending";
import ModalLoginSuccess from "../../modal/modalLoginSuccess";

function Main() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="px-12 py-6 col-span-4 bg-cyan-50">
      {user ? (
        <div
          onMouseEnter={() =>
            document.getElementById("userDropdown").classList.remove("hidden")
          }
          onMouseLeave={() =>
            document.getElementById("userDropdown").classList.add("hidden")
          }
        >
          <div className="flex flex-row justify-end cursor-pointer">
            <h1 className="text-3xl font-bold mb-4 font-barlow">
              {user.username}
            </h1>
            <img
              className="rounded-full w-10 h-10 "
              src="https://picsum.photos/200/300"
              alt="avatar"
            />
          </div>
          {/* //dropdown menu */}
          <div
            id="userDropdown"
            className="hidden absolute right-4 mr-6  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition ease-in-out duration-100"
            onMouseLeave={() =>
              document.getElementById("userDropdown").classList.add("hidden")
            }
          >
            <div className="py-1" role="menu" aria-orientation="vertical">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary  hover:text-white font-barlow"
                role="menuitem"
              >
                Your Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary  hover:text-white font-barlow"
                role="menuitem"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary  hover:text-white font-barlow"
                role="menuitem"
                onClick={() => {
                  localStorage.removeItem("user");
                  setUser(null);
                }}
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      ) : (
        <LoginButton />
      )}

      <Header />
      <Trending />
    </div>
  );
}

export default Main;
