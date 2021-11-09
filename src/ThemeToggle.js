import React from 'react';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="absolute  right-0 top-0 mr-4 mt-4 md:mr-6 md:mt-6 ">
            <div className="transition duration-500 ease-in-out rounded-full p-2">
                <button className="bg-transparent shadow-sm p-1 outline-none hover "  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
							{theme === 'dark' ? (
                    <FaSun className=" text-gray-500 dark:text-gray-400 text-2xl  inline cursor-pointer"
                    /> 
                    ) : (
                        <FaMoon
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className=" dark:text-gray-400 text-2xl  inline cursor-pointer"
                        />
                    )} {theme === 'dark' ? 'lightmode' : 'darkmode '} 
			    </button>
            </div>
        </div>
        
    );
};

export default Toggle; 