import './App.css'
import {Q6_drop} from "./Questions/Q6_drop/index.jsx";
import {Q7_tabs} from "./Questions/Q7_tabs/index.jsx";

function App() {
    const tabData = [
        {name: '메일', content: <div>메일함</div>},
        {name: '로그인', content: <div>로그인</div>},
        {name: '회원가입', content: <div>회원가입</div>}
    ]

    return (
        <>
            <div>tab</div>
            <Q7_tabs items={tabData}/>
        </>
    );
}

export default App
