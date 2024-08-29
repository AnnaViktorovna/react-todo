
import { useState} from "react";
import InputWithLabel from "./InputWithLabel";

export default function AddTodoForm({ onAddTodo, inputRef }) {
    const [todoTitle, setTodoTitle] = useState("");

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
