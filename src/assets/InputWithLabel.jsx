import { useEffect, useRef } from "react";

export default function InputWithLabel({ id, value, isFocused, onChange }) {
    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [isFocused]);

    return (
        <>
            <label htmlFor="todoTitle">Title</label>
            <input ref={inputRef} id={id} value={value} onChange={onChange} />
        </>
    );
}
