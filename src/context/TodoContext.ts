import React from "react";
import Todo from "../model/Todo";

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
