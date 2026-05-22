import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(),isdone:false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewtask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(),isdone:false }];
    });
    setNewTodo("");
  };

  let updateTodovalue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };
  let upperCaseAll = () => {
    setTodos((prevtodos) =>
      prevtodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let upperCaseOne = (id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        }
        else{
            return todo;
        }
      })
    );
  };
  let Done = (id) =>{
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isdone:true,
          };
        }
        else{
            return todo;
        }
      })
    );
  }
  let Alldone = () =>{
    setTodos((prevtodos) =>
      prevtodos.map((todo) => {
        return {
          ...todo,
          isdone:true,
        };
      })
    );
  }
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        placeholder="add a task"
        onChange={updateTodovalue}
      />
      <br />
      <button onClick={addNewtask}>Add Task</button>
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
           
            <span style={todo.isdone? {textDecoration: "line-through"}:{}}>{todo.task}:</span>
            &nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Del</button>&nbsp;&nbsp;
            {/* <button onClick={() => upperCaseOne(todo.id)}>upperCaseone</button> */}
            <button onClick={() => Done(todo.id)}>Done</button>
          
          </li>
        ))}
      </ul>
      <br />
      {/* <button onClick={upperCaseAll}>upperCaseAll</button> */}
             <button onClick={Alldone}>all done</button>
    </div>
  );
}
