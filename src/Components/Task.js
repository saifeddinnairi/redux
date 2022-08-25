import React from "react";
import ToDo from "./ListTask.js";
import "../App.css";

const ToDoList = ({ todos }) => {
    return (
        <div className="ToDos">
            {todos.map((el) => <ToDo key={el.id}  todo={el} />)
            }
        </div>
    );
};

export default ToDoList;