import React, {Fragment, Component} from 'react';

import {  withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Container, Grid, Box, Typography, Link} from '@material-ui/core';

import logo from '../img/logo.png';


const styles = theme => ({
    root : {
        height : 'auto',
    },

    box :{
        borderLeft : "1px solid rgba(0,0,0,0.2)",
        padding : "20px"
    },

    grid : {
        padding : "20px",
    },

    
   

})

class Footer extends Component{


    render(){

        const { classes } = this.props

        return(
            <Fragment>
            <AppBar  elevation={24} position="sticky" className={classes.root} color="primary">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid container className={classes.root}>
                            <Grid item className={classes.grid}>
                                <Box style={{margin : "30px 10px"}}>
                                    <img alt="logo" src={logo} width={150} ></img>
                                </Box>
                                
                            </Grid>
                            <Grid item md={5} className={classes.grid}>
                                <Box className={classes.box}>
                                    <Typography variant="h6">About CCRC - FISAT</Typography>
                                    <Typography align="justify">The Cognitive Computing Research Centre (CCRC) is open to all students for conducting academic research. The centre which was established in 2019 under the Department of CSE, FISAT, aims at developing high quality research work and analysis among the students. </Typography>
                                    <Link to="http://ccrc.fisat.ac.in/"  style={{cursor : "pointer"}} color="secondary">www.ccrc.fisat.ac.in</Link>
                                </Box>
                          
                            </Grid>
                            <Grid item  className={classes.grid}>
                                <Box className={classes.box}>
                                    <Typography variant="h6">Developers</Typography>
                                    <Box pl={2}>
                                        <Link to="https://www.linkedin.com/in/rishad-p-0bb992181/" style={{cursor : "pointer"}} color="secondary"><Typography variant="caption"> Rishad P</Typography></Link>
                                    </Box>
                                    <Box pl={2}>
                                        <Link to="https://www.linkedin.com/in/liya-laiju-6418b0183/" style={{cursor : "pointer"}} color="secondary"><Typography variant="caption"> Liya Laiju P</Typography></Link>
                                    </Box>
                                    <Box pl={2}>
                                        <Link to="https://www.linkedin.com/in/saurav-ns-410b4317b/" style={{cursor : "pointer"}} color="secondary"><Typography variant="caption"> Saurav N.S</Typography></Link>
                                    </Box>

                                    <Typography variant="h6">Mentor</Typography>
                                    <Box pl={2}>
                                        <Link to="https://www.linkedin.com/in/pankaj-kumar-g-1aa9b885/" style={{cursor : "pointer"}} color="secondary"><Typography variant="caption"> Pankaj Kumar J</Typography></Link>
                                    </Box>
                                </Box>
                            </Grid>
                            
                            
                            
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            </Fragment>
            
        );
    }//render
}


export default withStyles(styles)(Footer)

