
import * as ActionTypes from './actionTypes'


export const Exercise = (state = {
    isLoading : true,
    errMess :   null,
    exercises : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_EXERCISE:
            return {...state, isLoading : false, errMess : null, exercises : action.payload}
        case ActionTypes.EXERCISE_LOADING:
            return {...state, isLoading : true, errMess : null, exercises : []}
        case ActionTypes.EXERCISE_FAILED:
            return {...state, isLoading : false, errMess : action.payload, exercises : []}
        default : 
            return state
    }
}