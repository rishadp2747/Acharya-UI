import React , {Component, Fragment} from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles';


import { Typography, Box, Divider, Paper, Button } from '@material-ui/core';
import YouTube from 'react-youtube-embed'

import AceEditor from 'react-ace';
 
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";


import {connect } from 'react-redux'

import Loader from './loadingComponent'
import Alert from '@material-ui/lab/Alert';




import {postCode, fetchExercise} from '../redux/actionCreators'
 
const styles = theme => ({
    video : {
        width : "80%",
        [theme.breakpoints.down('md')]: {
            width : "100%"
          },

    },
    out :{
        padding : "10px",
    }
    
})


const mapStateToProps = state =>{
    return {
        code : state.code,
        exercises : state.exercises
    }        
}

const mapDispatchToProps = (dispatch) => ({
    postCode : (code) => {dispatch(postCode(code))},
    fetchExercise : () => {dispatch(fetchExercise())}

});

class Display extends Component {


    


    componentDidMount(){
        this.props.fetchExercise()
    }


    run = () => {
        
        const val = this.refs.comp.editor.getValue()
        console.log(this.refs.comp.editor.getValue())

        if (val !== ""){
            this.props.postCode(val)

        }

        
    }

    

    render() {
        const {classes} = this.props

        

        return (
            <Fragment>
                <Box display="flex" justifyContent="center">
                    <div className={classes.video}>
                        <YouTube id={"https://www.youtube.com/embed/"+this.props.yId} />
                    </div>
                    
                </Box>
                {
                    this.props.exercises.isLoading ? 
                        
                            <Box display="flex" p={5} justifyContent="center"> 
                                <Loader/>
                            </Box>
        
                    :
                        this.props.exercises.errMess ? 
                            <Box display="flex" p={5} justifyContent="center" >
                                <Alert severity="error">{this.props.chapters.errMess}</Alert>
                            </Box>
                        :
                            this.props.exercises.exercises.map( (val) => 
                                val.chapter === this.props.chId ?
                                    val.mode === "program" ?    
                                <Fragment >
                                <Divider></Divider>
                                <Box display="flex" justifyContent="center" p={1} m={4}>
                                    <Typography variant="h4">Excercise</Typography>
                                </Box>
                                
                
                                
                
                                <Box display="flex" flexDirection="column" p={5}>
                                    <Typography>{}</Typography>
                                    <Box display="flex" flexWrap="wrap" p={3}>
                                        <Box style={{width : "60%", borderRight : "1px solid rgba(0,0,0,0.3)"}}>
                                            <AceEditor
                                                ref = "comp"
                                                mode="java"
                                                theme="github"
                                                width={"100%"}
                                                height={300}
                                                name="compiler"
                                                editorProps={{ $blockScrolling: true }}
                                            />
                                        </Box>
                                        <Box style={{width : "30%"}} p={3}>
                                            <Typography variant="body1">Test Case 1 </Typography>
                                            <Divider></Divider>
                                            <Typography variant="subtitle1">Input : {val.case1} </Typography>
                                            <Typography variant="subtitle1">Output : {val.output1}</Typography>
                                            
                                        </Box>
                                        <Box style={{width : "100%"}} p={3}>
                
                                            <Button variant="contained" color="primary" style={{margin: "10px"}} onClick={this.run}>
                                                Run
                                                </Button>
                                            <Divider></Divider>
                                            
                                            <Paper elevation={3}>
                                                <Typography variant="subtitle1" className={classes.out}>Output</Typography>
                
                                                {
                                                    this.props.code.isCompiling ? 
                                                        null
                                                    :
                                                        this.props.code.output.map( (val) => 
                                                            val.compiler === ""?
                                                                <Typography>Compilation Error : {val.compile}</Typography>
                                                            :
                                                                <Fragment>
                                                                <Typography>Compile Successfully</Typography>
                                                                <Typography>{val.output}</Typography>
                                                                </Fragment>
                                                        )
                                                }
                
                                            </Paper>
                                            
                
                
                                        </Box>
                                    </Box>
                                </Box>
                                </Fragment>
                                :null
                            :null
                            )
                        
                }
                


        
            </Fragment>
            

        );
    }
}


Display.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Display));

