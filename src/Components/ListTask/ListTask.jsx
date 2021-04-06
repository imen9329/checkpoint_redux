import React from "react";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function ListTask() {
    const todos = useSelector((state) => state.todosReducer.todos);

    const [todosToDisplay, setTodosToDisplay] = useState(todos);
    useEffect(() => {
        setTodosToDisplay(todos);
    }, [todos]);
    const handleClick = () => {
        setTodosToDisplay(todos.filter((task) => task.isDone === true));
    };
    const handleClick2 = () => {
        setTodosToDisplay(todos.filter((task) => task.isDone === false));
    };
    const handleClick3 = () => {
        setTodosToDisplay(todos);
    };

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success" onClick={handleClick}>
                    Show Done
                </Button>
                <Button variant="outline-danger" onClick={handleClick2}>
                    Show Not Done
                </Button>
                <Button variant="info" onClick={handleClick3}>
                    Remove All Filters
                </Button>
            </div>
            {todosToDisplay.map((task, index) => (
                <Task toDo_task={task} key={index} index={index} />
            ))}
        </div>
    );
}

export default ListTask;
