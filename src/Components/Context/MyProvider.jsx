import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [isbool, setIsbool] = useState(false);


    const [ButtonText,setButtonText]=useState('')
    // Fetch button data from API or any other source and set it using setButtonData

    return (
        <MyContext.Provider value={{ isbool,setIsbool,ButtonText,setButtonText }}>
            {children}

        </MyContext.Provider>
    );
};

export default MyProvider;
