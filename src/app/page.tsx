import Image from "next/image";
import logo from "../../public/images/starwars_logo.png";
import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col items-center h-screen justify-center">
      <Image src={logo} alt="logo starwars" width={200} className="pb-5"/>
      <h1 className="text-yellow-400 text-3xl p-5 text-center">Hace mucho tiempo en una galaxia muy, muy lejana...</h1>
      <div className="pt-5">
        <button className="btn bg-neutral-800 border-neutral-500 opacity-80 hover:bg-neutral-900">
          <Link href={"/characters"} className="text-xl text-yellow-200">
            Ingresar
          </Link>
        </button>
      </div>
    </div>
  )
}