import { useState } from "react";

import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar/index.jsx";
import MainPage from "./pages/MainPage/index.jsx";
import LoginButton from "./components/BtnLogin";
import MoviePage from "./pages/MoviePage/index.jsx";
import AboutPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPage from "./pages/ForgotPage";

function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Navbar />
      <div className=" md:col-span-4 ">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
