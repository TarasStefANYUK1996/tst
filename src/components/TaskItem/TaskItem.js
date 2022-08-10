import React from "react";
import '../TaskItem/TaskItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-solid-svg-icons"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
const TaskItem = (props) => {
    const deletes = () => {
        return (
            <div className="delete" onClick={props.delete} >
                <FontAwesomeIcon icon={faCalendarXmark}>
                </FontAwesomeIcon>
            </div>
        );
    }
    const save = () => {
        return (
            <div className="save" onClick={props.delete}>
                <FontAwesomeIcon icon={faCheckSquare}>
                </FontAwesomeIcon>
            </div>
        );
    }
    const complete = () => {
        return (
            <div className="save" onClick={props.delete}>
                <FontAwesomeIcon icon={faArrowLeftRotate}>
                </FontAwesomeIcon>
            </div>
        );
    }
    return (
        <div className="text">{props.text.text}
            {deletes()}
            {props.text.state === "active" ? save() : complete()}
        </div>
    );
}
export default TaskItem;