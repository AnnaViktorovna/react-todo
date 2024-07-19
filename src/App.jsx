import { useState } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);

    function addTodo(newTodo) {
        setTodoList((prevTodos) => [...prevTodos, newTodo]);
    }

    return (
        <div className="App">
            <h1>My Todo List</h1>
            <AddTodoForm onAddTodo={addTodo} />
            <TodoList todoList={todoList} />
        </div>
    );
}

export default App;
