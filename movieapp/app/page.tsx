import Image from "next/image";
import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { movies } from "./data/movies";

export default function Home() {
  return (
    <div className="bg-slate-600 min-h-screen h-full">
      {<Header />}
      <div className="grid grid-cols-5 p-8 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div> 
    </div>
  );
}
