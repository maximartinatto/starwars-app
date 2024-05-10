import useCharactersList from "../../../hooks/characters/useCharactersList";
import CharactersIcon from "../../../../../public/images/characters.png";
import Image from "next/image";

type cardCharacterType = {
  characters: string[];
  title: string;
};

export default function CardCharacters({
  characters,
  title,
}: cardCharacterType) {
  const { charactersName } = useCharactersList(characters);
  return (
    <>
      <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
        <div className="flex-col lg:flex-row">
          <h1 className="text-xl font-bold text-yellow-400">{title}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {charactersName.length > 0 ? (
              charactersName.map((characterList, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center h-7 text-sm"
                >
                  <Image src={CharactersIcon} alt="Characters" width={16} />
                  <span className="px-2">{characterList}</span>
                </div>
              ))
            ) : (
              <span>n/a</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
