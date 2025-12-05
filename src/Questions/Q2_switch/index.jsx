import {useState} from "react";

export const Q2_switch = () => {
    const [on, setOn] = useState(false);

    return (
        <>
            <button onClick={() => {
                setOn(prev => !prev)
                console.log("prev = " + on);
                console.log("prev = " + setOn);
            }}>
                {on ? "켜짐" : "꺼짐"}
            </button>

            <p></p>
            <button onClick={() => setOn(!on)}>
                {on ? "켜짐" : "꺼짐"}
            </button>
        </>
    );
};