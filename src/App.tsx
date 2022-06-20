import React, { useEffect, useRef, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoContext from './context/TodoContext';
import Todo from './model/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const insertTodo = (todo:Todo) => {
    setTodos(prevTodos => prevTodos.concat(todo))
  }
  const deleteTodo = (id:string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }
  
  // const firstUpdate = useRef(true);
  // useEffect(() => {
  //   if (firstUpdate.current) {
  //     firstUpdate.current = false;
  //     return;
  //   }
  // }, [todos]);

  return <React.Fragment>
    <TodoContext.Provider value={{todos: todos, insertTodo, deleteTodo}}>
      <TodoInput />
      <TodoList /> 
    </TodoContext.Provider>
  </React.Fragment>;
};

export default App;
