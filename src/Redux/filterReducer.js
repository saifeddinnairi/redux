import { TOGGLE_FILTER } from './Type';

const filterReducer = (state="ALL", action ) => {

    switch (action.type) {
        case TOGGLE_FILTER:
            return action.payload;
        default:
            return state;
    }
}

export default filterReducer