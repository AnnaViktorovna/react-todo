import { useState } from "react";

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleAddTodo(event) {
        event.preventDefault();
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        setTodoTitle('')
        event.target.reset();
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
