
import * as ActionTypes from './actionTypes'


export const Subjects = (state = {
    isLoading : true,
    errMess :   null,
    subjects : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SUBJECTS:
            return {...state, isLoading : false, errMess : null, subjects : action.payload}
        case ActionTypes.SUBJECTS_LOADING:
            return {...state, isLoading : true, errMess : null, subjects : []}
        case ActionTypes.SUBJECT_FAILED:
            return {...state, isLoading : false, errMess : action.payload, subjects : []}
        default : 
            return state
    }
}