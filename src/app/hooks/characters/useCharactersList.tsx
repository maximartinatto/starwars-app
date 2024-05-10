import { baseURLInfo } from "@/app/services/api";
import { OneCharacter } from "@/app/types/Characters";
import { useQueries } from "@tanstack/react-query";
import axios from "axios";


export default function useCharactersList(characters: string[]) {
    const charactersQueries = useQueries({
        queries: characters.map((character) => {
            return {
                queryKey: ['characters', character],
                queryFn: (): Promise<OneCharacter> =>
                    axios
                        .get(`${baseURLInfo}people/${character}`)
                        .then(res => res.data),
            }
        })
    })

    const charactersName = charactersQueries.map((character) => character.data && character.data.name)
    
    return {
        charactersName
    }
}