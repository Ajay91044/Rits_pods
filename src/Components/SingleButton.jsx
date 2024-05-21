import React, { useContext } from 'react';
import { MyContext } from './Context/MyProvider';

function SingleButton({ buttonLabel, url,text }) {
  const { setIsbool,setButtonText } = useContext(MyContext);

  // You can now access buttonData and use it as needed

  const handleButtonClick = () => {
    // Handle button click action here
    setIsbool(true);
    setButtonText(text);
    
    console.log(`Button with label "${buttonLabel}" clicked. URL: ${url}`);
  };
  setTimeout(() => {
    
    setIsbool(false)

  }, 1200);  
  

  return (
    <div>
      <button onClick={handleButtonClick} className='SingleButton'>
        {buttonLabel}
      </button>
    </div>
  );
}

export default SingleButton;
