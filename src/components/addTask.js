import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './addTask.css'
import { useState, useEffect } from "react";
// import Notice from "./notice/notice";
const AddTask = ({ show, changeOptVal }) => {
    const [optionValue, setOptionValue] = useState("active");
    const [inputVal, setInputVal] = useState("");

    const newTask = async() => {
      
        // message-box
        show({
            text: inputVal,
            state: "active"
        });
        setInputVal("");
        document.querySelector(".todoText").value = "";
        // const data = {
        //     text: inputVal,
        //     state: "active"
        // };
        
        // try {
        //   const response = await fetch('http://localhost:3001/posts', {
        //     method: 'POST', // или 'PUT'
        //     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   });
        //   const json = await response.json();
        
        // } catch (error) {
        //   console.error('Ошибка:', error);
        // }



    }
    const changeInput = (e) => {
        setInputVal(e.target.value);
    }
    const changeStatus = (event) => {
        setOptionValue(event.target.value);


    }

    useEffect(() => changeOptVal(optionValue))


    return (
        <div className="wrapper">
            <div className="text__add-left">
                <input type="text" className="todoText" onChange={e => changeInput(e)} />
                <span value={inputVal} className="textAdd" id="textAdd" onClick={newTask}>
                    <FontAwesomeIcon icon={faPlus} />

                </span>
            </div>
        
            <select className="options" value={optionValue} onChange={(e) => changeStatus(e)}>
                <option value="active">Активные</option>
                <option value="complete">Завершенные</option>
                <option value="delete">Удаленные</option>
            </select>
        </div>

    )
}

export default AddTask;