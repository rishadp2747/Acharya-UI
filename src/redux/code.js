
import * as ActionTypes from './actionTypes'


export const Code = (state = {
    isCompiling : true,
    errMess :   null,
    output : [],
    
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CODE:
            return {...state, isCompiling : false, errMess : null, output : action.payload}
        case ActionTypes.CODE_COMPILING:
            return {...state, isCompiling : true, errMess : null, output : []}
        case ActionTypes.CODE_FAILED:
            return {...state, isCompiling : false, errMess : action.payload, output : []}
        default : 
            return state
    }
}