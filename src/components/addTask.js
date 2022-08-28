import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./addTask.css";

function AddTask({ show, changeOptVal, optLength }) {
  const [optionValue, setOptionValue] = useState("active");
  const [inputVal, setInputVal] = useState("");
  function changeInput(e) {
    setInputVal(e.target.value);
  }
  const newTask = () => {
    setInputVal("");
    show({
      text: inputVal,
      state: "active",
    });
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
          value={inputVal}
        />
        <span
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
        <option value="active">Активные ({optLength.active})</option>
        <option value="complete">Завершенные ({optLength.complete})</option>
        <option value="delete">Удаленные ({optLength.delete})</option>
      </select>
    </div>
  );
}

export default AddTask;
