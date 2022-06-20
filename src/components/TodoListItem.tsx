import { TodoType } from '../model/Todo';
import './TodoListItem.css'

const TodoListItem:React.FC <TodoType> = (props) => {

    return <li>
        <div className="todo-item-container">
            <span>{props.text}</span>
            <button>x</button>
        </div>
    </li>
};

export default TodoListItem;
