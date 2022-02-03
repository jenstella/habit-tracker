import React from 'react';
import { useState } from 'react';

export default function Counter(props) {
    // set initial count state to 0
    const [count, setCount] = useState(0);

    // increment event handler
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    //   decrement event handler
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };

    return (
        
    <div>
        <div>
            <button onClick={handleDecrement}>-</button>
            <h5>How many times per day: {count}</h5>
            <button onClick={handleIncrement}>+</button>
        </div>
    </div>
    );
}
