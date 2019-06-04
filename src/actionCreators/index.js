import {CHANGE_INPUT_VALUE, ADD_LIST, DELETE_LIST} from '../actionTypes';

export const getInputValueChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
};

export const getAddListAction = (value) => {
    return {
        type: ADD_LIST,
        value
    }
};

export const getDeleteListAction = (index) => {
    return {
        type: DELETE_LIST,
        index
    }
};