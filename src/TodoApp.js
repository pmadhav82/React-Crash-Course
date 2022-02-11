import { useState } from "react";

const TodoApp = () => {
  let [todos, setTodos] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [button, setButton] = useState("Add Task");

  const changeHandeler = (e) => {
    setInputValue(e.target.value);
  };
  const submitHandeler = (e) => {
    e.preventDefault();
    if (inputValue) {
      let newTodo = { id: new Date().getTime().toString(), text: inputValue };

      setTodos((todo) => {
        return [...todo, newTodo];
      });
      setInputValue("");
    } else {
      return alert("input field can not be empty..");
    }
    setButton("Add Task");
  };

  const deleteHandeler = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const editHandeler = (id) => {
    setButton("Edit Task");
    if (inputValue) {
      return;
    } else {
      const todoToEdit = todos.find((todo) => {
        return todo.id === id;
      });
      setInputValue(todoToEdit.text);

      const newTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(newTodos);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={changeHandeler}
          value={inputValue}
          placeholder="enter your task.."
        ></input>
        <button type="submit" onClick={submitHandeler}>
          {button}
        </button>
      </form>

      <div className="table">
        <table>
          {todos.length > 0 && (
            <tr>
              <th>Tasks</th>
              <th>Actions</th>
            </tr>
          )}
          {todos.map((todo) => {
            return (
              <tbody>
                <tr key={todo.id}>
                  <td>{todo.text}</td>

                  <td>
                    <button
                      onClick={() => {
                        editHandeler(todo.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        deleteHandeler(todo.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>

        {/* 

        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id} className="card">
                {todo.text} <button onClick={()=>{editHandeler(todo.id)}}>Edit</button>
                <button onClick={()=>{
deleteHandeler(todo.id)
                }}>Delete</button>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
};
export default TodoApp;
