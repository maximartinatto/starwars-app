import useFilm from "../../../hooks/films/useFilm";
import CardFilmDetail from "../components/CardFilmDetail";
import CardCharacters from "../../characters/components/CardCharactes";
import { baseURLImage } from "../../../services/api";
import { getUrlId } from "../../../utils/getUrlId";
import Image from "next/image";
import Loading from "../../../components/loading/Loading";

export default function Film({ params }: { params: { id: string } }) {
  const { film, isLoading, error } = useFilm(params.id);

  if (isLoading) return <Loading />;
  if (error) return "Ocurrio un error: " + error;

  return (
    <div className="mx-6 my-24">
      {film && (
        <>
          <div className="flex flex-col lg:flex-row">
            <div className="p-3 basis-1/4 flex items-center justify-center">
              <Image
                src={`${baseURLImage}films/${getUrlId(film.url)}.jpg`}
                alt=""
                width={200}
                height={200}
                className="max-w-sm rounded-lg shadows-2x1"
              />
            </div>
            <div className="p-3 basis-3/4">
              <CardFilmDetail
                title={film.title}
                episode_id={film.episode_id}
                opening_crawl={film.opening_crawl}
                director={film.director}
                producer={film.producer}
                release_date={film.release_date}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="p-3 basis-full">
              <CardCharacters
                characters={
                  film.characters &&
                  film.characters.map((character) => `${getUrlId(character)}`)
                }
                title="Characters"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
