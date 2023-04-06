import React from "react";
import { Link, Route, Router } from "react-router-dom";
import ModalLoginSuccess from "../../modal/modalLoginSuccess";

function LoginPage() {
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [modalLoginSuccess, setModalLoginSuccess] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // clear error
    setError(null);
    if (username === "amtluan" && password === "amtluan") {
      localStorage.setItem("user", JSON.stringify({ username }));
      setModalLoginSuccess(true);
      location.href = "/";
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <div className="pt-[10%]">
      <div className="px-[10%]">
        <div className="relative  ">
          <div className="bg-white p-10 rounded shadow-2xl border border-primary-100">
            <h1 className="text-4xl flex justify-center  font-bold mb-4 font-barlow">
              Login
            </h1>
            <form>
              {error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold pr-4">Error!</strong>
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                  <button
                    className="bg-stone-600 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>

                <a
                  className="inline-block align-baseline font-bold text-sm text-stone-500 hover:text-stone-800"
                  href="/forgot"
                >
                  Forgot Password?
                </a>
              </div>
              <span className="align-baseline font-bold text-sm text-stone-500  justify-end flex ">
                You don't have an account?{" "}
                <a
                  className="align-baseline font-bold text-sm text-stone-500 hover:text-stone-800 justify-end flex"
                  href="/forgot"
                >
                  {" "}
                  Register{" "}
                </a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
