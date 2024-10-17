import React, { useRef } from "react";
import AddTodoForm from "./AddTodoForm";
import { Link } from "react-router-dom";

export default function NewTodo({ onAddTodo }) {
    const inputRef = useRef();

    

    return (
        <div className="App">
            <nav>
                <Link to="/">Home</Link>
            </nav>
            <div>
                <h1>New Todo</h1>
                <AddTodoForm onAddTodo={onAddTodo} inputRef={inputRef} />
            </div>
        </div>
    );
}
