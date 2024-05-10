import { baseURL } from "@/app/services/api";
import { OneCharacter } from "@/app/types/Characters";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useCharacter(id: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['characterData'],
        queryFn: (): Promise<OneCharacter> =>
            axios
                .get(`${baseURL}people/${id}`)
                .then(res => res.data)
    })

    return {
        character: data,
        isLoading,
        error
    }
}