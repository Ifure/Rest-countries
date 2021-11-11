import {useState} from 'react'

const FilterRegion = ({RegionFilter}) => {
	const filter = (region) =>  {
		RegionFilter(region)
		console.log(region)
	}

	const [isOpen, setIsopen] = useState(false)
	const regions = ["Africa", "Asia", "Americas", "Europe", "Oceania"]


	
	return ( 
		<div className=" dropdown inline-block relative ">
         <button onClick={() => setIsopen(!isOpen)} className= "  shadow-md   font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className=" mr-1 inline-block bg-gray-light dark:text-gray-500"> Filter by Region </span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
         </button>
         {isOpen && (<ul className=" dropdown py-3  bg-white dark:bg-blue-darkElement rounded-sm shadow-lg z-20 w-full absolute top- right-0  text-black pt-1" >
             {regions.map(region => { 
							 return ( 
								<li key={region} onClick={ () => {
									filter(region);
									setIsopen(!isOpen);
									}}  className="py-1 px-3 hover:bg-gray-dark dark:text-white shadow-sm mb-1 cursor-pointer" >
								{region}
							  </li>
							 )
						 })}
					 
         </ul>)}
      </div>
	)
	}	
 export default FilterRegion;