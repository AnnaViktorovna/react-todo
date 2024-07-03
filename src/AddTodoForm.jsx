import { useState } from "react";

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleAddTodo(event) {
        event.preventDefault();
        console.log(todoTitle);
        if (props.onAddTodo) {
            props.onAddTodo(todoTitle);
        }
        setTodoTitle("");
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                value={todoTitle}
                onChange={(el) => setTodoTitle(el.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
