import React, { Component } from 'react'

import Typography from '@material-ui/core/Typography';

import currentOpenings from '../../data/currentOpenings.json';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'

import FormDetail from './FormsDetail';
import Reveal from '../../components/Reveal/Reveal';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {}
        }
    }
    handleSelectedPost = (job) => {
        this.setState({
            job: job
        })
    }
    render() {
        let jobs;
        jobs = currentOpenings.map(job => {
            return <p style={{ cursor: "pointer" }} onClick={() => this.handleSelectedPost(job)}>{job.title}</p>
        })
        return (
            <Typography>
                <GridContainer>
                    <GridItem xs={12} sm={6} md={9}>
                        <FormDetail job={this.state.job} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        {jobs}
                    </GridItem>
                </GridContainer>
            </Typography>
        )
    }
}

export default Forms;