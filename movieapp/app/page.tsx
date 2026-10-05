"use client";
import Image from "next/image";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
import GenreFilter from "./components/Genre";
export default function Home() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const updatedMovies = movies.filter((movie) => {
      return genres.length === 0 || genres.includes(movie.genre);
    });

    setFilteredMovies(updatedMovies);
  }, [genres]);

  return (
    <div className="bg-slate-600 min-h-screen h-full">
      <Header />
      <GenreFilter setGenres={setGenres} selectedGenres={genres} />
      <div className="grid grid-cols-4 p-8 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
