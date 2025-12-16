import './App.css'
import {Q11_filter} from "./Questions/Q11_filter/index.jsx";

function App() {
    const filters = ['사과', '딸기', '수박', '오렌지', '귤', '포도', '샤머', '망고', '키위', '바나나'];

    return (
        <Q11_filter items={filters}/>
    );
}

export default App
