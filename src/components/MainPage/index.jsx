import React from "react";
import LoginButton from "../BtnLogin";
import BtnFooter from "../Footer/BtnFooter";
import Header from "../Header";
import Trending from "../Trending";

function Main() {
  return (
    <div className="px-12 py-6 col-span-4 bg-cyan-50">
      <LoginButton />
      <Header />
      <Trending />
    </div>
  );
}

export default Main;
