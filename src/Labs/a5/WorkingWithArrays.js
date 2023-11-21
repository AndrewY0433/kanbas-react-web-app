import axios from "axios";
import React, { useState, useEffect } from "react";
function WorkingWithArrays() {
  
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
      id: 1,
      title: "NodeJS Assignment",
      description: "Create a NodeJS server with ExpressJS",
      due: "2021-09-09",
      completed: false,
    });
    const [todos, setTodos] = useState([]);
    const fetchTodos = async () => {
      const response = await axios.get(API);
      setTodos(response.data);
    };
    useEffect(() => {
      fetchTodos();
    }, []);  
      return (
      <div>
        <h3>Working with Arrays</h3>
        <input
        value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: e.target.value })}
        className="form-control mb-2"
        type="number"
      />
        <input
        value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}
        className="form-control mb-2"
        type="text"
      />
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
            {todo.title}
          </li>
        ))}
      </ul>
      </div>
    );
  }
  export default WorkingWithArrays;