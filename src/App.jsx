const todoList = [
    { id: 1, title: "Complete lesson1" },
    { id: 2, title: "Complete lesson1" },
    { id: 3, title: "Complete lesson3" },
];

function App() {
    return (
        <div className="App">
            <h1>My Todo List</h1>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
