import './App.css'
import {Q9_carousel} from "./Questions/Q9_carousel/index.jsx";

function App() {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <Q9_carousel items={numbers}/>
    );
}

export default App
