"use client";

import type { Dispatch, SetStateAction } from "react";

export type YearSortOrder = "newest" | "oldest";

type YearSortProps = {
  sortOrder: YearSortOrder;
  setSortOrder: Dispatch<SetStateAction<YearSortOrder>>;
};

export default function Sort({ sortOrder, setSortOrder }: YearSortProps) {
  return (
    <section className="bg-slate-600 px-8 py-4">
      <label
        className="flex w-fit items-center gap-3 rounded-lg bg-slate-900 px-4 py-3 text-white"
        htmlFor="year-sort"
      >
        <span className="font-semibold">Sort by year</span>
        <select
          id="year-sort"
          value={sortOrder}
          onChange={(event) =>
            setSortOrder(event.target.value as YearSortOrder)
          }
          className="rounded-md bg-slate-600 px-3 py-2 text-white outline-none ring-1 ring-slate-500 focus:ring-2 focus:ring-white"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </label>
    </section>
  );
}
