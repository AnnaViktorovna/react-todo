import {useState} from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 1, title: "Complete lesson1" },
        { id: 2, title: "Complete lesson1" },
        { id: 3, title: "Complete lesson3" },
    ]);

    const addTodo = (title) => {
        const newTodo = { id: todoList.length + 1, title };
        setTodoList([...todoList, newTodo]);
    };

    return (
        <div className="App">
            <h1>My Todo List</h1>
            <TodoList todoList={todoList}/>
            <AddTodoForm onAddTodo={addTodo}/>
            
        </div>
    );
}

export default App;
