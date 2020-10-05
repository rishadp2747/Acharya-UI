



export const initialState = {
    


      chapter : [
        {
            "ch_id": 1,
            "ch_type": "video",
            "ch_text": "c1bK3LSW7DA",
            "ch_bool": false,
            "ch_sub_id": 1,
            "ch_syllabus": 11,
            "ch_user_id": 1
        },


    ],

    exercises : [
        {
            "exercise_id" : 1,
            "exercise_type" : "Compiler + Problem",
            "exercise_chapter" : 1,
            "exercise_syllabus" : 11,
            "exercise_subject" : 1,
            "exercise_course" : 1,
            "exercise_question" : 'Palindrome program',
            "exercise_in_test1" : '10 10 10 ',
            "exercise_in_test2" : '',
            "exercise_in_test3" : '',
            "exercise_out_test1" : '10',
            "exercise_out_test2" : '',
            "exercise_out_test3" : '',
            "exercise_in_answer" : '' 
        }
    ]


}

export const Reducer = (state = initialState, action) => {
    return state 
}