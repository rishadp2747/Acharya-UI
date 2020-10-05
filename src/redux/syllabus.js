
import * as ActionTypes from './actionTypes'


export const Syllabus = (state = {
    isLoading : true,
    errMess :   null,
    syllabus : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SYLLABUS:
            return {...state, isLoading : false, errMess : null, syllabus : action.payload}
        case ActionTypes.SYLLABUS_LOADING:
            return {...state, isLoading : true, errMess : null, syllabus : []}
        case ActionTypes.SYLLABUS_FAILED:
            return {...state, isLoading : false, errMess : action.payload, syllabus : []}
        default : 
            return state
    }
}