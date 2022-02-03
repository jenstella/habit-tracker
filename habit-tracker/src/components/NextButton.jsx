import React from 'react';
import { useState } from 'react';

export default function NextButton() {

    // setting state for next page
    const [next, setNext] = useState(0);
    // setting state for current page
    const [currentPage, setCurrentPage] = useState(0);

    // handle the page
    function handlePage(currentPage) {

        // creating variable for the current page + 1 (also the next page)
        let nextPage = currentPage + 1;

        setNext(nextPage);
    }
  
    return (
        <div>
            <button onClick={handlePage}>Next</button>
        </div>
  )
};
