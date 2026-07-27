import data from '../data.json';
import Filter from "../components/Filter";
import CountryCard from "../components/CountryCard";

const Main = () => {
  return (
    <>
      <main className="flex flex-col py-[clamp(2rem,2.5vw,3rem)] min-h-screen bg-[#fcfcfc] dark:bg-[#202c37]">
        <Filter />  
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-[clamp(2rem,2.5vw,3rem)] custom-container">
          {data.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Main;
