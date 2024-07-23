import { useState } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { useEffect } from "react";

const useSemiPersistentState = () => {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("savedTodoList")) || []
    );
    useEffect(() => {
        localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }, [todoList]);

    return [todoList, setTodoList];
};

function App() {
    const [todoList, setTodoList] = useSemiPersistentState();

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
