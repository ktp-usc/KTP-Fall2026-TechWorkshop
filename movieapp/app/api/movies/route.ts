// // `https://image.tmdb.org/t/p/w500${movie.poster_path}`

// export async function GET() {
//   const tmdbResponse = await fetch(
//     `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
//         accept: "application/json",
//       },
//     },
//   );

//   const data = await tmdbResponse.json();
//   return Response.json(data);
// }

export async function GET() {
  const tmdbResponse = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`,
        accept: "application/json",
      },
    },
  );
  const data = await tmdbResponse.json();
  const movies = data.results.map((movie: any) => ({
    id: movie.id,
    title: movie.title,
    imageUrl: movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : null,
  }));

  return Response.json(movies);
}
