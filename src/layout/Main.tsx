import data from '../data.json';
import Filter from "../components/Filter";
import CountryCard from "../components/CountryCard";
import { useState } from 'react';

const Main = () => {
  const [search, setSearch] = useState('');
  const [filterRegion, setFilterRegion] = useState('');

  const filteredCountries = data.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());

    const matchesRegion = filterRegion === "" || country.region === filterRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <>
      <main className="flex flex-col py-[clamp(2rem,2.5vw,3rem)] min-h-screen bg-[#fcfcfc] dark:bg-[#202c37]">
        <Filter search={search} setSearch={setSearch} filterRegion={filterRegion} setFilterRegion={setFilterRegion} />  
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-[clamp(2rem,2.5vw,3rem)] custom-container">
          {filteredCountries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Main;
