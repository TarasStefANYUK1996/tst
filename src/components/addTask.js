import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./addTask.css";

function AddTask({ show, changeOptVal }) {
  const [optionValue, setOptionValue] = useState("active");
  const [inputVal, setInputVal] = useState("");

  const newTask = async () => {
    show({
      text: inputVal,
      state: "active",
    });
    setInputVal("");
    document.querySelector(".todoText").value = "";
  };
  const changeInput = (e) => {
    setInputVal(e.target.value);
  };
  const changeStatus = (event) => {
    setOptionValue(event.target.value);
  };

  useEffect(() => changeOptVal(optionValue));

  return (
    <div className="wrapper">
      <div className="text__add-left">
        <input
          type="text"
          className="todoText"
          maxLength="400"
          onChange={(e) => changeInput(e)}
        />
        <span
          value={inputVal}
          className="textAdd"
          id="textAdd"
          onClick={newTask}
          role="presentation"
        >
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>

      <select
        className="options"
        value={optionValue}
        onChange={(e) => changeStatus(e)}
      >
        <option value="active">Активные</option>
        <option value="complete">Завершенные</option>
        <option value="delete">Удаленные</option>
      </select>
    </div>
  );
}

export default AddTask;
