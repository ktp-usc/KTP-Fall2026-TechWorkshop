"use client";
import Image from "next/image";
import Header from "./components/Header";
//import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import { useState, useEffect } from "react";
import GenreFilter from "./components/Genre";
import YearFilter, { YearMode } from "./components/YearFilter";

export default function Home() {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [genres, setGenres] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [year, setYear] = useState<number | undefined>(); // updated type
  const [yearMode, setYearMode] = useState<YearMode>("all"); // NEW


  useEffect(() => {
    const updatedMovies = movies.filter((movie) => {
      const matchesGenre = genres.length === 0 || genres.includes(movie.genre);
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(search.toLowerCase());

      // NEW: year filter
      let matchesYear = true;
      if (year !== undefined && yearMode === "before") {
        matchesYear = movie.releaseYear < year;
      } else if (year !== undefined && yearMode === "after") {
        matchesYear = movie.releaseYear > year;
      }

      return matchesGenre && matchesSearch && matchesYear;
    });

    setFilteredMovies(updatedMovies);
  }, [genres, search, year, yearMode]); 
  
  return (
    <div className="bg-slate-600 min-h-screen h-full">
      <Header
        search={search}
        setSearch={setSearch}
        year={year}
        setYear={setYear}
        yearMode={yearMode}
        setYearMode={setYearMode}
      />
      <GenreFilter setGenres={setGenres} selectedGenres={genres} />
      <div className="grid grid-cols-4 p-8 gap-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
