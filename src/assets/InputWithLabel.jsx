import { Fragment } from "react";

export default function InputWithLabel({todoTitle,handleTitleChange})  {
    return (
    <Fragment>
        <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" name="todoTitle" value={todoTitle} onChange={handleTitleChange} />
            <button type="submit">Add</button>
    </Fragment>
);
}