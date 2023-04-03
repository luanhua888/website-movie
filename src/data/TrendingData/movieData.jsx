// tạo danh sánh phim ảo để hiển thị trên trang chủ

import React from "react";
import { Link } from "react-router-dom";
import h1 from "../../../assets/images/h1.jpg";
import h2 from "../../../assets/images/h2.jpg";
import h3 from "../../../assets/images/h3.jpg";
import h4 from "../../../assets/images/h4.jpg";
import h5 from "../../../assets/images/h5.jpg";
import h6 from "../../../assets/images/h6.jpg";
import h7 from "../../../assets/images/h7.jpg";
import h8 from "../../../assets/images/h8.jpg";
import h9 from "../../../assets/images/h9.jpg";
import h10 from "../../../assets/images/h10.jpg";
import h11 from "../../../assets/images/h11.jpg";
import h12 from "../../../assets/images/h12.jpg";
import h13 from "../../../assets/images/h13.jpg";
import h14 from "../../../assets/images/h14.jpg";

export const movieData = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    img: h1,
    main: "Andy Dufresne, a banker, is convicted of the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his time at the prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    year: "1994",
    duration: "2h 22min",
    genre: "Drama",
  },
  {
    id: 2,
    title: "The Godfather",
    img: h2,
    main: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailer: "https://www.youtube.com/watch?v=sY1S34973zA",
    year: "1972",
    duration: "2h 55min",
    genre: "Crime, Drama",
  },
  {
    id: 3,
    title: "The Godfather: Part II",
    img: h3,
    main: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    trailer: "https://www.youtube.com/watch?v=qJr4QZxYjYQ",
    year: "1974",
    duration: "3h 22min",
    genre: "Crime, Drama",
  },
  {
    id: 4,
    title: "The Dark Knight",
    img: h4,
    main: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    year: "2008",
    duration: "2h 32min",
    genre: "Action, Crime, Drama",
  },
];
