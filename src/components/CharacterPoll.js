import React, { Component, Fragment } from 'react';
import Poll from './Poll';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';
import { rowStyles, gridContainerStyles, appBarStyles, appBarClasses } from './styles/CharacterPoll.css';


class CharacterPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }
    
    render() {

        return (
            <Fragment>
                <AppBar color={"secondary"} classes={appBarClasses} position="static" style={appBarStyles}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Character Poll
                        </Typography>
                    </Toolbar>
                </AppBar> 
                <div style={rowStyles}>

                </div>

                <Grid container spacing={24} style={gridContainerStyles}>
                    <Poll/>
                </Grid>
            </Fragment>
        )
    }
}


export default CharacterPoll;