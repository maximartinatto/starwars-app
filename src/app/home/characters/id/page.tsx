import useCharacter from "../../../hooks/characters/useCharacter";
import CardCharacterDetail from "../components/CardCharacterDetail";
import Loading from "../../../components/loading/Loading";
import Image from "next/image";
import { baseURLImage } from "../../../services/api";
import { getUrlId } from "../../../utils/getUrlId";

export default function Character({ params }: { params: { id: string } }) {
  const { character, isLoading, error } = useCharacter(params.id);

  if (isLoading) return <Loading />;
  if (error) return "Ocurrio un error: " + error;

  return (
    <div className="mx-6 my-24">
      {character && (
        <>
          <div className="flex flex-col lg:flex-row">
            <div className="p-3 basis-1/4 flex items-center justify-center">
              <Image
                src={`${baseURLImage}characters/${getUrlId(character.url)}.jpg`}
                alt="Image not found"
                width={200}
                height={200}
                className="max-w-sm rounded-lg shadows-2x1"
              />
            </div>
            <div className="p-3 basis-3/4">
              <CardCharacterDetail
                name={character.name}
                hair_color={character.hair_color}
                height={character.height}
                mass={character.mass}
                skin_color={character.skin_color}
                eye_color={character.eye_color}
                birth_year={character.birth_year}
                gender={character.gender}
                homeworld={`${getUrlId(character.homeworld)}`}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
