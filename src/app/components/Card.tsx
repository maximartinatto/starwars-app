import Image from "next/image"
import { useState } from "react"

type cardData = {
    id: string,
    name: string,
    image: string,
}

export default function Card({name, image, id}: cardData) {
    const [imgSrc, setImgSrc] = useState(image);

  return (
    <div key={id} className="card w-40 bg-base-100 shadow-xl m-3">
            <Image
                src={imgSrc}
                alt=""
                width={200}
                height={200}
                onError={() => setImgSrc('/images/image_not_found.png')}
                className="rounded-t-xl bg-black text-center" />
        <div className="py-3 text-black font-semibold items-center text-center text-xs">
            {name}
        </div>
    </div>
  )
}