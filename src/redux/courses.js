
import * as ActionTypes from './actionTypes'


export const Courses = (state = {
    isLoading : true,
    errMess :   null,
    courses : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COURSES:
            return {...state, isLoading : false, errMess : null, courses : action.payload}
        case ActionTypes.COURSES_LOADING:
            return {...state, isLoading : true, errMess : null, courses : []}
        case ActionTypes.COURSES_FAILED:
            return {...state, isLoading : false, errMess : action.payload, courses : []}
        default : 
            return state
    }
}