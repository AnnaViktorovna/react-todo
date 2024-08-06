function TodoListItem({ title, id, onRemoveTodo }) {
    return (
        <>
            <li>{title}
            <button onClick={() => onRemoveTodo(id)} type="button">
                Remove
            </button>
            </li>
        </>
    );
}

export default TodoListItem;
