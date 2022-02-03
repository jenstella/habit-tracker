import React from 'react';
import { useState } from 'react';

export default function NextButton() {

    // setting state for page
    const [next, setNext] = useState(0);

    // handle the page
    const handlePage = () => {
        setNext(currentPage => currentPage + 1);
    }
  
    return (
        <div>
            <button onClick={handlePage}>Next</button>
        </div>
  )
};
