import { useEffect, useRef } from "react";
import styles from "./CSS/TodoListItem.module.css";
import PropTypes from "prop-types";

export default function InputWithLabel({
    id,
    value,
    onChange,
    children,
    inputRef,
}) {
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input
                className={styles.input}
                ref={inputRef}
                id={id}
                value={value}
                onChange={onChange}
                autoFocus
            />
        </>
    );
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node,
    inputRef: PropTypes.object.isRequired,
};
