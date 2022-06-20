import { useContext, useRef } from 'react';
import TodoContext from '../context/TodoContext';
import Todo from '../model/Todo';
import './TodoInput.css';

const TodoInput:React.FC <{}> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const {insertTodo} = useContext(TodoContext);

    const clickHandler = () => {
        const todoText = inputRef.current!.value;
        insertTodo(new Todo(todoText));
        inputRef.current!.value = "";
    };

    return <div className="todo-input-container">
        <label htmlFor='todo'>Todo text</label>
        <input type="text" name="todo" placeholder='Todo text' ref={inputRef}/>
        <div>
            <button onClick={clickHandler}>Add Todo</button>
        </div>
    </div>;
};

export default TodoInput;
