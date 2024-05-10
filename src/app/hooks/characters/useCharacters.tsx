import { baseURL } from "@/app/services/api";
import { CharactersData } from "@/app/types/Characters";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type pageCharacters = {
  page: number;
};

export default function useCharacters({ page }: pageCharacters) {
  const fetchCharacters = (page: number) =>
    axios.get(`${baseURL}people/?page=${page}`).then((res) => res.data);

  const { data, isLoading, error } = useQuery({
    queryKey: ["charactersData", page],
    queryFn: (): Promise<CharactersData> => fetchCharacters(page),
  });

  return {
    characters: data,
    isLoading,
    error,
  };
}
