import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Chip from '@material-ui/core/Chip';

import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import currentOpenings from '../../data/currentOpenings.json';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem';
import HomeHeader from '../../views/Home/HomeHeader';

import FormDetail from './FormsDetail';
import AddNewJob from './AddNewJob';
import { TextField } from '@material-ui/core';
import Divider from '@material-ui/core/Divider'
import Reveal from '../../components/Reveal/Reveal';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {},
            jobs: [],
            checked: true
        }
    }

    handleSelectedPost = (job) => {
        this.setState({
            job: job
        })
    }
    handleSearch = (e) => {
        let _jobs = currentOpenings.filter(data => {
            return data.title.match(e.target.value)
        })
        this.setState({
            jobs: _jobs
        })
    }
    componentDidMount() {
        this.setState({
            jobs: currentOpenings,
            job: currentOpenings[0]
        })
    }
    render() {
        let jobs;
        jobs = this.state.jobs.map(job => {
            return <p color="primary" style={{ cursor: "pointer" }} onClick={() => this.handleSelectedPost(job)}><strong>{job.title}</strong><Divider /></p>
        })
        return (
            <Typography>
                <GridContainer>
                    <Slide direction="up" in={this.state.checked} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={8} md={9} >
                            {/* <HomeHeader /> */}
                            <FormDetail job={this.state.job} />
                        </GridItem>
                    </Slide>
                    <Slide direction="left" in={this.state.checked} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={4} md={3} style={{ height: `${window.innerHeight - 100}px`, overflowY: "scroll" }}>
                            <Card plain>
                                <CardHeader><Chip
                                    key="LatestVacencies"
                                    color="primary"
                                    label="Latest Vacencies"
                                    variant="default"
                                    fullWidth
                                /></CardHeader>
                                <CardBody>
                                    <TextField
                                        id="searchVacency"
                                        label="Search"
                                        placeholder="Enter any post"
                                        margin="dense"
                                        fullWidth
                                        onChange={(e) => this.handleSearch(e)}
                                    />
                                    {jobs}
                                </CardBody>
                            </Card>
                        </GridItem>
                    </Slide>
                </GridContainer>
            </Typography >
        )
    }
}

export default Forms;