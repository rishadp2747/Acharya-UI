import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

import {  withStyles} from '@material-ui/core/styles';

import {Avatar, Grid, Box, Typography} from '@material-ui/core';


import head from '../img/head.png'

const styles = theme => ({
    root : {
        
        margin : "40px 0px 20px 0px",
        padding : "20px"
    },

    head : {
        width : 100,
        height : 100
    },
   

})



class Contributer extends Component {

    constructor(props){
        super(props);
        this.state = {
            contributers : [
                {
                    "user_id": 1,
                    "user_firstname": "Admin",
                    "user_lastname": "fisat"
                },
                {
                    "user_id": 1,
                    "user_firstname": "Admin",
                    "user_lastname": "fisat"
                },
                {
                    "user_id": 1,
                    "user_firstname": "Admin",
                    "user_lastname": "fisat"
                },
                {
                    "user_id": 1,
                    "user_firstname": "Admin",
                    "user_lastname": "fisat"
                }
            ]
        }
    }

    render() {

        const {classes} = this.props

         
        
        
        return (
            <Fragment>
                <Grid container spacing={1} className={classes.root}>
                    <Grid container item xs={12} alignItems="center" justify="center" spacing={3}>
                        {
                            this.state.contributers.map( (val, index) =>
                                <Box key={index} m={5}>
                                     <Avatar alt="contributer" key={index} src={head} className={classes.head} />
                                     <Typography variant="caption">{val.user_firstname+' '+ val.user_lastname}</Typography>
                                </Box>
                               
                            )
                        }
                    </Grid>
                </Grid>
     
            </Fragment>
        );
    }
}

Contributer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contributer)
