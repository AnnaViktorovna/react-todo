const todoList = [
    { id: 1, title: "Complete lesson1" },
    { id: 2, title: "Complete lesson1" },
    { id: 3, title: "Complete lesson3" },
];

function TodoList() {
    return (
        <ul>
            {todoList.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;
