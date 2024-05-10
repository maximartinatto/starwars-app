import { baseURL } from "@/app/services/api";
import { FilmsData } from "@/app/types/Films";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFilms() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["filmsData"],
    queryFn: (): Promise<FilmsData> =>
      axios.get(`${baseURL}/films`).then((res) => res.data),
  });

  return {
    films: data,
    isLoading,
    error,
  };
}
