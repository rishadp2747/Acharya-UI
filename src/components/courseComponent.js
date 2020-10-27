import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {  withStyles} from '@material-ui/core/styles';

import {Accordion,AccordionSummary, AccordionDetails} from '@material-ui/core';
import {Typography,  Card, CardMedia, CardContent,CardActionArea, Box} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Loader from './loadingComponent'
import Alert from '@material-ui/lab/Alert';

import {ui} from '../baseUrl'

const styles = theme => ({
    root : {
        width : "100%",
        margin : "40px 0px 20px 0px",
        padding : "20px"
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    card: {
        width: 200,
        margin : "10px",
        height : 200,
    },
    media: {
        height: 140,
    },

})



class Course extends Component {

    render() {

        const {classes} = this.props

         
        
        
        return (
            <Fragment>
                {
                    this.props.course.map( (val,index) =>
                        <Accordion expanded={true} key={index} className={classes.root}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={"panel1a-content"+index}
                                id={"course"+index}
                                key = {index}
                            >
                                <Typography variant="h6"> {val.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails >
                                <Box display="flex" p={3}  style={{width : "100%"}} justifyContent="center">
                                    
                                    {
                                       this.props.subjectsLoading ? 
                                       <Box display="flex" p={5} justifyContent="center"> 
                                               <Loader/>
                                       </Box>
                                       
                                     :    
                                        this.props.subjectsFailed != null ?
                                            
                                            <Box display="flex" p={5} justifyContent="center" >
                                                <Alert severity="error">{this.props.subjectsFailed}</Alert>
                                                
                                            </Box>
                                            
                                            
                                        :
                                            this.props.course.length === 0 ?
                                                <Box display="flex" p={5} justifyContent="center">
                                                    <Alert severity="info">No Available Subjects Now !</Alert>
                                                </Box>
                                            : 
                                        
                                                this.props.subjects.map( (sub, index) => 
                                                    <Card elevation={3} key={index} className={classes.card} >
                                                        <CardActionArea href={ui+'syllabus/'+val.id+'/'+sub.id}>
                                                            <CardMedia
                                                                className={classes.media}
                                                                image={sub.icon}
                                                            />
                                                            <CardContent>
                                                            <Typography variant="subtitle1">
                                                                {sub.name}
                                                            </Typography>
                                                            </CardContent>
                                                        </CardActionArea>
                                                    </Card>
                                                )
                                    }                
                                    </Box>                             
                            </AccordionDetails>
                        </Accordion>
                    )
                }
            </Fragment>
               
            
               
            
        );
    }
}

Course.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Course)
