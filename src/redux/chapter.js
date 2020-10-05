
import * as ActionTypes from './actionTypes'


export const Chapter = (state = {
    isLoading : true,
    errMess :   null,
    chapters : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHAPTER:
            return {...state, isLoading : false, errMess : null, chapters: action.payload}
        case ActionTypes.CHAPTER_LOADING:
            return {...state, isLoading : true, errMess : null, chapters : []}
        case ActionTypes.CHAPTER_FAILED:
            return {...state, isLoading : false, errMess : action.payload, chapters : []}
        default : 
            return state
    }
}