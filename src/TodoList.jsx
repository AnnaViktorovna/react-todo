import TodoListItem from "./TodoListItem";

export default function TodoList({todoList}) {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} title={todo.title} />
            ))}
        </ul>
    );
}
