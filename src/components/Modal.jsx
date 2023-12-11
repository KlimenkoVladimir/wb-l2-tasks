import React, { useState } from "react";

const Modal = ({
  isModalActive,
  setIsModalActive,
  tasks,
  newTask,
  setNewTask,
}) => {
  function addTask() {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    setNewTask({
      title: "",
      description: "",
      deadline: "",
      deadlineTime: "",
      creationDate: "",
      checked: false,
    });
    console.log(newTask);

    setIsModalActive(false);
  }

  return (
    <div className={`modal ${isModalActive ? "modalActive" : ""}`}>
      <div className="createTask">
        <input
          type="text"
          placeholder="Название"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <textarea
          type="text"
          placeholder="Описание"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <input
          type="date"
          value={newTask.deadline}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              deadline: e.target.value,
              creationDate: new Date()
                .toISOString()
                .slice(0, 16)
                .replace("T", ", "),
            })
          }
        />
        <input
          type="time"
          value={newTask.deadlineTime}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              deadlineTime: e.target.value,
            })
          }
        />
        <button className="add" onClick={addTask}>
          Создать
        </button>
        <button
          className="cancel"
          onClick={() => {
            setIsModalActive(false);
          }}
        >
          Отмена
        </button>
      </div>
    </div>
  );
};

export default Modal;
