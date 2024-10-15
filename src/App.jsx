import { useState, useEffect, useRef } from "react";
import "./components/CSS/TodoListItem.module.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
    const [todoList, setTodoList] = useState(
        JSON.parse(localStorage.getItem("savedTodoList")) || []
    );
    const [isLoading, setIsLoading] = useState(true);

    const inputRef = useRef();

    async function fetchData() {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${
                    import.meta.env.VITE_AIRTABLE_API_TOKEN
                }`,
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
                id: todo.id,
                title: todo.fields.title,
            }));

            const sortedTodos = [...todos].sort((a, b) =>
                a.title.localeCompare(b.title)
            );

            setTodoList(sortedTodos);

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

    async function addTodo(newTodo) {
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${
                    import.meta.env.VITE_AIRTABLE_API_TOKEN
                }`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    title: newTodo.title,
                },
            }),
        };

        try {
            const url = `https://api.airtable.com/v0/${
                import.meta.env.VITE_AIRTABLE_BASE_ID
            }/${import.meta.env.VITE_TABLE_NAME}`;
            const response = await fetch(url, options);
           
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const updatedTodoList = [...todoList, newTodo].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
            setTodoList(updatedTodoList);

            
        } catch (error) {
            console.error("Error adding todo:", error);
        }

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    async function removeTodo(id) {
        const options = {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${
                    import.meta.env.VITE_AIRTABLE_API_TOKEN
                }`,
            },
        };

        try {
            const url = `https://api.airtable.com/v0/${
                import.meta.env.VITE_AIRTABLE_BASE_ID
            }/${import.meta.env.VITE_TABLE_NAME}/${id}`;

            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Deleted record:", result);

            setTodoList((prevTodos) =>
                prevTodos.filter((todo) => todo.id !== id)
            );
        } catch (error) {
            console.error("Failed to delete todo:", error);
        }

        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="App">
                            <nav>
                                <Link to="/">Home</Link>
                                <Link to="/new">New Todo</Link>
                            </nav>
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
                <Route path="/new" element={<NewTodo onAddTodo={addTodo} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
