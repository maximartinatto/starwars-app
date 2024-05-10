type CardFilmType = {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: string,
}

const TEXT_TITLE = "py-1 font-bold text-sm text-yellow-200"
const TEXT_WHITE = "font-normal text-white"

export default function CardFilmDetail({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date
}: CardFilmType) {
    return (
        <div>
            
            <div className="p-8 bg-neutral-800 border-neutral-500 border-2 border-solid rounded-xl opacity-80 lg:w-full">
                <div className="flex-col lg:flex-row">
                    <div>
                        <h1 className="text-xl font-bold text-yellow-400">{title}</h1>
                        <p className={TEXT_TITLE}>Episodio:
                            <span className={TEXT_WHITE}> {episode_id}</span>
                        </p>
                        <p className={TEXT_TITLE}>Apertura:
                            <span className={TEXT_WHITE}> {opening_crawl}</span>
                        </p>
                        <p className={TEXT_TITLE}>Director:
                            <span className={TEXT_WHITE}> {director}</span>
                        </p>
                        <p className={TEXT_TITLE}>Productor:
                            <span className={TEXT_WHITE}> {producer}</span>
                        </p>
                        <p className={TEXT_TITLE}>Fecha:
                            <span className={TEXT_WHITE}> {release_date}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}