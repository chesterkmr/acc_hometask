import { useState } from "react";
import { UsersFilters } from "./types";

export function useFilters(
  initialFilters: UsersFilters = { byEmailDomain: "example.com" }
) {
  const [filters, setFilters] = useState(initialFilters);

  return {
    filters,
    setFilters,
  };
}
