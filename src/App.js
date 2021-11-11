import React, { useState, useEffect } from 'react';
import FlagCard from './components/FlagCard';
import CountrySearch from './components/CountrySearch';
import  FilterRegion from  "./FilterRegion";
import Toggle from './ThemeToggle';

function App() {
  const[countries, setCountries] = useState([]);
  const[catchedCountries, setCachedCountries] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    if(countries.length < 1){
      fetchCountries()
    };
  });

  const fetchCountries = () => {
    fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => {
          setCountries(data)
          setCachedCountries(data)
          setIsLoading(false)
        })
        .catch(err => console.log("Error:", err));
        }

  const searchCountries = (country) => {
    const filteredCountries = catchedCountries.filter(c => {
      return  c.name.toLowerCase().match(country.toLowerCase())
    })
    setCountries(filteredCountries)
    
  }
  // filter regions
  const SearchRegions = (area) => {
    const filteredRegion = catchedCountries.filter(continent => {
      return continent.region.toLowerCase().match(area.toLowerCase()) 
    })
    setCountries(filteredRegion)
    fetchCountries()
  }
  return (
    <div className="container ">
      {isLoading ? (<h2 className="text-5xl h-screen text-center  mx-auto "> Fetching Countries... </h2>) : (
        <>
          <div className="w-full flex justify-between border-b-2">
            <h2 className="  py-5 text-2xl font-bold  ">
              Where in the world
            </h2>
            <Toggle/>
          </div>
            
            <div className="flex justify-between align-center w-full mt-10 ">
              <CountrySearch searchCountry={searchCountries}/>
              <FilterRegion RegionFilter={SearchRegions}/>
            </div>
          
          <div className="  flex flex-col align-center justify-center mx-5 mt-10 md:grid  md:grid-cols-3 md:gap-4">
            {countries.map(country => (
              <FlagCard key={country.name} country={country}/>
            ))}
          </div>
      </>
      )}
    </div>
  );
}

export default App;
