import {useEffect, useState} from "react";

export const Q4_api = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Loading...</p>
        return (
            <div>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.id}</li>
                    ))}
                </ul>
            </div>
        )
}