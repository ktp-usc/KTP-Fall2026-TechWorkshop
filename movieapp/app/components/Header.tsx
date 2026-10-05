import { Clapperboard, Search } from "lucide-react";

type headerProp = {
  search: string;
  setSearch: (arg1: string) => void;
};
export default function Header() {
  return (
    <div className="bg-slate-900 p-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Clapperboard className="text-white w-auto h-12" />
        <div>
          <p className="text-white text-2xl font-semibold">MovieAdvisor</p>
          <p className="text-white text-xl font-light">curated cinama</p>
        </div>
      </div>
      <div>
        <div className="text-slate-100 flex gap-2 items-center rounded-2xl bg-slate-800 pl-4 pr-4 p-2 w-xl">
          <Search />
          <input
            className="focus:outline-none"
            placeholder="Search movies..."
          ></input>
        </div>
      </div>
    </div>
  );
}
