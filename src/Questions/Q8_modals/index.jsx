import {useEffect, useRef} from "react";

export const Q8_modals = ({title, children, isOpen, onClose}) => {

    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <div>
            <dialog ref={dialogRef}>
                <h2>{title}</h2>
                {children}
                <button onClick={onClose}>닫기</button>
            </dialog>
        </div>
    )
}

