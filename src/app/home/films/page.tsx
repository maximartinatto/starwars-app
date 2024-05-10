import Card from "../../components/Card";
import useFilms from "../../hooks/films/useFilms";
import Link from "next/link";
import Loading from "../../components/loading/Loading";
import { baseURLImage } from "../../services/api";
import { getUrlId } from "../../utils/getUrlId";

export default function Films() {
  const { films, isLoading, error } = useFilms();

  if (isLoading) return <Loading />;
  if (error) return "Ocurrio un error: " + error;

  return (
    <div className="my-24">
      <div className="flex flex-wrap my-6 justify-center">
        {films &&
          films.results.map((film) => (
            <Link
              href={`/films/${getUrlId(film.url)}`}
              key={`${getUrlId(film.url)}`}
            >
              <Card
                id={`${getUrlId(film.url)}`}
                name={film.title}
                image={`${baseURLImage}films/${getUrlId(film.url)}.jpg`}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
