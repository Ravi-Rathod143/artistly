"use client";

import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({ category: "", location: "" });

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
