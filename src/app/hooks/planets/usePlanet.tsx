import { baseURL } from "@/app/services/api";
import { OnePlanet } from "@/app/types/Planets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function usePlanet(id: string) {
    const { data, isLoading, error } = useQuery({
        queryKey: ['PlanetData'],
        queryFn: (): Promise<OnePlanet> =>
            axios
                .get(`${baseURL}planets/${id}`)
                .then(res => res.data),
        })

    return {
        planet: data,
        isLoading,
        error,
    }
}