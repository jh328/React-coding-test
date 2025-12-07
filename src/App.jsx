import './App.css'
import {Q6_drop} from "./Questions/Q6_drop/index.jsx";

function App() {
    const data = ['1번', '2번', '3번', '4번', '5번'];


    return (
        <>
            <Q6_drop list={data}/>
        </>
    );
}

export default App
