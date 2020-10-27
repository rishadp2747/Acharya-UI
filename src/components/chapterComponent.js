import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types'
import {AppBar, Toolbar, IconButton, Typography,
     Tabs, Tab, Box, Hidden, Drawer, Card, CardActionArea,CardContent} from '@material-ui/core';

import ReactPlayer from "react-player";
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


import {fetchChapter} from '../redux/actionCreators'
import {connect } from 'react-redux'

import Loader from './loadingComponent'
import Alert from '@material-ui/lab/Alert';


const mapStateToProps = state =>{
    return {
        chapters : state.chapters,
    }        
}

const mapDispatchToProps = (dispatch) => ({
    fetchChapter : () => {dispatch(fetchChapter())}

});


const styles = theme => ({
    syllabus : {
        
        borderRight : "1px solid rgba(0,0,0,0.3)",
        background : "#ffffff",
    },
    
})

class Chapter extends Component {

    constructor(props){
        super(props);
        this.state = {
            mobileOpen : false,
            activeTab : 0,
        }
    }


    componentDidMount() {
        this.props.fetchChapter()
    }

    handleDrawer = () =>{
        this.setState({mobileOpen : !this.state.mobileOpen});
    }

    handleTab = (event, activeTab) =>{
        this.setState({activeTab : activeTab })
        if(this.state.mobileOpen === true){
            this.setState({mobileOpen : false})
        }
    }

    renderVideos = (syllabus) => {

       

        
        if(syllabus != null){


            if(this.props.chapters.isLoading){
                return (
                    <Box display="flex" p={5} justifyContent="center"> 
                        <Loader/>
                    </Box>

                )
                
            }

            

            if(this.props.chapters.errMess){
                return (
                    <Box display="flex" p={5} justifyContent="center" >
                        <Alert severity="error">{this.props.chapters.errMess}</Alert>
                    </Box>
                )
            }

            if(this.props.chapters.chapters.length === 0){
                return (
                    <Box display="flex" p={5} justifyContent="center">
                        <Alert severity="info">No Available Chapters Now !</Alert>
                    </Box>
                )
            }else{
                let videos = this.props.chapters.chapters.filter( (videos) => videos.syllabus === syllabus)
                if(videos !=null){
                    videos = videos.map( (val, index) => 
                        <Card key={index} style={{margin: "8px"}}>
                            <CardActionArea href={"/class/"+val.syllabus+"/"+val.id+"/"+val.text} target="_blank">
                                <ReactPlayer
                                    url= {"https://www.youtube.com/embed/"+val.text}
                                    width = {'200px'}
                                    height = {'180px'}
                                    light = {true}
                                    
                                />    
                            </CardActionArea>
                            <CardContent>
                                <Typography variant="caption" component="p">Author: {val.author} </Typography>
                                <Typography variant="caption" component="p">Excercises: </Typography>
                            </CardContent>
                        </Card>
                    )
                    return videos;
                }else{
                    return(<div></div>)
                }

            }
        }

    }

    


    render() {
        const {classes} = this.props

       

        function a11yProps(index: any) {
            return {
              id: `syllabus-tab-${index}`,
              'aria-controls': `syllabus-tabpanel-${index}`,
            };
          }

        //htab panel area handler
        function TabPanel(props) {
            const { children, value, index, ...other } = props;

            return (
                <Typography
                    component="div"
                    role="tabpanel"
                    hidden={value !== index}
                    id={`simple-tabpanel-${index}`}
                    aria-labelledby={`simple-tab-${index}`}
                    {...other}
                >
                    <Box p={3}>{children}</Box>
                </Typography>
            );
        }
        TabPanel.propTypes = {
            children: PropTypes.node,
            index: PropTypes.any.isRequired,
            value: PropTypes.any.isRequired,
        };


        
       

        

        return (
            <Fragment>
                <AppBar elevation={1} position="relative">
                    <Toolbar>
                        <Hidden mdUp={true}>
                            <IconButton edge="start" onClick={this.handleDrawer}>
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                        
                        <Typography variant="subtitle1">
                            Syllabus
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer  variant="temporary" onClose={this.handleDrawer} anchor="left" open={this.state.mobileOpen}>
                    <Fragment>
                        <div>
                            <Tabs value={this.state.activeTab} orientation="vertical"  onChange={this.handleTab} aria-label="syllabus" >
                                {
                                    this.props.syllabus.map( (val, index) =>
                                        <Tab key={index} label={val.sy_chapter} {...a11yProps(0)} />
                                    )
                                }
                            </Tabs>
                        </div>
                    </Fragment>   
                </Drawer>
                <Box display="flex" flexDirection="row">
                    <Hidden smDown={true}>
                        <Box className={classes.syllabus} py={4}>
                            <Tabs  value={this.state.activeTab} orientation="vertical" onChange={this.handleTab} aria-label="syllabus" >
                                {
                                    this.props.syllabus.slice(0).reverse().map( (val, index) =>
                                        <Tab key={index} label={val.title} style={{borderBottom : "0.5px solid rgb(0,0,0,0.2)"}} {...a11yProps(0)}/>
                                    )
                                }
                            </Tabs>
                        </Box>
                    </Hidden>
                    <Box p={5}>
                       
                        {
                            
                            this.props.syllabus.slice(0).reverse().map( (val, index) => 
                                <TabPanel key={index} value={this.state.activeTab} index={index}>
                                    <Box display="flex" flexWrap="wrap" justifyContent="flex-start">
                                        {this.renderVideos(val.id)}
                                    </Box>
                                </TabPanel>
                            
                            )
                        }
                    </Box>
                </Box>

            </Fragment>
            


           

        );
    }
}

Chapter.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)( withStyles(styles)(Chapter));
