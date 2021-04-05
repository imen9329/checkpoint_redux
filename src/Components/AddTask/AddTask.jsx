import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddTask.css";
import { addTask } from "../../Actions";
import { useDispatch } from "react-redux";

function AddTask() {
    const [newTask, setNewTask] = useState("");

    const handleChange = (input) => {
        setNewTask(input);
    };

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(addTask({ newTask: newTask }));
        setNewTask("");
    };

    return (
        <div className="AddTask">
            <h1>To Do list !</h1>
            <div className="addField">
                <Form.Control
                    id="addTaskInput"
                    size="50%"
                    type="text"
                    placeholder="Add task..."
                    onChange={(e) => handleChange(e.target.value)}
                    value={newTask}
                />
                <Button
                    variant="outline-primary"
                    style={{
                        border: "2px grey solid",
                        borderRadius: "5px",
                        color: "black",
                    }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;
