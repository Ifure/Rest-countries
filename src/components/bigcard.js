import {
   useLocation,
	 useHistory
} from "react-router-dom";

const BigCard = () => {
	const {state} = useLocation();
	const languages = state.languages;
	let newLanguages = [];
	const currencies = state.currencies;
	let newCurrencies = [];
	const borders = state.borders;
	const history = useHistory()
	console.log(state)
	

	languages.map((language => {
	return	newLanguages.push(language.name);
	}));

	currencies.map((currency => {
		return	newCurrencies.push(currency.name);
		}));

		
	return ( 
		<div className="px-5 md:px-20  text-base  py-10 ">

			<button className="px-10 py-5 text-2xl bg-transparent mt-2 mb-10 outline-none shadow-lg " onClick={() => history.push('/')}>
				Back
			</button>

			<div className="flex flex-col w-full md:flex-row md:items-center  md:justify-center">
				<div className=" w-full mb-10 md:w-1/2 md:mr-10">
					<img src={state.flag}  alt={state.name} className='w-full'/>
				</div>
				<div className="w-full md:w-1/2 ">
					<div className=" w-full flex flex-col md:flex-row mb-5 ">
						<div className=" w-full md:w-1/2">
							<h3 className="text-2xl font-bold mb-5">{state.name}</h3>
								<ul>
									<li className="mt-1"> 
										<strong> Native Name</strong>
										: {state.nativeName}
									</li>
									<li className="mt-1"> 
										<strong> Population</strong>
										: {state.population}
									</li>
									<li className="mt-1 ml-1"> 
										<strong> Region</strong>
										: {state.region}
									</li>
									<li className="mt-1"> 
										<strong> Sub-region</strong>
										: {state.subregion}
									</li>
									<li className="mt-1"> 
										<strong> Capital</strong>
										: {state.capital}
									</li>
								</ul>
							</div>
							<div className=" w-full md:w-1/2 mt-10 ">
								<ul>
									<li className="mt-1"> 
										<strong> Top Level Domain</strong>
										: {state.topLevelDomain}
									</li>
									<li className="mt-1"> 
										<strong> Languages</strong>
										: {newLanguages.join(', ')}
									</li>
									<li className="mt-1"> 
										<strong> currencies</strong>
										: {newCurrencies.join(', ')}
									</li>
								</ul>
							</div>
						</div>
					  {borders && (	<div className=" w-full  mt-2">
						<strong> Border Countries </strong>
						: {borders?.map((border, id) => (
						<span key={id} className= " inline-block flex-wrap  mr-2  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
						{border}
					</span>
					))}
					</div>)}
				</div>
			</div>
	</div>
)
} 
export default BigCard;