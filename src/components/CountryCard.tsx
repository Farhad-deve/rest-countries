import { Link } from "react-router-dom"
import type { Country } from "../types/Country"

interface CountryCardProps {
    country: Country
}

const CountryCard = ({country} : CountryCardProps) => {
  return (
    <>
    <Link to={`/country/${country.alpha3Code}`}>
        <div className="bg-white dark:bg-[#2b3945] h-full shadow-[0_0_3px_1px_#00000020] rounded-lg overflow-hidden cursor-pointer transition-all hover:translate-y-[-0.3rem]">
            <div className="flex items-center justify-center h-48 w-full aspect-video overflow-hidden">
                <img src={country.flags.svg} alt={`${country.name} flag`} loading="lazy" className="object-cover border-b border-b-[#ccc] dark:border-b-[#202c37] w-full h-full" />
            </div>

            <div className="px-[clamp(1.5rem,2vw,2rem)] py-6 flex flex-col gap-4">
                <h1 className="font-extrabold text-[clamp(1.2rem,1.3vw,1.4rem)] dark:text-white">{country.name}</h1>
                <ul className="flex flex-col gap-2">
                    <li className="font-semibold flex items-center gap-2 dark:text-white">Population: <span className="font-light text-[clamp(0.9rem,1vw,1rem)]">{country.population.toLocaleString()}</span></li>
                    <li className="font-semibold flex items-center gap-2 dark:text-white">Region: <span className="font-light text-[clamp(0.9rem,1vw,1rem)]">{country.region}</span></li>
                    <li className="font-semibold flex items-center gap-2 dark:text-white">Capital: <span className="font-light text-[clamp(0.9rem,1vw,1rem)]">{country.capital}</span></li>
                </ul>
            </div>
        </div>
    </Link>
    </>
  )
}

export default CountryCard