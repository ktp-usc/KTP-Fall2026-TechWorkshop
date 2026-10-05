// Prompt:
// create a movie genre filter component, it should use typesrcipt, tailwind css, fit bg-slate-600, bg-slate-900 and text-white theme valid genres are,
// "Animation"
// "Thriller"
// "Adventure"
// "Science Fiction"
// "Drama"
// "Comedy"
// "Crime"
// allow for multiple to be selected at the same time.
// Note should allow for a setGenre and to be passed in so that page can filter from it.

"use client";

const genres = [
  "Animation",
  "Thriller",
  "Adventure",
  "Science Fiction",
  "Drama",
  "Comedy",
  "Crime",
] as const;

export type Genre = (typeof genres)[number];

type GenreFilterProps = {
  selectedGenres: String[];
  setGenres: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function GenreFilter({
  selectedGenres,
  setGenres,
}: GenreFilterProps) {
  function toggleGenre(genre: Genre) {
    setGenres((currentGenres) =>
      currentGenres.includes(genre)
        ? currentGenres.filter((selectedGenre) => selectedGenre !== genre)
        : [...currentGenres, genre],
    );
  }

  return (
    <section className="rounded-lg bg-slate-900 p-5 text-white">
      <h2 className="mb-4 text-lg font-semibold">Filter by genre</h2>

      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => {
          const isSelected = selectedGenres.includes(genre);

          return (
            <button
              key={genre}
              type="button"
              onClick={() => toggleGenre(genre)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isSelected
                  ? "bg-white text-slate-900"
                  : "bg-slate-600 text-white hover:bg-slate-500"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>
    </section>
  );
}
