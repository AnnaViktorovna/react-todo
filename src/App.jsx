import { useState, useEffect, useRef } from "react";
import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const inputRef = useRef() ;

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
                    },
                });
            }, 2000);
        }).then((result) => {
            setTodoList(result.data.todoList);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem("savedTodoList", JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

  

    function addTodo(newTodo) {
        setTodoList((prevTodos) => [...prevTodos, newTodo]);
        inputRef.current.focus()
    }

    function removeTodo(id) {
        const filterTodo = todoList.filter((todo) => todo.id !== id);
        setTodoList(filterTodo);
    }

    return (
        <>
            <div className="App">
                <h1>My Todo List</h1>
                <AddTodoForm onAddTodo={addTodo} inputRef={inputRef}/>
                
                {isLoading ? <p>Loading...</p> :<TodoList todoList={todoList} onRemoveTodo={removeTodo} /> }
            </div>
        </>
    );
}

export default App;
