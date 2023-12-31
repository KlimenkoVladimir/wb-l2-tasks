import React, { useState } from "react";
import TasksList from "./components/TasksList";
import Task from "./components/Task";
import Modal from "./components/Modal";

const Page = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    deadline: "",
    deadlineTime: "",
    creationDate: "",
    checked: false,
  });

  const [filterOption, setFilterOption] = useState("created");
  const sortedTasks = [...tasks].sort((a, b) => {
    if (filterOption === "created") {
      return (a.createdDate || "").localeCompare(b.createdDate || "");
    } else {
      console.log("else");
      return (`${a.deadline}, ${a.deadlineTime}` || "").localeCompare(
        `${b.deadline}, ${b.deadlineTime}` || ""
      );
    }
  });

  const [activeTask, setActiveTask] = useState(0);
  const [isModalActive, setIsModalActive] = useState(false);

  function deleteTask() {
    const updatedTasks = sortedTasks.filter(
      (task, index) => index !== activeTask
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  function updateTask() {
    setIsModalActive(true);
    setNewTask(sortedTasks[activeTask]);
    deleteTask();
  }

  function handleTaskStatus(index) {
    const updatedTasks = [...sortedTasks];
    console.log(index);
    const updatedTask = {
      ...updatedTasks[index],
      checked: !updatedTasks[index].checked,
    };

    updatedTasks[index] = updatedTask;

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  return (
    <div className="container">
      <TasksList
        tasks={sortedTasks}
        setIsModalActive={setIsModalActive}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        setActiveTask={setActiveTask}
        handleTaskStatus={handleTaskStatus}
      ></TasksList>
      <div className="main">
        {sortedTasks[activeTask] && (
          <div className="mainHeader">
            <button onClick={updateTask}>Изменить</button>
            <button onClick={deleteTask}>Удалить</button>
            {/* <input
              type="checkbox"
              onChange={() => handleTaskStatus(activeTask)}
              checked={sortedTasks[activeTask].checked}
            ></input> */}
          </div>
        )}
        <Task task={sortedTasks[activeTask]} styleVariant={"taskFull"}></Task>
      </div>

      <Modal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        tasks={tasks}
        newTask={newTask}
        setNewTask={setNewTask}
      ></Modal>
    </div>
  );
};

export default Page;
