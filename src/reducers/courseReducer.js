import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action){
    switch(types.CREATE_COURSE){
        case 'CREATE_COURSE':
            return [...state, Object.assign({}, action.course)];

        default:
            return state;
    }
}