import React, { useState } from "react";
import BtnFooter from "../Footer/BtnFooter";

function Trending() {
  const data = [
    {
      id: 1,
      title: "The Dark Knight",
      img: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
      main: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      year: "2008",
      duration: "2h 32min",
      genre: "Action, Crime, Drama",
    },
    {
      id: 2,
      title: "The Godfather",
      img: "https://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg",
      main: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
      year: "1972",
      duration: "2h 55min",
      genre: "Crime, Drama",
    },
    {
      id: 3,
      title: "Parasite",
      img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      main: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      trailer: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
      year: "2019",
      duration: "2h 12min",
      genre: "Comedy, Drama, Thriller",
    },
    ,
    {
      id: 4,
      title: "The Dark Knight",
      img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      main: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
      year: "2008",
      duration: "2h 32min",
      genre: "Action, Crime, Drama",
    },

    {
      id: 5,
      title: "The Lord of the Rings",
      img: "https://image.tmdb.org/t/p/w500/56zTpe2xvaA4alU51sRWPoKPYZy.jpg",
      main: "A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey to Mount Doom in order to destroy it.",
      trailer: "https://www.youtube.com/watch?v=V75dMMIW2B4",
      year: "2001",
      duration: "2h 58min",
      genre: "Action, Adventure, Drama",
    },
    {
      id: 6,
      title: "Joker",
      img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      main: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      year: "2019",
      duration: "2h 2min",
      genre: "Crime, Drama, Thriller",
    },

    {
      id: 7,
      title: "Nomadland",
      img: "https://image.tmdb.org/t/p/w500/4U1SBHmwHkNA0eHZ2n1CuiC1K1g.jpg",
      main: "After losing everything in the Great Recession, a woman embarks on a journey through the American West, living as a van-dwelling modern-day nomad.",
      trailer: "https://www.youtube.com/watch?v=6sxCFZ8_d84",
      year: "2020",
      duration: "1h 47min",
      genre: "Drama",
    },

    {
      id: 8,
      title: "Black Panther",
      img: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      main: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      year: "2018",
      duration: "2h 14min",
      genre: "Action, Adventure, Sci-Fi",
    },

    {
      id: 9,
      title: "The Irishman",
      img: "https://image.tmdb.org/t/p/w500/mbm8k3GFhXS0ROd9AD1gqYbIFbM.jpg",
      main: "An aging hitman recalls his time with the mob and the intersecting events with his friend, Jimmy Hoffa, through the 1950-70s.",
      trailer: "https://www.youtube.com/watch?v=WHXxVmeGQUc",
      year: "2019",
      duration: "3h 29min",
      genre: "Biography, Crime, Drama",
    },
  ];
  const [count, setCount] = useState(5);
  const handleShowMore = () => {
    setCount(count + 4);
  };

  return (
    <div className="mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.slice(0, count).map((item) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              className="w-full h-26 object-cover object-center"
              src={item.img}
              alt="The Shawshank Redemption"
            />
            <div className="p-4">
              <h2 className="text-gray-900 font-bold text-lg mb-2 justify-center items-center flex">
                {item.title}
              </h2>

              <p className="text-gray-700 text-xs mb-2">
                <strong>Year:</strong> {item.year}
              </p>

              <p
                className="
              text-gray-700 text-xs mb-2
              "
              >
                <strong>Duration:</strong> {item.duration}
              </p>
              <p className="text-gray-700 text-xs mb-2">
                <strong>Genre:</strong> {item.genre}
              </p>
              <a
                href="https://www.youtube.com/watch?v=6hB3S9bIaco"
                target="_blank"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full justify-center items-center flex"
              >
                Watch Trailer
              </a>
            </div>
          </div>
        ))}
      </div>

      {count < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Trending;
