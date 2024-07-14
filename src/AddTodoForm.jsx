import { useState } from "react";

function AddTodoForm({onAddTodo}) {
    const [todoTitle, setTodoTitle] = useState("");


    function handleTitleChange(event) {
        setTodoTitle(event.target.value);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        
        console.log(todoTitle);
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
