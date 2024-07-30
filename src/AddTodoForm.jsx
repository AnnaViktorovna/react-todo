import { useState } from "react";
import InputWithLabel from "./assets/InputWithLabel";

export default function AddTodoForm({ onAddTodo }) {
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
        
    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle}
                handleTitleChange={handleTitleChange} />
        </form>
    );
}
