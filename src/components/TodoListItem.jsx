import styles from "./CSS/TodoListItem.module.css";
import PropTypes from "prop-types";

export default function TodoListItem({ title, id, onRemoveTodo }) {
    return (
        <>
            <li className={styles.ListItem}>
                {title}
                <button
                    className={styles.button}
                    onClick={() => onRemoveTodo(id)}
                    type="button"
                >
                    Remove
                </button>
            </li>
        </>
    );
}

TodoListItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};
