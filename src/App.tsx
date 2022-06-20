import React, { useEffect, useRef, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContext from './context/TodoContext';
import Todo from './model/Todo';

function App() {
  /* todos state is stored here */
  const [todos, setTodos] = useState<Todo[]>([]);

  /* insert and delete Todos functions */
  const insertTodo = (todo:Todo) => {
    setTodos(prevTodos => prevTodos.concat(todo))
  }
  const deleteTodo = (id:string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }
  
  const firstRender = useRef(true);  // ref used to determine if it is the first render
  
  /*  
    This useEffect does 2 things:
      => SAVES the todos in local storage if it is NOT the first render;
      => LOADS the todos from the local storage if it IS the first render.
  */
  useEffect(() => {
    try {
      if (firstRender.current) {
        setTodos(JSON.parse(localStorage.getItem('todosAppTodos')!));
        firstRender.current = false;
        return;
      }
      localStorage.setItem('todosAppTodos', JSON.stringify(todos));
    } catch(err) {
      console.log(err);
    }
  }, [todos]);

  /* TodoContext: provides the todos and the insert and delete functions */
  return <React.Fragment>
    <TodoContext.Provider value={{todos, insertTodo, deleteTodo}}>
      <TodoInput />
      <TodoList /> 
    </TodoContext.Provider>
  </React.Fragment>;
};

export default App;
