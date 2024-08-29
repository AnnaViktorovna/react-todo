import { useEffect, useRef } from "react";

export default function InputWithLabel({id, value, onChange, children, inputRef}) {
    useEffect(() => {
        inputRef.current.focus()
}, []);

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input 
            ref={inputRef} 
            id={id} 
            value={value} 
            onChange={onChange} 
            autoFocus  />
        </>
    );