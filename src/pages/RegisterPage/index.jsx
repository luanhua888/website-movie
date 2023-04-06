import React from 'react'
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="pt-[10%]">
      <div className="px-[10%]">
        <div className="relative  ">
          <div className="bg-white p-10 rounded shadow-2xl border border-primary-100">
            <h1 className="text-4xl flex justify-center  font-bold mb-4 font-barlow">
              Sign in
            </h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="username"
                >
                  Username <span className="text-red-400">(*)</span>
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
                  Password <span className="text-red-400">(*)</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm Password <span className="text-red-400">(*)</span>
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
                  <Link to="/login">Login</Link>
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-stone-500 hover:text-stone-800"
                  href="/forgot"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage