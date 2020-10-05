import React, {Fragment, Component} from 'react';


import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Container} from '@material-ui/core';

import logo from '../img/logo.png';




class Nav extends Component{


    render(){


        return(
            <Fragment>

            <AppBar  elevation={2} position="sticky" color="primary">
                <Container maxWidth="lg">
                    <Toolbar>
                        <img alt="logo" src={logo} width={100} ></img>
                    </Toolbar>
                </Container>
            </AppBar>
            </Fragment>
            
        );
    }//render
}


export default (Nav)

