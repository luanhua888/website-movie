import React from "react";

function Header() {
  return (
    <div>
      <span>
        <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl mt-1">
          #1 Free Online Movie Streaming Website in Vietnam
        </h1>
        <p className="text-gray-600 sm:text-lg">
          Watch movies online for free in HD quality with subtitles. Stream or
          download the latest Vietnamese movies without any restrictions!
        </p>
        <div className="text-gray-400 py-3 text-2xl border-b border-primary sm:text-3xl">
          Trending movies
        </div>
      </span>
    </div>
  );
}

export default Header;
