import { useState } from 'react';
import '../TaskItem/TaskItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarXmark} from "@fortawesome/free-solid-svg-icons"
import {faCheckSquare} from "@fortawesome/free-solid-svg-icons"
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
const TaskItem=(props)=>{
    // const [text,setText]=useState(props.text);
    // const renderTask=()=>{

    // }
    // console.log(props);
    const deletes=()=>{
     
        return(
            <div className="delete">
            <FontAwesomeIcon icon={faCalendarXmark}>

            </FontAwesomeIcon>
            </div>
        );
    }

    const save=()=>{
        return(
            <div className="save" onClick={props.save}>
            <FontAwesomeIcon icon={faCheckSquare}>

            </FontAwesomeIcon>
        </div>
        );
    }
    const complete=()=>{
        return(
            <div className="save" onClick={props.save}>
            <FontAwesomeIcon icon={faArrowLeftRotate}>

            </FontAwesomeIcon>
        </div>
        );
    }
    return(
     
      
            <div className="text" onClick={props.delete} >{props.text.text}
           {deletes()}
        {props.text.state==="active"?save():complete()}
        {/* {props.text.state==="complete"?complete():null}
        {props.text.state==="delete"?"delite":null} */}
            </div>
            
            
       
      
    );
}
export default TaskItem;