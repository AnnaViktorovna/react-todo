<<<<<<< HEAD
import { useState} from "react";
import InputWithLabel from "./InputWithLabel";
=======
import { useState, useRef } from "react";
import InputWithLabel from "./assets/InputWithLabel";
>>>>>>> 2be90a5 ( Conditional Loading Indicator)

export default function AddTodoForm({ onAddTodo, inputRef }) {
    const [todoTitle, setTodoTitle] = useState("");
    const inputRef = useRef();

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const newTodo = {
            title: todoTitle,
            id: Date.now(),
        };
        onAddTodo(newTodo);
        setTodoTitle("");
        inputRef.current.focus();
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    id="todoTitle"
                    label="Title"
                    value={todoTitle}
                    onChange={handleTitleChange}
                    inputRef={inputRef}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
}
