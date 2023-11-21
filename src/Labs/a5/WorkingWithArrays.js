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
    const createTodo = async () => {
      const response = await axios.get(`${API}/create`);
      setTodos(response.data);
    };
    const removeTodo = async (todo) => {
      const response = await axios
        .get(`${API}/${todo.id}/delete`);
      setTodos(response.data);
    };
    const fetchTodoById = async (id) => {
      const response = await axios.get(`${API}/${id}`);
      setTodo(response.data);
    };
    const updateTitle = async () => {
      const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
      setTodos(response.data);
    };
    const postTodo = async () => {
      const response = await axios.post(API, todo);
      setTodos([...todos, response.data]);
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
      <textarea
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })}
        value={todo.description} type="text"
      />
      <input
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })}
        value={todo.due} type="date"
      />
      <label>
        <input
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })}
          value={todo.completed} type="checkbox"
        />
        Completed
      </label>
      <button onClick={postTodo} >
        Post Todo
      </button>
      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id}
              className="list-group-item">
                        <button
          onClick={() => fetchTodoById(todo.id)}
          className="btn btn-warning me-2 float-end" >
          Edit
        </button>
              <button
                onClick={() => removeTodo(todo)}
                className="btn btn-danger float-end" >
                Remove
              </button>
              <input
              checked={todo.completed}
              type="checkbox" readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            {todo.title}
          </li>
        ))}
      </ul>
      </div>
    );
  }
  export default WorkingWithArrays;