import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoList from "./Components/Task.js";
import AddToDo from "./Components/Addtask.js";
import "./App.css";
import { filterTodo } from "./Redux/Action";
import cx from "classnames";

function App() {
    const todos = useSelector((state) => state.toDoReducer.todos);
    const filter = useSelector((state) => state.filterReducer);
    const dispatch = useDispatch();
    return (
        <div className="App">
            <h2>
            To Do List
            </h2>
            <AddToDo />
            <div className="Filters">
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === "ALL",
                    })}
                    onClick={() => dispatch(filterTodo("ALL"))}
                >
                    ALL
                </button>
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === true,
                    })}
                    onClick={() => dispatch(filterTodo(true))}
                >
                    Done
                </button>
                <button
                    className={cx("Filters-Btn", {
                        selected: filter === false,
                    })}
                    onClick={() => dispatch(filterTodo(false))}
                >
                    NotDone
                </button>
            </div>
            <div className="ToDoList">
                <ToDoList
                    todos={
                        filter === "ALL"
                            ? todos
                            : todos.filter((el) => el.isDone === filter)
                    }
                />
            </div>
        </div>
    );
}

export default App;