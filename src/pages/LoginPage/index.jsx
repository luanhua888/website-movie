import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2">
      <div className=" bg-gray-100 ">
        <div className="bg-white p-20 rounded shadow-2xl border border-primary-100">
          <h1 className="text-4xl flex justify-center font-bold mb-4 font-barlow">
            Login
          </h1>
          <form>
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
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-stone-600 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                <Link to="/register"> Sign In</Link>
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-stone-500 hover:text-stone-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
