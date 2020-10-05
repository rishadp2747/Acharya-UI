import React, {Fragment, Component} from 'react';
import {  withStyles} from '@material-ui/core/styles';
import {Typography, Box} from '@material-ui/core'
import { Container, Divider, Grid, Paper} from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import Alert from '@material-ui/lab/Alert';


import slider from '../img/slider.png';
import ccrc from '../img/ccrc.png';

import Course from './courseComponent';
import Contributer from './contributerComponent';
import Loader from './loadingComponent'


const styles = theme => ({
    col : {
        textAlign : "center",
    },
    button : {
        margin : "10px"
    },
    content : {
        marginTop : "40px",
        padding : "20px",
    },
    title : {
        margin : "40px 0px 40px 0px",
        textAlign : "center",
    }
});

class Home extends Component{

    render(){

        const {classes} = this.props;

        function onSignIn(googleUser) {

            var id_token = googleUser.getAuthResponse().id_token;
            console.log(id_token)

          }

        return (
            <Fragment>
                <Container maxWidth="md">
                <Grid  container spacing={5} wrap="wrap" style={{margin : "20px"}} >
                    <Grid item md={4} className={classes.col}>
                        <img src={slider} alt="slider" width={200}></img>
                        <Typography variant="h5">Welcome To</Typography>
                        <Typography variant="h3">ACHARYA</Typography>
                    </Grid>
                    <Grid container item  className={classes.col} md={8} alignItems="center" justify="center">
                        <Paper elevation={2} style={{padding : "20px", textAlign : "center"}}>
                            <img  alt="ccrc" src={ccrc} width={100}></img>
                            <Typography variant="h4">Open Smart Education Initiative by</Typography>
                            <Typography variant="h3">CCRC - FISAT</Typography>
                            <Box display="flex" m={5} justifyContent="center">
                            <GoogleLogin
                                clientId="393621003754-ks9sq0f4ru0nrmrd8adpu5kjur4bagnd.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={onSignIn}
                                onFailure={onSignIn}
                                cookiePolicy={'single_host_origin'}
                            />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
                </Container>

                <Container maxWidth="md" m={5}>
                    <Divider></Divider>
                    <div className={classes.content}>
                        <Typography variant="h6">About Acharya</Typography>
                        <Typography variant="subtitle1" align="justify">
                        Acharya exploits interactive technologies and communication systems to improve the learning experience. It has the potential to transform the way we teach and 
                            learn across the board. Children cannot be effective in tomorrow's world if 
                            they are trained in yesterday's skills.  We cannot replace teachers and lecturers,
                            but alongside existing methods. Acharya can raise standards, and widen 
                            participation in lifelong learning. It can enhance the quality and reach of 
                            their teaching, and  can enable every learner to achieve his or her potential.
                            It makes possible a truly ambitious education system for a future learning society.
                        </Typography>
                    </div>

                    <div className={classes.title}>
                        <Typography variant="h4">
                            Available Courses
                        </Typography>
                        <Divider style={{marginLeft : "400px", marginRight: "400px"}}></Divider>
                        {
                            
                            this.props.courseLoading ? 
                                <Box display="flex" p={5} justifyContent="center">
                                        <Loader/>
                                </Box>
                                
                            :
                                this.props.courseFailed != null ?
                                   
                                    <Box display="flex" p={5} justifyContent="center">
                                        <Alert severity="error">{this.props.courseFailed}</Alert>
                                    </Box>
                                    
                                :
                                    this.props.course.length === 0 ?
                                        <Box display="flex" p={5} justifyContent="center">
                                            <Alert severity="info">No Available Courses Now !</Alert>
                                        </Box>
                                    :
                                        
                                        <Course course = {this.props.course} 
                                            subjectsLoading = {this.props.subjectsLoading} 
                                            subjectsFailed = {this.props.subjectsFailed}  
                                            subjects={this.props.subjects}/>
                        }
                    </div>

                    <div className={classes.title}>
                        <Typography variant="h4">
                            Our Contributers
                        </Typography>
                        
                                <Divider style={{marginLeft : "400px", marginRight: "400px"}}></Divider>
                        
                        
                        <Contributer/>
                    </div>
                </Container>
            </Fragment>
            
                    
        );

    }
    



}

export default withStyles(styles)(Home)
