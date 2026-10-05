// data Shape
// {
//         "id": 10,
//         "imageUrl": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
//         "title": "Whiplash",
//         "genre": "Drama",
//         "lengthMinutes": 107,
//         "releaseYear": 2014
//     },

// type MovieProp = {
//   imageUrl: string;
//   title: string;
//   genre: string;
//   lengthMinutes: number;
//   releaseYear: number;
// };

// export default function MovieCard({
//   imageUrl,
//   title,
//   genre,
//   lengthMinutes,
//   releaseYear,
// }: MovieProp) {
//   return (
//     <div>
//       <div className="rounded-lg border-slate-400 border w-fit p-4 bg-slate-900">
//         <img src={imageUrl} className="rounded-lg"></img>
//         <p className="text-white">{title}</p>
//         <p className="text-slate-400">{genre}</p>
//         <p className="text-slate-400"> {lengthMinutes} m</p>
//         <p className="text-slate-400">{releaseYear}</p>
//       </div>
//     </div>
//   );
// }
//test
//
type MovieProp = {
  imageUrl : string;
  title : string;
  lengthMinutes : number;
  releaseYear : number;
  genre : string;
};

export default function MovieCard({
  imageUrl,
  title,
  genre,
  lengthMinutes,
  releaseYear,
}: MovieProp) {
  return (
    <div className="rounded-lg border-slate-600">
      <img src={imageUrl} className="rounded-lg"></img>
      <h1>{title}</h1>
      <h1>{genre}</h1>
      <h1>{lengthMinutes}</h1>
      <h1>{releaseYear}</h1>
    </div>
  )
}




