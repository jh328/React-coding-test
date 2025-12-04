//src/Q1_counter/index.jsx
import {useState} from "react";

export const Q1_counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    );
};
