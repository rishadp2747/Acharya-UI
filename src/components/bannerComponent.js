import React, {Component} from 'react';

import {  withStyles} from '@material-ui/core/styles';


import banner from '../img/banner.png';
import {Typography, Breadcrumbs, Link, Grid, Divider } from '@material-ui/core';

const styles = theme => ({
    img : {
        height : '150px',
        width: '100%',
        opacity : 0.4,
    },
    
    bannerHeader : {
        position: 'absolute',
        left: '50%',
        top: '20%',
        padding: "30px 0px",
        transform: 'translate(-50%, -50%)',
        width : '100%'
    },
   

})


class Banner extends Component {

    

    render() {
        const {classes } = this.props

        
        

        return (
            <div style={{textAlign : "center"}}>
                    <img alt="banner" src={banner} className={classes.img}></img>
                    <Grid container direction="column" alignItems="center" justify="center" className={classes.bannerHeader}>
                        <Typography variant="h4" >{
                            this.props.course.map( (val) => 
                                val.name
                            )
                        
                        
                        
                        }
                        
                        </Typography>
                        <Breadcrumbs style={{textAlign : "center", paddingLeft: "20px", paddingBottom : "40px"}} aria-label="breadcrumb">
                            <Link color="secondary" href="/">
                                Home
                            </Link>
                            <Link color="secondary" href="/" >
                                {
                                    this.props.course.map( (val) => 
                                        val.name
                                    )
                                }
                            </Link>
                            <Link color="secondary" href={"/syllabus/"+
                            
                            
                            this.props.course.map( (val) => 
                            val.id
                            )
                            
                            
                            
                            +"/"+
                            this.props.subject.map( (val) => 
                                val.id
                            )
                            
                            } >
                                {
                                this.props.subject.map( (val) => 
                                    val.name
                                )
                            }
                            </Link>
                        </Breadcrumbs>
                    </Grid>
                    <Divider></Divider>
            </div>

            
                
            
        );
    }

}

export default withStyles(styles)(Banner)