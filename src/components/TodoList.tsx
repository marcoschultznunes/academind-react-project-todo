import { useContext } from 'react';
import TodoContext from '../context/TodoContext';
import './TodoList.css';
import TodoListItem from './TodoListItem';

const TodoList:React.FC <{}> = (props) => {
    const {todos} = useContext(TodoContext);

    const renderedTodos = todos.map((todo) => <TodoListItem id={todo.id} text={todo.text} />);

    return <div className="todo-list-container">
        <ul>
            {renderedTodos}
        </ul>
    </div>;
};

export default TodoList;
