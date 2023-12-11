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
      creationDate: "",
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
        <input
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
              creationDate: new Date().toLocaleDateString(),
            })
          }
        />
        <button onClick={addTask}>Создать</button>
        <button
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
