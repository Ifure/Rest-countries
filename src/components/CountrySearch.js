



const CountrySearch = ({ searchCountry }) => {
  
 const search = (country) => {
   searchCountry(country)
 }

  return (
    <div className="flex justify-between center w-full p-2 mb-4 ">
      <div className= " rounded mr-5 ">
        <form className=" max-w-sm py-1 px-2 rounded bg-gray-light dark:bg-blue-darkElement">
          <div className="flex items-center  border-b   py-2">
            <input onChange={ e => search(e.target.value)} className="appearance-none bg-transparent border-none w-full text-black dark:text-white  mr-3 py-1 leading-tight focus:outline-none text-lg  font-lg dark:text-white" type="text" placeholder="Search Image Term..." />
              <button className="flex-shrink-0 bg-gray-500 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
              Search
              </button>
          </div>
        </form>
		  </div>
      <div className="">
       
      </div>
    </div>
  )
}

export default CountrySearch 