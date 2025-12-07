import {useState} from "react";

export const Q6_drop = ({list}) => {
    const [selected, setSelected] = useState(list[0]);

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSelect = (item) => {
        setSelected(item);

        setIsOpen(false);
    }

    return (
        <div style={styles.container}>
            <div
                onClick={handleToggle}
                style={styles.toggleButton}
            >
                {selected}
                <span style={styles.openBtn}>{isOpen ? "▲" : "▼"}</span>
            </div>

            {isOpen && (
                <ul style={styles.btnMenu}>
                    {list.map((item, index) => (
                        <li key={index}
                            style={styles.btn}
                            onClick={() => handleSelect(item)}
                        >{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

const styles = {
    container: {
        width: "100px",
        position: "relative",
    },
    toggleButton: {
        border: "1px solid white",
        width: "100px",
        padding: "10px",
        borderRadius: "10px"
    },
    openBtn: {
        float: "right"
    },
    btnMenu: {
        border: "1px solid grady",
        padding: "0",
        margin: "0",
        listStyle: "none"
    },
    btn: {
        padding: "10px",
        borderBottom: "1px solid #eee",
    }
}