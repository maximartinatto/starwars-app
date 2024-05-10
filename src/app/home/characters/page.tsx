import Card from "../../components/Card";
import useCharacters from "../../hooks/characters/useCharacters";
import Link from "next/link";
import { baseURLImage } from "../../services/api";
import { getUrlId } from "../../utils/getUrlId";
import { useState } from "react";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";

export default function Characters() {
  const [page, setPage] = useState(1);
  const { characters, isLoading, error } = useCharacters({ page });
  const totalPage = characters && Math.ceil(characters.count / 10);

  if (isLoading) return <Loading />;
  if (error) return "Ocurrio un error: " + error;

  return (
    <div className="my-24">
      <div className="flex flex-wrap my-6 justify-center">
        {characters &&
          characters.results.map((character) => (
            <Link
              href={`/characters/${getUrlId(character.url)}`}
              key={`${getUrlId(character.url)}`}
            >
              <Card
                id={`${getUrlId(character.url)}`}
                name={character.name}
                image={`${baseURLImage}characters/${getUrlId(
                  character.url
                )}.jpg`}
              />
            </Link>
          ))}
      </div>
      <Pagination page={page} totalPage={totalPage} setPage={setPage} />
    </div>
  );
}
