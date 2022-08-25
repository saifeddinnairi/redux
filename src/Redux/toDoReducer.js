import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    TOGGLE_TODO,
} from "./Type";

const initialState = {
    filter: "ALL",
    todos: [
        {
            id: "1",
            description: "1st thing to do",
            isDone: true,
        },
        {
            id: "2",
            description: "2nd thing to do",
            isDone: false,
        },
    ],
};

const toDoReducer = (state = initialState, { type, payload }) => {
    // console.log("state:",state);
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== payload),
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((el) =>
                    el.id === payload ? { ...el, isDone: !el.isDone } : el
                ),
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((el) =>
                    el.id === payload.id ? payload : el
                ),
            };
        // case TOGGLE_FILTER:
        //     return {
        //         ...state,
        //         filter:payload
        //     };
        default:
            return state;
    }
};
export default toDoReducer;