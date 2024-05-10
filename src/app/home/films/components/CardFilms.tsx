import useFilmsList from "../../../hooks/films/useFilmsList";
import FilmsIcon from "../../../../../public/images/films.png";
import Image from "next/image";

type cardFilmType = {
  films: string[];
};

export default function CardFilms({ films }: cardFilmType) {
  const { filmsName } = useFilmsList(films);

  return (
    <>
      <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
        <div className="flex-col lg:flex-row">
          <h1 className="text-xl font-bold text-yellow-400">Films</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {filmsName.length > 0 ? (
              filmsName.map((filmList, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center h-7 text-sm"
                >
                  <Image src={FilmsIcon} alt="Films" width={16} />
                  <span className="px-2">{filmList}</span>
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
