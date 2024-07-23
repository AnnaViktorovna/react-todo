import { useState } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";


function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("savedTodoList")) || []
    );

    function addTodo(newTodo) {
        setTodoList((prevTodos) => [...prevTodos, newTodo]);
    }

    useEffect(() => {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

    return (
        <div className="App">
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default App;
