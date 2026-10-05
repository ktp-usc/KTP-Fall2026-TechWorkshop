import { Clapperboard, Search } from "lucide-react";

export type YearMode = "all" | "before" | "after";

type headerProp = {
  search: string;
  setSearch: (arg1: string) => void;
  year: number | undefined;
  setYear: (year: number | undefined) => void;
  yearMode: YearMode;
  setYearMode: (mode: YearMode) => void;
};
export default function Header({
  search,
  setSearch,
  year,
  setYear,
  yearMode,
  setYearMode,
}: headerProp) {
  return (
    <div className="bg-slate-900 p-4">
      <div className="flex justify-between items-center">
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      {/* Year filter */}
      <div className="flex items-center gap-3 mt-4 text-slate-100">
        <label htmlFor="year-mode">Show movies:</label>
        <select
          id="year-mode"
          value={yearMode}
          onChange={(e) => setYearMode(e.target.value as YearMode)}
          className="rounded-2xl bg-slate-800 px-4 py-2 focus:outline-none"
        >
          <option value="all">All years</option>
          <option value="before">Before</option>
          <option value="after">After</option>
        </select>

        <input
          type="number"
          placeholder="Year"
          min={1888}
          max={2100}
          value={year ?? ""}
          disabled={yearMode === "all"}
          onChange={(e) =>
            setYear(e.target.value === "" ? undefined : Number(e.target.value))
          }
          className="w-28 rounded-2xl bg-slate-800 px-4 py-2 focus:outline-none disabled:opacity-50"
        />
      </div>
    </div>
  );
}
