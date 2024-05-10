import { baseURL } from "@/app/services/api";
import { OneFilm } from "@/app/types/Films";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useFilm(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["filmData"],
    queryFn: (): Promise<OneFilm> =>
      axios.get(`${baseURL}films/${id}`).then((res) => res.data),
  });

  return {
    film: data,
    isLoading,
    error,
  };
}
