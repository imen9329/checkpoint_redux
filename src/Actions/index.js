import { ADD_TASK } from "../Constants/actions-types";
import { TOGGLE_TASK } from "../Constants/actions-types";
import { EDIT_TASK } from "../Constants/actions-types";
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const toggleTask = (payload) => {
    return {
        type: TOGGLE_TASK,
        payload: payload,
    };
};
export const editTask = (payload) => {
    return {
        type: EDIT_TASK,
        payload: payload,
    };
};
