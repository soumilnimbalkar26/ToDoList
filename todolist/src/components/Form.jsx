import React from "react";
import { useState } from "react";

const Form = () => {
  const [Todo, setTodo] = useState();
  const [TodoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (Todo.trim() !== "") {
      setTodoList([...TodoList, Todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodoList = [...TodoList];
    updatedTodoList.splice(index, 1);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <form
        onSubmit={submitHandler}
        className="bg-gray-800 mx-4 py-4 px-6 flex flex-col items-center justify-center rounded-[20px] shadow-gray-400 shadow-xl"
      >
        <div className="mb-8 flex flex-col gap-2 items-center sm:flex-row">
          <label
            htmlFor="new-input"
            className="font-bold text-black bg-gray-200 px-4 py-2 rounded-md"
          >
            Todo
          </label>
          <input
            type="text"
            value={Todo}
            placeholder="Enter Your ToDo"
            className="bg-white rounded-md px-2 py-2"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 px-5 py-2 rounded-md font-semibold"
          >
            Add Item
          </button>
        </div>
      </form>
      <div className="mt-10">
        {TodoList.map((TodoItem, index) => (
          <>
            <div className="flex flex-row gap-5">
              <div className="bg-blue-500 py-2 px-6 rounded-md flex justify-between items-start mt-2">
                <h2 className="font-normal text-[18px]" key={index}>
                  {TodoItem}
                </h2>
              </div>
              <button
                onClick={deleteTodo}
                className="bg-red-600 px-5 rounded-md mt-2 font-semibold"
              >
                Delete
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Form;
