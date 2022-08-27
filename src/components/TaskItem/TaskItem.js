import React from "react";
import "./TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarXmark,
  faCheckSquare,
  faArrowLeftRotate,
} from "@fortawesome/free-solid-svg-icons";

function Deletes({ deletesj }) {
  return (
    <div className="delete" onClick={deletesj} role="presentation">
      <FontAwesomeIcon icon={faCalendarXmark} />
    </div>
  );
}
function Save({ deletesj }) {
  return (
    <div className="save" onClick={deletesj} role="presentation">
      <FontAwesomeIcon icon={faCheckSquare} />
    </div>
  );
}
function Complete({ deletesj }) {
  return (
    <div className="save" onClick={deletesj} role="presentation">
      <FontAwesomeIcon icon={faArrowLeftRotate} />
    </div>
  );
}

function TaskItem({ text, deleted }) {
  return (
    <div className="text">
      {text.text}
      <Deletes deletesj={deleted} />
      {text.state === "active" ? (
        <Save deletesj={deleted} />
      ) : (
        <Complete deletesj={deleted} />
      )}
    </div>
  );
}
export default TaskItem;
