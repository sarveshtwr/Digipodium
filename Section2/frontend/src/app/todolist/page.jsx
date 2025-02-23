"use client";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";

const Todolist = () => {
  //let count = 1;

  //const [count, setCount] = useState(1);

  const [taskList, setTaskList] = useState([]);

  const addNewTask = (e) => {
    if (e.code === "Enter") {
      console.log(e.target.value);

      const newTask = { text: e.target.value, completed: false };
      setTaskList([newTask, ...taskList]);

      // clear input field
      e.target.value = "";
    }
  };

  const deleteTask = (index) => {
    console.log(index);

    const temp = taskList;
    temp.splice(index, 1);
    setTaskList([...temp]);
  };

  const toggleTask = (index) => {
    const temp = taskList;
    temp[index].completed = !temp[index].completed;
    setTaskList([...temp]);
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
          <div className="height-[60vh] p-5 overflow-y-auto">
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
                  className="flex justify-between mb-3 rounded shadow p-4 text-white bg-blue-500"
                >
                  <div>
                    {task.completed ? (
                      <p className="w-fit px-2 text-sm bg-green-500 text-white rounded-full">
                        Done
                      </p>
                    ) : (
                      <p className="w-fit px-2 text-sm bg-red-500 text-white rounded-full">
                        Not Done
                      </p>
                    )}
                    <p className="font-bold">{task.text}</p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        deleteTask(index);
                      }}
                      className="bg-white text-red-500 p-2 rounded"
                    >
                      <IconTrash />
                    </button>
                    <button
                      onClick={() => {
                        toggleTask(index);
                      }}
                      className="bg-white text-blue-500 p-2 rounded"
                    >
                      <IconPencil />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-xl font-bold my-6 text-center">
          {taskList.filter((t) => !t.completed).length} Task Pending{" "}
        </p>
      </div>
    </div>
  );
};

export default Todolist;
