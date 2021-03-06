import React, { Component } from 'react';

import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class FormDetail extends Component {
    render() {

        let { job } = this.props;
        job = JSON.parse(JSON.stringify(job))
        console.log(job)
        return (<div>
            <Card>
                <CardHeader>
                    <GridContainer>
                        <GridItem md={10}><h2>{job.title}</h2></GridItem>
                        <GridItem md={2}>
                            <IconButton color="primary"><Icon>alarm_add</Icon></IconButton>
                            <IconButton color="primary"><Icon>star</Icon></IconButton>
                        </GridItem>
                        <GridItem md={12}> {this.props.job.description}</GridItem>
                    </GridContainer>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <Card plain>
                            <CardHeader color="rose">Important Dates</CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem md={3}> Posted Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postedDate}</GridItem>
                                    <GridItem md={3}> Updated Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postUdatedDate}</GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem md={3}> Notification issued Date</GridItem>
                                    {/*      */}
                                    <GridItem md={3}> Application begin Date</GridItem>
                                    {/* <GridItem md={3}> {this.props.job.importantDates.applicationBeginDate}</GridItem> */}
                                </GridContainer>
                                <GridContainer>
                                    <GridItem md={3}> Posted Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postedDate}</GridItem>
                                    <GridItem md={3}> Updated Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postUdatedDate}</GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridContainer>
                    <GridContainer>
                        <Card plain>
                            <CardHeader color="rose">Application Fees</CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem md={3}> General /OBC</GridItem>
                                    {/* <GridItem md={3}> {this.props.job.applicationFee.general}</GridItem> */}
                                    <GridItem md={3}> SC/ST</GridItem>
                                    <GridItem md={3}> {this.props.job.postUdatedDate}</GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem md={3}> Eligibility</GridItem>
                                    <GridItem md={12}> {this.props.job.postedDate}</GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridContainer>
                    <GridContainer>
                        <Card plain>
                            <CardHeader color="rose">Vacancy Detail</CardHeader>
                            <CardBody>
                                <GridContainer>
                                    <GridItem md={3}> Total Posts</GridItem>
                                    {/* <GridItem md={3}> {this.props.job}</GridItem> */}
                                    <GridItem md={3}> Updated Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postUdatedDate}</GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem md={3}> Posted Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postedDate}</GridItem>
                                    <GridItem md={3}> Updated Date</GridItem>
                                    <GridItem md={3}> {this.props.job.postUdatedDate}</GridItem>
                                </GridContainer>
                            </CardBody>
                        </Card>
                    </GridContainer>
                    {/* <GridContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Post Name</TableCell>
                                    <TableCell align="right">Total Posts</TableCell>
                                    <TableCell align="right">Eligibility</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">Asistant Manager (General) </TableCell>
                                    <TableCell align="right">12</TableCell>
                                    <TableCell align="right">Master's degree in any stream</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Asistant Manager (General) </TableCell>
                                    <TableCell align="right">12</TableCell>
                                    <TableCell align="right">Master's degree in any stream</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">Asistant Manager (General) </TableCell>
                                    <TableCell align="right">12</TableCell>
                                    <TableCell align="right">Master's degree in any stream</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </GridContainer> */}
                </CardBody>
                <CardFooter>
                    <Button variant="outlined" color="primary">Apply Now</Button>
                    <Button variant="outlined" color="secondary">View Advertisement</Button>
                    <IconButton color="primary"><Icon>help_outline</Icon></IconButton>
                </CardFooter>
            </Card>
        </div >)
    }
}

export default FormDetail;