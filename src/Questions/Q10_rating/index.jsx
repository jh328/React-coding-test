import {useState} from "react";

export const Q10_rating = () => {
    const [score, setScore] = useState(0);
    const starArr = [1, 2, 3, 4, 5];

    return (
        <div style={styles.container}>
            {starArr.map((id) => (
                <span
                    key={id}
                    onClick={() => setScore(id)}
                    style={{
                        fontSize: '50px',
                        cursor: 'pointer',
                        color: id <= score ? '#FFD700' : '#ddd'
                    }}
                >
            ★
          </span>
            ))}
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        gap: "10px",
    },
    star: {
        fontSize: "40px",
        color: "#ddd",
        cursor: "pointer",
    }
}