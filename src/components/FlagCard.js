import React from 'react';
import {Link} from 'react-router-dom';



const FlagCard = ({country}) => {
	return ( 
      <Link to={{
        pathname: `/${country.name}`,
        state: country
      }}>
        <div className ="w-full rounded overflow-hidden cursor-pointer shadow-lg mb-10 bg-blue-darkElement">
      <img src={country.flag} alt="" className="w-full" />
      <div className="px-7 py-5">
        <div className="font-bold text-black-500 text-xl mb-2">
         	{country.name}
        </div>
        <ul>
          <li> 
            <strong> Population</strong>
            : {country.population}
          </li>
          <li>
            <strong> Region</strong>
            : {country.region}
          </li>
          <li>
            <strong> Capital</strong>
            : {country.capital}
          </li>
        </ul>
      </div>
    </div>
      </Link>
	 );
}
 
export default FlagCard  ;