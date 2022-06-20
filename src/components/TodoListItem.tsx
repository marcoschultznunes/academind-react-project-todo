import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import { TodoType } from '../model/Todo';
import './TodoListItem.css'

/* TodoListItem: receives the id and the text of the Todo */
const TodoListItem:React.FC <TodoType> = (props) => {
    const {deleteTodo} = useContext(TodoContext);

    const clickHandler = () => {
        deleteTodo(props.id);
    };

    return <li>
        <div className="todo-item-container">
            <span>{props.text}</span>
            <button onClick={clickHandler}>x</button>  {/* delete Todo button */}
        </div>
    </li>;
};

export default TodoListItem;
