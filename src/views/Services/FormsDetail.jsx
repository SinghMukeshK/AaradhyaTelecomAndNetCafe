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
        const { job } = this.props;
        return (<div>
            <Card plain>
                <CardHeader>
                    <GridContainer>
                        <GridItem md={10}><h2>{job.title}</h2></GridItem>
                        <GridItem md={1}><IconButton color="primary"><Icon>alarm_add</Icon></IconButton></GridItem>
                        <GridItem md={1}><IconButton color="primary"><Icon>star</Icon></IconButton></GridItem>
                    </GridContainer>
                </CardHeader>
                <CardBody>
                    <GridContainer>
                        <GridItem md={2}> Title</GridItem>
                        <GridItem md={10}> {this.props.job.title}</GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem md={2}> Detail</GridItem>
                        <GridItem md={10}> {this.props.job.description}</GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem md={2}> Posted Date</GridItem>
                        <GridItem md={10}> {this.props.job.postedDate}</GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem md={2}> Updated Date</GridItem>
                        <GridItem md={10}> {this.props.job.postUdatedDate}</GridItem>
                    </GridContainer>
                    <GridContainer>
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
                    </GridContainer>
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