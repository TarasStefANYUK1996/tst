import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCalendarXmark} from "@fortawesome/free-solid-svg-icons"
import TaskItem from "./TaskItem/TaskItem";
import './addTask.css'
import { useState,useEffect } from "react";

const AddTask=(props)=>{
    const [optionValue, setOptionValue]=useState("active");
    const newTask=()=>{
        let inputs=document.querySelector(".todoText").value;
        props.show({
            text:inputs,
            state:"active"});
  
    }
    const  changeStatus=(event)=>{
        setOptionValue(event.target.value);
     
      
        }
        useEffect(() => props.changeOptVal(optionValue), [optionValue])


    return(
        <div className="wrapper">
            <div className="text__add-left">
            <input type="text" className="todoText" />
        <span className="textAdd" id="textAdd" onClick={newTask}>
            <FontAwesomeIcon icon={faPlus}/>
       
        </span>
            </div>
       
        <select className="options" value={optionValue} onChange={(e)=>changeStatus(e)}>
            <option value="active">Активные</option>
            <option value="complete">Завершенные</option>
            <option value="delete">Удаленные</option>
        </select>
        </div>
        
    )
}

export default AddTask;