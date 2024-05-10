import usePlanet from "../../../hooks/planets/usePlanet";

type CardCharacterType = {
  name: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
};

const TEXT_TITLE = "py-1 font-bold text-sm text-yellow-200";
const TEXT_WHITE = "font-normal text-white";
export default function CardCharacterDetail({
  name,
  hair_color,
  height,
  mass,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
}: CardCharacterType) {
  const { planet } = usePlanet(homeworld);

  return (
    <div>
      <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
        <div className="flex-col lg:flex-row">
          <div>
            <h1 className="text-xl font-bold text-yellow-400">{name}</h1>
            <p className={TEXT_TITLE}>
              Color de pelo:
              <span className={TEXT_WHITE}>
                {" "}
                {hair_color !== "none" ? `${hair_color}` : "n/a"}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Color de ojos:
              <span className={TEXT_WHITE}>
                {" "}
                {eye_color !== "unknown" ? eye_color : "n/a"}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Planeta:
              <span className={TEXT_WHITE}> {planet && planet.name}</span>
            </p>
            <p className={TEXT_TITLE}>
              Altura:
              <span className={TEXT_WHITE}>
                {" "}
                {height !== "unknown" ? `${height} cm` : "n/a"}{" "}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Masa:
              <span className={TEXT_WHITE}>
                {" "}
                {mass !== "unknown" ? `${mass} kg` : "n/a"}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Color de piel:
              <span className={TEXT_WHITE}>
                {" "}
                {skin_color !== "unknown" ? skin_color : "n/a"}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Año de cumpleaños:
              <span className={TEXT_WHITE}>
                {" "}
                {birth_year !== "unknown" ? `${birth_year}` : "n/a"}
              </span>
            </p>
            <p className={TEXT_TITLE}>
              Genero:
              <span className={TEXT_WHITE}>
                {" "}
                {gender !== "none" ? `${gender}` : "n/a"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
