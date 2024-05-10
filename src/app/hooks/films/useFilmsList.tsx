import { baseURLInfo } from "@/app/services/api";
import { OneFilm } from "@/app/types/Films";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";

export default function useFilmsList(films: string[]) {
  const filmsQueries = useQueries({
    queries: films.map((film) => {
      return {
        queryKey: ["film", film],
        queryFn: (): Promise<OneFilm> =>
          axios.get(`${baseURLInfo}films/${film}`).then((res) => res.data),
      };
    }),
  });

  const filmsName = filmsQueries.map((film) => film.data && film.data.title);

  return {
    filmsName,
  };
}
