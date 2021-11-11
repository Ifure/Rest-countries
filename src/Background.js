import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <body className="bg-gray-light dark:bg-blue-darkBg  text-black dark:text-gray-light  transition-all">
            {children}
        </body>
    )
}

export default Background;