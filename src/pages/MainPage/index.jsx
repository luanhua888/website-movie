import React from "react";
import LoginButton from "../../components/BtnLogin";
import BtnFooter from "../../components/Footer/BtnFooter";
import Header from "../../components/Header";
import Trending from "../../components/Trending";

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
