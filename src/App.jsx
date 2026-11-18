import { useState } from "react";
import { genres } from "./mock-data/genres.js";
import { movies as movieData } from "./mock-data/movies.js";
import GenreList from "./components/GenreList.jsx";
import MovieList from "./components/MovieList.jsx";
import "./App.css";

export default function App() {
  const [currentGenre, setCurrentGenre] = useState("Action");
  const [movies] = useState(movieData);

  const filteredMovies = movies.filter(
    (movie) => movie.genre === currentGenre
  );

  return (
    <div>
      <h1>Movie Browser</h1>

      <GenreList
        genres={genres}
        setCurrentGenre={setCurrentGenre}
      />

      <h2>Selected Genre: {currentGenre}</h2>

      <MovieList movies={filteredMovies} />
    </div>
  );
}