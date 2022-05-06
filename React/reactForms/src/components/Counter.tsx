import React, { useEffect, useState } from "react";
import '../App.css'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log('mounted');

        return () => {
            console.log('unmounted');
        }
    },[]);
    return (
        <div className="counter">
            Counter: {count}

            <button className="btn btn-dark" onClick={() => setCount(count+1)}>Increment</button>

        </div>
    );
}

export default Counter