import {
  MainDiv,
  TodoParaHeading,
  StatusParaHeading,
  DateAddParaHeading,
} from "../styledComponents";
import Header from "../Header";
import { useEffect, useState, useRef } from "react";
import TodoMaker from "../TodoMaker";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const Todos = () => {
  const [status, updateStatus] = useState("loading");
  const [allTodos, updateTodos] = useState([]);
  const orderElement = useRef(0);
  const [compTodo, setCompTodo] = useState([]);
  const [order, setOrder] = useState("asc");
  useEffect(() => {
    getCompletedTodoData();
  }, []);

  const getCompletedTodoData = async () => {
    let option = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    };

    const response = await fetch("http://localhost:3001/completed", option);

    const data1 = await response.json();

    setCompTodo(data1);
  };
  const navigate = useNavigate();
  const changeOrder = () => {
    setOrder(orderElement.current.value);
    const newAllTodos = allTodos.sort((a, b) => {
      if (
        new Date(a["date_added"]) < new Date(b["date_added"]) &&
        orderElement.current.value === "desc"
      ) {
        console.log("herere");
        return 1;
      } else {
        console.log("1212");
        return -1;
      }
    });
    updateTodos(newAllTodos);
    console.log(newAllTodos);
    console.log(orderElement.current.value);
  };

  const loadData = async () => {
    let option = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    };
    const response = await fetch("http://localhost:3001", option);

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
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    };
    console.log(options);
    const response = await fetch("http://localhost:3001/add", options);
    const data = await response.text();
    console.log(data);
    setfirst({ ...first, todoText: "", status: "progress" });
    reloadAllTodos();
  };

  const logout = () => {
    Cookies.remove("jwt");
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <hr />
      <h1 style={{ textAlign: "center" }}>Add a Todo</h1>
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
            <DateAddParaHeading>
              Date_added
              <select
                value={order}
                onChange={changeOrder}
                className="custom-select"
                style={{ width: "150px" }}
                ref={orderElement}
              >
                <option value="asc">Added First</option>
                <option value="desc">Added Last</option>
              </select>
            </DateAddParaHeading>
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
