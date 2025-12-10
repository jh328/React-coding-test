import './App.css'
import {Q8_modals} from "./Questions/Q8_modals/index.jsx";
import {useState} from "react";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>모달열기</button>

            <Q8_modals
                title="알림"
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <p>화이팅</p>
            </Q8_modals>
        </>
    );
}

export default App
