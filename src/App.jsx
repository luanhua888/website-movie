import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import MainPage from "./components/MainPage/index.jsx";
import LoginButton from "./components/BtnLogin";

function App() {
  return (
    <>
      <div className="grid grid-cols-5">
        <Navbar />
        <MainPage/>
     
    
        
      </div>
    </>
  );
}

export default App;
