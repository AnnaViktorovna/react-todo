import { useState } from "react";

function AddTodoForm(props) {
    const [todoTitle, setTodoTitle] = useState("");

    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.elements.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        setTodoTitle('');
        event.target.reset();
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={(element) => setTodoTitle(element.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
