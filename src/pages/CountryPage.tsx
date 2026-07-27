import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import data from "../data.json";
import Header from "../layout/Header";

const CountryPage = () => {
  const { alpha3Code } = useParams();
  const country = data.find((country) => country.alpha3Code === alpha3Code);

  return (
    <>
      <Header />

      <div className="dark:bg-[#202c37] bg-[#fcfcfc] py-[clamp(2rem,2.5vw,3rem)]">
        <div className="custom-container flex flex-col items-start gap-8">
          <div>
            <Link to="/">
              <button className="flex items-center gap-2 px-6 rounded-md py-2 bg-white dark:text-white dark:bg-[#2b3945] shadow-[0_2px_5px_2px_#00000020] transition-all">
                <BiArrowBack />
                Back
              </button>
            </Link>
          </div>

          <div className="dark:text-white flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-[8rem]">
            <div>
              <img src={country?.flags.svg} alt={`${country?.name} flag`} className="max-w-[35rem]" />
            </div>

            <div className="flex flex-col gap-8">
              <h1 className="font-extrabold text-[clamp(1.5rem,2vw,2rem)]">{country?.name}</h1>
              <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                <ul className="flex flex-col gap-2">
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Native Name: <span className="font-light">{country?.nativeName}</span></li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Population: <span className="font-light">{country?.population.toLocaleString()}</span></li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Region: <span className="font-light">{country?.region}</span></li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Sub Region: <span className="font-light">{country?.subregion}</span></li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Capital: <span className="font-light">{country?.capital}</span></li>
                </ul>

                <ul className="flex flex-col gap-2">
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">Top Level Domain: <span className="font-light">{country?.topLevelDomain}</span></li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">
                    Currencies:{" "}
                    <span className="font-light">{country?.currencies?.map((currency) => currency.name)}</span>
                  </li>
                  <li className="font-semibold text-[clamp(1rem,1.2vw,1.2rem)]">
                    Languages:{" "}
                    {country?.languages?.map((language) => (
                      <span className="font-light">{language.name}, </span>
                    ))}
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-semibold">Border Countries:</h2>
                <div className="flex items-center flex-wrap gap-2">
                  {country?.borders?.map((border) => (
                    <span className="dark:bg-[#2b3945] bg-white rounded-md px-6 py-1 cursor-pointer shadow-[0_2px_5px_2px_#00000020]">{border}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
