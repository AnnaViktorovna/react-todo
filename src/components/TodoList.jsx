import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

export default function TodoList({ todoList, onRemoveTodo }) {
    return (
        <>
            <ul>
                {todoList.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        onRemoveTodo={onRemoveTodo}
                    />
                ))}
            </ul>
        </>
    );
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
                .isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};
