import React, {Component} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import {connect } from 'react-redux'

import {fetchCourses, fetchSubjects, fetchSyllabus} from '../redux/actionCreators'

import Header from './headerComponent';
import Home from './homeComponent';
import Footer from './footerComponent';
import Syllabus from './syllabusComponent';
import Display from './displayComponent';

const mapStateToProps = state =>{
    return {
        courses : state.courses,
        subjects : state.subjects,
        syllabus : state.syllabus,
        chapters : state.chapters,
        exercises : state.exercises
    }        
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses : () => {dispatch(fetchCourses())},
    fetchSubjects : () => {dispatch(fetchSubjects())},
    fetchSyllabus : (subjectid) => {dispatch(fetchSyllabus(subjectid))}
   

});


class Main extends Component {


    constructor(props){
        super(props)
        this.state = {
            page : null
        }
    }

    componentDidMount(){
        this.props.fetchCourses();
        this.props.fetchSubjects();

       
        
    }


    SelectedCourse = ({match}) => {
        const cid = parseInt(match.params.courseId)
        const sid = parseInt(match.params.subjectId)
        return(
            <Syllabus
               syllabus = {this.props.syllabus.syllabus}
               syllabusLoading = {this.props.syllabus.isLoading}
               SyllabusFailed = {this.props.syllabus.errMess}

               selectedSubject = {sid}
               selectedCourse = {cid}

                


                
            />
        );
      };

      Class = ({match}) => {
        const syllabusId = parseInt(match.params.syllabusId)
        

        
        //call the fetch function of both props
        return (
            <Display chId = {parseInt(match.params.chapterId)} syllabusId = {syllabusId} yId = {match.params.youtubeId} />
        )
        
    }



    render(){

        /*

        course = {this.props.courses.courses}
                subject = {this.props.subjects.subjects}
        <Syllabus course ={this.props.courses.courses.filter((course) => course.course_id === cid)}
                    subject={this.props.subjects.subjects.filter((subject) => subject.sub_id === sid)}
                   />
        */

       

        

       

        


        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={() => 
                        <Home 
                            course = {this.props.courses.courses} 
                            courseLoading = {this.props.courses.isLoading} 
                            courseFailed = {this.props.courses.errMess}

                            subjects = {this.props.subjects.subjects} 
                            subjectsLoading = {this.props.subjects.isLoading} 
                            subjectsFailed = {this.props.subjects.errMess}
                                                        
                            

                            />} />
                    <Route path='/syllabus/:courseId/:subjectId' component={this.SelectedCourse}/>
                    <Route path='/class/:syllabusId/:chapterId/:youtubeId' component={this.Class}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }


}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));