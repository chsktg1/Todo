import {
  MainDiv,
  TodoParaHeading,
  StatusParaHeading,
  DateAddParaHeading,
} from "../styledComponents";

import { useEffect, useState } from "react";
import TodoMaker from "../TodoMaker";
import "./index.css";

const Todos = () => {
  const [status, updateStatus] = useState("loading");
  const [allTodos, updateTodos] = useState([]);

  const [compTodo, setCompTodo] = useState([]);
  useEffect(() => {
    getCompletedTodoData();
  }, []);

  const getCompletedTodoData = async () => {
    const response = await fetch("http://localhost:3001/completed");

    const data1 = await response.json();

    setCompTodo(data1);
  };

  const loadData = async () => {
    const response = await fetch("http://localhost:3001");

    const data = await response.json();
    // console.log(data);
    updateTodos(data);
  };
  useEffect(() => {
    loadData();
    updateStatus("fetched");
  }, []);

  const reloadAllTodos = () => {
    loadData();
    getCompletedTodoData();
  };

  const [first, setfirst] = useState({ todoText: "", status: "progress" });

  const addData = async (e) => {
    const postData = {
      todo: first.todoText,
      status: first.status,
      date_added: new Date().toUTCString(),
    };
    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const response = await fetch("http://localhost:3001/add", options);
    const data = await response.text();
    console.log(data);
    setfirst({ ...first, todoText: "", status: "progress" });
    reloadAllTodos();
  };

  return (
    <div>
      <div className="formAddTodo">
        <label>
          Todo:
          <input
            type="text"
            value={first.todoText}
            onChange={(e) => {
              setfirst({ ...first, todoText: e.target.value });
            }}
          />
        </label>
        <br />
        <label>
          Select Status:
          <select
            className="custom-select"
            value={first.status}
            onChange={(e) => {
              setfirst({ ...first, status: e.target.value });
            }}
          >
            <option value="progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <br />
        <div>
          <button type="button" className="btn btn-primary" onClick={addData}>
            Add Todo
          </button>
        </div>
      </div>

      {/* <h1>All Todos</h1> */}
      <h2 style={{ textAlign: "center" }}>Todos in Progress</h2>

      {status === "loading" ? (
        <p>Loading</p>
      ) : (status === "fetched") & (allTodos.length === 0) ? (
        <p>Add your first todo</p>
      ) : (
        <MainDiv>
          <div className="todoHeader">
            <TodoParaHeading>Todo</TodoParaHeading>
            <StatusParaHeading>Status</StatusParaHeading>
            <DateAddParaHeading>Date_added</DateAddParaHeading>
          </div>

          {allTodos.map((e) => (
            <TodoMaker key={e.pk} e={e} reloadAllTodos={reloadAllTodos} />
          ))}
          <p style={{ fontWeight: "bold" }}>Completed Todos</p>
          <div>
            {compTodo.map((e) => (
              <TodoMaker e={e} key={e.pk} reloadAllTodos={reloadAllTodos} />
            ))}
          </div>
        </MainDiv>
      )}
    </div>
  );
};

export default Todos;
