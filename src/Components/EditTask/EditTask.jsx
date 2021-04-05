import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { editTask } from "../../Actions";
import { useDispatch } from "react-redux";

function EditTask({ id }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modifiedTask, setModifiedTask] = useState({});

    const handleTask = (input) => {
        setModifiedTask(input);
    };

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(editTask({ modifiedTask: modifiedTask, id }));
        handleClose();
    };
    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Task </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        type="text"
                        placeholder="Edit your task here..."
                        onChange={(e) => handleTask(e.target.value)}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClick}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditTask;
