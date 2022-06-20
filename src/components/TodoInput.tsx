import { ReactEventHandler, useRef } from 'react';
import Todo from '../model/Todo';
import './TodoInput.css';

type TodoInputProps = {
    insertTodo: (todo:Todo) => void; 
};

const TodoInput:React.FC <TodoInputProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = () => {
        const todoText = inputRef.current!.value;
        props.insertTodo(new Todo(todoText));
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
