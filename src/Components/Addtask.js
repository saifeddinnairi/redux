import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Action";
import "../App.css";

const AddToDo = () => {
    const [newTodo, setNewTodo] = useState(null);
    const dispatch = useDispatch();
    console.log("newTodo", newTodo);
    return (
        <div className="ADD_TODO">
            <input className="Add-input"
                placeholder="new todo"
                type="Text"
                onChange={(e) => setNewTodo({ description: e.target.value })}
            ></input>
            <button className="Add-Btn" onClick={() => dispatch(addTodo(newTodo))}>Add</button>
        </div>
    );
};

export default AddToDo;