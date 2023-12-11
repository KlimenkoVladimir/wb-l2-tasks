import React, { useState } from "react";
import Task from "./Task";

const TasksList = ({
  tasks,
  setIsModalActive,
  filterOption,
  setFilterOption,
  setActiveTask,
  handleTaskStatus,
}) => {
  function createNewTask() {
    setIsModalActive(true);
  }

  return (
    <div className="side">
      <div className="sideHeader">
        <h3>Заметки</h3>
        <button onClick={createNewTask}>Создать</button>
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="created">по времени создания</option>
          <option value="deadline">по сроку выполнения</option>
        </select>
      </div>

      <div className="tasksList">
        {tasks.map((task, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveTask(index);
            }}
          >
            <input
              type="checkbox"
              onChange={() => handleTaskStatus(index)}
              checked={tasks[index].checked}
            ></input>
            <Task task={task} styleVariant={"taskShort"} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
