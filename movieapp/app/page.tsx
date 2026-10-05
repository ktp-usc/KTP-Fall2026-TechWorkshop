"use client";
import Image from "next/image";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";
import { useState, useEffect } from "react";
import GenreFilter from "./components/Genre";
import Sort from "./components/Sort";
export default function Home() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [genres, setGenres] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const updatedMovies = movies.filter((movie) => {
      return genres.length === 0 || genres.includes(movie.genre);
    });

    setFilteredMovies(
      updatedMovies.filter((movie) => {
        return movie.title.toLowerCase().includes(search.toLowerCase());
      }),
    );
  }, [genres, search]);

  return (
    <div className="bg-slate-600 min-h-screen h-full">
      <Header search={search} setSearch={setSearch} />
      <GenreFilter setGenres={setGenres} selectedGenres={genres} />
      <Sort />
      <div className="grid grid-cols-4 p-8 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
