import styles from './CSS/TodoListItem.module.css'

export default function TodoListItem({ title, id, onRemoveTodo }) {
    return (
        <>
            <li className={styles.ListItem}>
                {title}
                <button className={styles.button} onClick={() => onRemoveTodo(id)} type="button">
                    Remove
                </button>
            </li>
        </>
    );
}
