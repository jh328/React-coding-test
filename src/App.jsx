import './App.css'
import {Q5_search} from "./Questions/Q5_search/index.jsx";

function App() {
    const items = ['apple', 'banana', 'orange', 'watermelon'];

    return (
        <>
            <Q5_search items={items}/>
        </>
    );
}

export default App
