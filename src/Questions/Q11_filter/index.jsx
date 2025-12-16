import {useState} from "react";

export const Q11_filter = ({items}) => {
    const [search, setSearch] = useState("");

    const filtered = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input type="text"
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}/>

            {filtered.length === 0 ? (
                <p>검색 결과가 없습니다.</p>
            ) : (
                <ul>
                    {filtered.map((item, index) => {
                        return (
                            <li
                                key={index}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            )
            }
        </div>
    )
}