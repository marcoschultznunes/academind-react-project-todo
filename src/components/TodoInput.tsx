import { useContext, useRef } from 'react';
import TodoContext from '../context/TodoContext';
import Todo from '../model/Todo';
import './TodoInput.css';

const TodoInput:React.FC <{}> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    const {insertTodo} = useContext(TodoContext);

    /* clickHandler: trims and adds the todo from the inputRef if it is not empty */
    const clickHandler = () => {
        const todoText = inputRef.current!.value.trim();
        if(todoText.length > 0){
            insertTodo(new Todo(todoText));
        }
        inputRef.current!.value = "";  // the input field is cleared after
    };

    /* enterHandler: triggers the clickHandler when pressing enter */
    const enterHandler = (e:React.KeyboardEvent) => {
        if(e.key === "Enter"){
            clickHandler();
        }
    }

    return <div className="todo-input-container">
        <label htmlFor='todo'>Todo text</label>
        <input type="text" name="todo" placeholder='Todo text' ref={inputRef} 
            onKeyDown={enterHandler}
        />
        <div>
            <button onClick={clickHandler} >
                Add Todo
            </button>
        </div>
    </div>;
};

export default TodoInput;
