export default function TodoListItem({ title, id, onRemoveTodo }) {
    return (
        <>
            <li>
                {title}
                <button onClick={() => onRemoveTodo(id)} type="button">
                    Remove
                </button>
            </li>
        </>
    );
}
