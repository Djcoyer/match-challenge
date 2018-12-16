import React, { Component, Fragment } from 'react';
import Poll from './Poll';
import {AppBar, Toolbar, Typography, Grid} from '@material-ui/core';


class CharacterPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            err: null,
            isLoading: false,
            newCharacterName: '',
            selectedOption: null
        };
    }

    componentDidUpdate(prevProps, prevState) {

    }
    
    render() {

        return (
            <Fragment>
                <AppBar color={"secondary"} classes={{colorSecondary: '#202124'}} position="static" style={{backgroundColor:'#202124'}}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Character Poll
                        </Typography>
                    </Toolbar>
                </AppBar> 
                <div className="row" style={{marginBottom:'2rem'}}>

                </div>

                <Grid container spacing={24} style={{paddingLeft: '1rem', paddingRight:'1rem'}}>
                    <Poll/>
                </Grid>
            </Fragment>
        )
    }
}


export default CharacterPoll;