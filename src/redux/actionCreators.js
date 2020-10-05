import * as ActionTypes from './actionTypes'
import {baseUrl} from '../baseUrl'


export const fetchCourses = () => (dispatch) => {
    dispatch(coursesLoading(true))

    return fetch(baseUrl+'courses',{credentials: "same-origin"})
        .then(response => {
            if (response.ok){
                console.log("main")
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(courses => dispatch(addCourses(courses)))
        .catch(error => {
            dispatch(coursesFailed('Server Not Responding ! - ' + error.message)) 
        })

}

export const coursesLoading = () => ({
    type: ActionTypes.COURSES_LOADING
})

export const coursesFailed = (errmess) => ({
    type: ActionTypes.COURSES_FAILED,
    payload: errmess
})

export const addCourses = (courses) => ({
    type: ActionTypes.ADD_COURSES,
    payload : courses
})
 




export const subjectLoading = () => ({
    type : ActionTypes.SUBJECTS_LOADING
})


export const addSubject = (subjects) => ({
    type : ActionTypes.ADD_SUBJECTS,
    payload : subjects
})

export const subjectFailed = (errmess) => ({
    type: ActionTypes.SUBJECT_FAILED,
    payload: errmess
})


export const fetchSubjects = () => (dispatch) => {

    dispatch(subjectLoading(true))

    return fetch(baseUrl+'subjects')
        .then(response => {
            if (response.ok){
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(subjects => dispatch(addSubject(subjects)))
        .catch(error => {
            dispatch(subjectFailed('Server Not Responding ! - ' + error.message)) 
        })
}







export const syllabusLoading = () => ({
    type : ActionTypes.SYLLABUS_LOADING
})


export const addSyllabus = (syllabus) => ({
    type : ActionTypes.ADD_SYLLABUS,
    payload : syllabus
})

export const syllabusFailed = (errmess) => ({
    type: ActionTypes.SYLLABUS_FAILED,
    payload: errmess
})


export const fetchSyllabus = (subjectId) => (dispatch) => {

    dispatch(syllabusLoading(true))

    return fetch(baseUrl+'syllabus/'+subjectId)
        .then(response => {
            if (response.ok){
                console.log("here")
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(syllabus => dispatch(addSyllabus(syllabus)))
        .catch(error => {
            dispatch(syllabusFailed('Server Not Responding ! - ' + error.message)) 
        })
}




export const chapterLoading = () => ({
    type : ActionTypes.CHAPTER_LOADING
})


export const addChapter = (chapter) => ({
    type : ActionTypes.ADD_CHAPTER,
    payload : chapter
})

export const chapterFailed = (errmess) => ({
    type: ActionTypes.CHAPTER_FAILED,
    payload: errmess
})


export const fetchChapter = () => (dispatch) => {

    dispatch(chapterLoading(true))

    return fetch(baseUrl+'chapter/')
        .then(response => {
            if (response.ok){
                console.log("here")
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(chapter => dispatch(addChapter(chapter)))
        .catch(error => {
            dispatch(chapterFailed('Server Not Responding ! - ' + error.message)) 
        })
}




export const exerciseLoading = () => ({
    type : ActionTypes.EXERCISE_LOADING
})


export const addExercise = (exercise) => ({
    type : ActionTypes.ADD_EXERCISE,
    payload : exercise
})

export const exerciseFailed = (errmess) => ({
    type: ActionTypes.EXERCISE_FAILED,
    payload: errmess
})


export const fetchExercise = () => (dispatch) => {

    dispatch(exerciseLoading(true))

    return fetch(baseUrl+'exercise')
        .then(response => {
            if (response.ok){
                console.log("here")
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(exercise => dispatch(addExercise(exercise)))
        .catch(error => {
            dispatch(chapterFailed('Server Not Responding ! - ' + error.message)) 
        })
}







export const codeCompiling = () => ({
    type : ActionTypes.CODE_COMPILING
})


export const addCode = (code) => ({
    type : ActionTypes.ADD_CODE,
    payload : code
})

export const codeFailed = (errmess) => ({
    type: ActionTypes.CODE_FAILED,
    payload: errmess
})


export const postCode = (val) => (dispatch) => {

    dispatch(codeCompiling(true))

    const coder = {
        "code" : val
    }

    return fetch(baseUrl+'compile', {
        method: "POST",
        body: JSON.stringify(coder),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
            if (response.ok){
                
                
                return response

            }else{
                console.log(response)
                let error = new Error('Server Not Responding' + response.status)
                throw error
            }
        }, error => {
            let errMess = new Error(error.message);
            throw errMess
        })
        .then(response => response.json())
        .then(result => {dispatch(addCode(result))})
        .catch(error => {

            dispatch(chapterFailed('Server Not Responding ! - ' + error.message)) 
        })
}