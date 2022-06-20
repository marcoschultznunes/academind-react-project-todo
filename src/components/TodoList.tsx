import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList:React.FC <{}> = (props) => {

    return <div className="todo-list-container">
        <ul>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </ul>
    </div>;
};

export default TodoList;
