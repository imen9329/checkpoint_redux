import { ADD_TASK } from "../Constants/actions-types";
import { TOGGLE_TASK } from "../Constants/actions-types";
import { EDIT_TASK } from "../Constants/actions-types";

const initialState = {
    todos: [
        { id: Math.random(), task: "learn web development ", isDone: false },
        { id: Math.random(), task: "get a job", isDone: false },
        { id: Math.random(), task: "buy a car", isDone: false },
        { id: Math.random(), task: "visit Capri-Italy", isDone: false },
    ],
};

export default function todosReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    { id: Math.random(), task: payload.newTask, isDone: false },
                ],
            };
        }
        case TOGGLE_TASK: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case EDIT_TASK: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { task: payload.modifiedTask }
                        : task
                ),
            };
        }

        default:
            return state;
    }
}
