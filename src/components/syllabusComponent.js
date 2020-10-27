import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles';

import {connect } from 'react-redux'

import {fetchSyllabus} from '../redux/actionCreators'

import { Box } from '@material-ui/core';

import Banner from './bannerComponent';

import Chapter from './chapterComponent';


import Loader from './loadingComponent'
import Alert from '@material-ui/lab/Alert';






const styles = theme => ({

    container: {
        margin: "0px",
    },
    vtabs: {
        maxWidth: "200px",
        borderRight : "1px solid rgba(0,0,0,0.4)",
        
    },
    vtab : {

        fontSize : "10px",

    }
})



const mapStateToProps = state =>{
    return {
        courses : state.courses,
        subjects : state.subjects,
        syllabus : state.syllabus,
        chapters : state.chapters,
    }        
}

const mapDispatchToProps = (dispatch) => ({
    fetchSyllabus : (subjectid) => {dispatch(fetchSyllabus(subjectid))}

});



class Syllabus extends Component{

    componentDidMount(){
        this.props.fetchSyllabus(this.props.selectedSubject)
    }




    banner = ()=> {
        
        return (
            <Banner course = {this.props.courses.courses.filter((course) => course.id === this.props.selectedCourse)}
                    subject = {this.props.subjects.subjects.filter((subject) => subject.id === this.props.selectedSubject)}/>
        )
    }


    render() {


        


        return(

            <Fragment>
            

                {
                    this.props.syllabus.isLoading ?
                        <Box display="flex" p={5} justifyContent="center" style={{width : "100%"}}> 
                            <Loader/>
                        </Box>
                    :
                        this.props.syllabus.errMess ?
                            <Box display="flex" p={5} justifyContent="center" style={{width : "100%"}}>
                                <Alert severity="error">{this.props.subjectsFailed}</Alert>
                                                
                            </Box>
                        :


                            <Fragment>
                               
                                {
                                   this.banner()
                                   //console.log(this.props.syllabus.syllabus)
                                }
                                <Chapter syllabus = {this.props.syllabus.syllabus}/>

                                
                            </Fragment>

                            

                            

                }

                
                
                
            </Fragment>
        )
    }
}


Syllabus.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Syllabus));

