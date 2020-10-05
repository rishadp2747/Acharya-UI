import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {Courses} from './courses'
import {Subjects} from './subject'
import {Syllabus} from './syllabus'
import { Chapter } from './chapter'
import { Code } from './code'
import { Exercise } from './exercise'

export const configStore = () =>{
    const store = createStore(
        combineReducers({
            courses : Courses,
            subjects : Subjects,
            syllabus : Syllabus,
            chapters : Chapter,
            code : Code,
            exercises : Exercise,
        }),
        applyMiddleware(thunk)
        
    )
    return store
}