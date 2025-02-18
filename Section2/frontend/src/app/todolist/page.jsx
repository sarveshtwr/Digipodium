"use client";
import React, { useState } from "react";

const Todolist = () => {
  //let count = 1;

  //const [count, setCount] = useState(1);

  const [taskList, setTaskList] = useState([
    { text: "Learn React", completed: false },
    { text: "Learn Express", completed: false },
    { text: "Learn MongoDB", completed: false },
  ]);

  const addNewTask = (e) => {
    if (e.code === "Enter") {
      console.log(e.target.value);

      // clear input field
      e.target.value = "";
    }
  };

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-center text-3xl font-bold">TODO LIST</h1>
        <div className="mt-5 border shadow-lg rounded-lg">
          <div className="p-5 border-b">
            <input
              className="border-2 border-blue-300 px-4 py-2 w-full rounded"
              type="text"
              onKeyDown={addNewTask}
            />
          </div>
          <div className="p-5">
            {/* <h1 className="text-2xl">{count}</h1>
            <button
              onClick={() => {
                setCount(count + 1);
                console.log(count);
              }}
            >
              Add Count
            </button> */}
            {taskList.map((task, index) => {
              return (
                <div
                  key={index}
                  className="mb-3 rounded shadow p-4 text-white bg-blue-500"
                >
                  <p className="font-bold">{task.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
