import {useState} from "react";

export const Q9_carousel = ({items}) => {
    const [idx, setIdx] = useState(0);

    const handleNext = () => {
        setIdx((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    return (
        <div style={styles.container}>
            <button onClick={handlePrev}>이전</button>
            <div style={styles.card}>{items[idx]}</div>
            <button onClick={handleNext}>다음</button>
        </div>
    );
}

const styles = {
    container: { display: 'flex', alignItems: 'center', gap: '10px' },
    card: {
        width: '100px',
        height: '100px',
        border: '2px solid #333',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        background: '#0e0e0e'
    }
};