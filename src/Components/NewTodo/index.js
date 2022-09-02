const NewTodo = () => {
  const addData = async () => {
    // const options={
    //     method:'post',
    //     body:JSON.stringify()
    // }
    // const response=await fetch('http://localhost:3000/add',)
  };

  return (
    <form>
      <label>
        <input type="text" />
      </label>
      <select>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button onSubmit={() => {}}>Add</button>
    </form>
  );
};

export default NewTodo;
