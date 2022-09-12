import { useState } from "react";
import { TodoPara, StatusPara, DateAddPara, Div } from "../styledComponents";
import { AiFillDelete } from "react-icons/ai";

import "./index.css";
const TodoMaker = (props) => {
  const { e } = props;
  const { date_added, status, todo, pk } = e;

  const [first, setfirst] = useState(status);

  const { reloadAllTodos } = props;
  const deleteMe = async (event) => {
    const deleteData = {
      pk: e.pk,
    };
    const url = "http://localhost:3001/delete";
    const options = {
      method: "delete",
      body: JSON.stringify(deleteData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const res = await fetch(url, options);
    console.log(res);
    // console.log(await res.json());
    reloadAllTodos();
  };

  const openEditor = async () => {
    const editedTodo = prompt("Your Todo :" + todo, "edit your todo");
    console.log(editedTodo);

    if (editedTodo != null) {
      const putData = { todoData: editedTodo, pk };
      const options = {
        method: "PUT",
        body: JSON.stringify(putData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      const res = await fetch("http://localhost:3001/update/todo", options);
      const data = await res.text();
      console.log(data);
      reloadAllTodos();
    }
  };

  const changeStatus = async (event) => {
    await setfirst(event.target.value);
    const { e } = props;
    const data = { pk: e.pk, toUpdate: event.target.value };

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(
      "http://localhost:3001/update/status",
      options
    );

    reloadAllTodos();
    console.log(response);
    console.log("from change status", first);
  };

  return (
    <Div>
      <TodoPara onClick={openEditor}>{todo}</TodoPara>
      {/* <StatusPara>{status}</StatusPara> */}
      {/* <StatusPara> */}
      <select
        className="custom-select"
        style={{ width: "200px", marginTop: "6px" }}
        value={first}
        onChange={changeStatus}
      >
        <option value="completed">Completed</option>
        <option value="progress">Progress</option>
      </select>
      {/* </StatusPara> */}
      <DateAddPara>
        {date_added}
        <button type="button" className="btn btn-danger" onClick={deleteMe}>
          <AiFillDelete />
        </button>
      </DateAddPara>
    </Div>
  );
};

export default TodoMaker;
