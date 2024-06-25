import "./App.css";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

function App() {
    return (
        <div className="App">
            <h1>My Todo List</h1>
            <TodoList />
            <AddTodoForm />
        </div>
    );
}

export default App;
