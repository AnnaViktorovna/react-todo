import { useState, useEffect, useRef } from "react";
import "./components/CSS/App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("savedTodoList")) || []
    );
    const [isLoading, setIsLoading] = useState(true);

    const inputRef = useRef();

    async function fetchData() {
        const apiKey = import.meta.env.VITE_AIRTABLE_API_TOKEN;

        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        };

        try {
            const url = `https://api.airtable.com/v0/${
                import.meta.env.VITE_AIRTABLE_BASE_ID
            }/${
                import.meta.env.VITE_TABLE_NAME
            }?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`${response.status}`);
            }
            const data = await response.json();

            const todos = data.records.map((todo) => ({
                 id: todo.id, title: todo.fields.title 
                }));

            const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));

            const storedTodos = JSON.parse(localStorage.getItem("savedTodoList"));
            const finalTodos = storedTodos && storedTodos.length > 0 ? storedTodos : sortedTodos;

            setTodoList(finalTodos);
            localStorage.setItem("savedTodoList", JSON.stringify(finalTodos));
            setIsLoading(false);
        } catch (error) {
            console.error(error.message);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!isLoading) {
            
            localStorage.setItem("savedTodoList", JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    function addTodo(newTodo) {
        const updatedTodoList = [...todoList, newTodo].sort((a, b) => a.title.localeCompare(b.title));
        setTodoList(updatedTodoList);
        inputRef.current.focus();
    }

    function removeTodo(id) {
        const filterTodo = todoList.filter((todo) => todo.id !== id);
        setTodoList(filterTodo);
        inputRef.current.focus();
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="App">
                            <h1>My Todo List</h1>
                            <AddTodoForm
                                onAddTodo={addTodo}
                                inputRef={inputRef}
                            />

                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <TodoList
                                    todoList={todoList}
                                    onRemoveTodo={removeTodo}
                                />
                            )}
                        </div>
                    }
                />
                <Route path="/new" element={<h1>New ToDo List</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
