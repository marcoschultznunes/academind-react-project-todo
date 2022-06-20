import './TodoListItem.css'

const TodoListItem:React.FC <{}> = (props) => {

    return <li>
        <div className="todo-item-container">
            <span>Todo #1</span>
            <button>x</button>
        </div>
    </li>
};

export default TodoListItem;
