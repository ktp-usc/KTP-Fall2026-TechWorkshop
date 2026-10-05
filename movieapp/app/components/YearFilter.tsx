type YearMode = "all" | "before" | "after";

type YearFilterProps = {
  year: number | undefined;
  setYear: (year: number | undefined) => void;
  yearMode: YearMode;
  setYearMode: (mode: YearMode) => void;
};

export type { YearMode };

export default function YearFilter({
  year,
  setYear,
  yearMode,
  setYearMode,
}: YearFilterProps) {
  return (
    <div className="flex items-center gap-3 px-8 pt-4 text-slate-100">
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
  );
}