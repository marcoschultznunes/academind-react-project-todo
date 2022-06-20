import './TodoInput.css';

const TodoInput:React.FC <{}> = (props) => {

    return <div className="todo-input-container">
        <label htmlFor='todo'>Todo text</label>
        <input type="text" name="todo" placeholder='Todo text'/>
        <div>
            <button>Add Todo</button>
        </div>
    </div>;
};

export default TodoInput;
