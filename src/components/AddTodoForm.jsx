import { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

export default function AddTodoForm({ onAddTodo, inputRef }) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();

        if (todoTitle.trim() === "") {
            alert("Please enter a title for the todo.");
            return;
        }

        const newTodo = {
            title: todoTitle,
            id: Date.now(),
        };

        onAddTodo(newTodo);
        setTodoTitle("");
        inputRef.current.focus();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
                id="todoTitle"
                label="Title"
                value={todoTitle}
                onChange={handleTitleChange}
                inputRef={inputRef}
            />
            <button className="button" type="submit">
                Add
            </button>
        </form>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
    inputRef: PropTypes.object.isRequired,
};
