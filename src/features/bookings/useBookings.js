import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParamas] = useSearchParams();
  const FilteredValue = searchParamas.get("status");
  const filter =
    !FilteredValue || FilteredValue === "all"
      ? null
      : { field: "status", value: FilteredValue, method: "eq" };

  const sortByRaw = searchParamas.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };
  const page = !searchParamas.get("page")
    ? 1
    : Number(searchParamas.get("page"));
  const { isLoading, data, error } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });
  const bookings = data?.data;
  const count = data?.count;

  return { isLoading, bookings, error, count };
}
