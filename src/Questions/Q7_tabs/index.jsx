import {useState} from "react";

export const Q7_tabs = ({items}) => {

    const [currentTab, setCurrentTab] = useState(0);

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.tabHeader}>
                    {items.map((item, index) => {
                        const isActive = index === currentTab;

                        return (
                            <button
                                key={index}
                                onClick={() => setCurrentTab(index)}
                                style={{
                                    ...styles.tabButton,
                                    backgroundColor: isActive ? 'black' : '#f0f0f0',
                                    fontWeight: isActive ? 'bold' : 'normal',
                                }}
                            >{item.name}</button>
                        )
                    })}
                </div>
                <div style={styles.tabContent}>
                    {items[currentTab].content}
                </div>
            </div>
        </div>
    )
};

const styles = {
    container: {
        width: '400px',
        margin: '20px auto',
        fontFamily: 'sans-serif',
    },
    tabHeader: {
        display: 'flex',
        gap: '10px',
        marginBottom: '10px',
    },
    tabButton: {
        padding: '10px 20px',
        cursor: 'pointer',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f0f0f0',
        transition: '0.3s',
    },
    tabContent: {
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        minHeight: '100px',
        backgroundColor: 'black ',
    }
};