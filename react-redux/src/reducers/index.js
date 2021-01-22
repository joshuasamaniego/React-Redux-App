import { FETCH_DOG_START, FETCH_DOG_SUCCESS, FETCH_DOG_FAIL } from "../actions"

const initialState = {
    dogImage: '',
    isFecthing: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_DOG_START):
            return({
                ...state,
                isFetching: true,
                error: '',
                dogImage: {}
            })
        case(FETCH_DOG_SUCCESS):
            return({
                ...state,
                dogImage: action.payload,
                isFecthing: false,
                error: ''
            })
        case(FETCH_DOG_FAIL):
            return({
                ...state,
                error: action.payload,
                isFecthing: false
            })
        default:
            return state;
    }
}