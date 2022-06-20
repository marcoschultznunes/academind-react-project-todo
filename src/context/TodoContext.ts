import React from "react";
import Todo from "../model/Todo";
 
/* 
  The TodoContext provides the list, and the insert and delete functions of the Todos
  (provided in App.tsx)
*/
type TodoContextObj = {
  todos: Todo[];
  insertTodo: (todo:Todo) => void;
  deleteTodo: (id:string) => void;
};
const TodoContext = React.createContext<TodoContextObj>({
  todos: [],
  insertTodo: () => {},
  deleteTodo: () => {}
});

export default TodoContext;
