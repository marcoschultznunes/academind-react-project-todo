import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Todo from './model/Todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const insertTodo = (todo:Todo) => {
    setTodos(prevTodos => prevTodos.concat(todo))
  }
  const deleteTodo = (id:string) => {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }

  return <React.Fragment>
    <TodoInput insertTodo={insertTodo} />
    <TodoList /> 
  </React.Fragment>;
};

export default App;
