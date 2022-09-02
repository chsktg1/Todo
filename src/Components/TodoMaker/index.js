import "./index.css";

const TodoMaker = (props) => {
  const { e } = props;
  //   console.log(e);
  //   console.log(e.completion);
  const { date_added, status, todo } = e;
  //   console.log(date_added, status, todo);
  return (
    <tr>
      <td>{todo}</td>
      <td>{status}</td>
      <td>{date_added}</td>
    </tr>
  );
};

export default TodoMaker;
