import {useState} from "react";

export const Q5_search = ({props}) => {
    const [search , setSearch] = useState("");


    const filtered = props.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h5>리액트 검색 문제</h5>

            <input type="text"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   placeholder="검색어 입력해주세요..."
            />

            <ul>
                {filtered.map((item,index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}