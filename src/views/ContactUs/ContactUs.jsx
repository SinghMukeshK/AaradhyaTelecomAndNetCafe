import React, { Component } from 'react'

import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import TextField from '@material-ui/core/TextField';

class ContactUs extends Component {
    render() {
        return (
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <TextField
                        id="standard-name"
                        label="Name"
                        placeholder="Enter Your name"
                        margin="dense"
                        variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <TextField
                        id="standard-name"
                        label="Mobile"
                        placeholder="Enter Your name"
                        margin="dense"
                        variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <TextField
                        id="outlined-textarea"
                        style={{ width: "100%", height: "100px" }}
                        label="Your Query/Message"
                        placeholder="Enter your Query/Message"
                        multiline
                        margin="dense"
                        variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Button variant="contained" size="small" color="primary" >Submit</Button>
                </GridItem>
            </GridContainer>
        )
    }
}

export default ContactUs;