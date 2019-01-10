import React, { Component } from 'react'


import path from 'path';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import CurrentOpeneing from '../../data/currentOpenings.json';

export default class AddNewJob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            postedDate: '',
            updatedDate: '',
            importantDates: {
                notificationIssuedDate: '',
                applicationBeginDate: '',
                lastDateToApplyOnline: '',
                lastDateToPayExamFee: '',
                onlineCorrection: '',
                examDate: '',
                admitCardIssueDate: ''
            },
            applicationFee: {
                generalobc: '',
                scst: '',
                handicap: '',
                paymentMode: ''
            },
            vacancyDetail: {
                totalPost: '',
                postName: '',
                ageLimit: '',
                eligibility: '',
                postWiseVacancyDetails: [
                    { postname: '', totalPost: '' }
                ],
                physicalEligibility: '',
                selectionProcess: ''
            },
            links: {
                applyOnline: '',
                downloadNotification: '',
                officialWebsite: ''
            }

        }
    }
    handleTitleChange = (title) => {
        this.setState({
            title: title.target.value
        })
        console.log(title.target.value)
    }
    handleDescriptionChange = (title) => {
        console.log(title.target.value)
    }
    handleDateChange = (title) => {
        console.log(title.target.value)
    }
    hanldeSave = () => {
        console.log(this.state)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <GridContainer style={{ height: `${window.innerHeight - 140}px`, overflowY: "scroll" }}>
                    <GridItem xs={12} sm={12} md={9}>
                        <TextField
                            id="title"
                            label="Title of job"
                            placeholder="Enter title of job"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <TextField
                            id="description"
                            label="Short description of job"
                            placeholder="Short description of job"
                            margin="dense"
                            fullWidth
                            multiline
                            value={this.state.title}
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="postedDate"
                            label="Posted Date"
                            placeholder="Posted Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="updatedDate"
                            label="Updated Date"
                            placeholder="Updated Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="notificationIssuedDate"
                            label="Notification Date"
                            placeholder="Notification announced on"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="applicationBeginDate"
                            label="Application Begin Date"
                            placeholder="Ammpication begin on"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="lastDateToApply"
                            label="Last Date to Apply"
                            placeholder="Last Date to apply"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="lastDateOfPayment"
                            label="Last Payment Date"
                            placeholder="Last Payment Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="dataCorrectionDate"
                            label="Corrction Date"
                            placeholder="Correction Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="examDate"
                            label="Exam Date"
                            placeholder="Exam Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="admitCardIssueDate"
                            label="AdmitCard Issue Date"
                            placeholder="Admit Card Issue Date"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="General/OBC"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="SC/ST"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Handicap"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Payment Mode"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Post Name"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Total Post"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Age Limit"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <TextField
                            id="generalobc"
                            label="Eligibility"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <br />
                    <GridItem xs={12} sm={12} md={12}>
                        <TextField
                            id="generalobc"
                            label="Link to download Notification"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <TextField
                            id="generalobc"
                            label="Link to apply online"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                        <TextField
                            id="generalobc"
                            label="Link to Official Website"
                            placeholder="General OBC Fee"
                            margin="dense"
                            fullWidth
                            variant="standard"
                            onChange={(e) => this.handleTitleChange(e)}
                        />
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Button variant="contained" color="default">Clear</Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Button variant="outlined" fullWidth color="secondary">Preview</Button>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                        <Button variant="contained" fullWidth color="primary" onClick={() => this.hanldeSave()}>Save</Button>
                    </GridItem>
                </GridContainer>

            </div >
        )
    }
}
