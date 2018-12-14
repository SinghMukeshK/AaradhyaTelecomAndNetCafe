import React, { Component } from 'react'
import styles from '@material-ui/core/styles'


import withStyles from "@material-ui/core/styles/withStyles";

import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import Store from "@material-ui/icons/Store";
import Storea from "@material-ui/icons/";

import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
import CardIcon from '../../components/Card/CardIcon.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import applicationStyle from '../../assets/jss/components/dashboardStyle.jsx';
import Slide from '@material-ui/core/Slide';

class Services extends Component {
    render() {
        const { classes } = this.props;
        this.state = {
            loading: true
        }

        setTimeout(() => {
            console.log('loaing')
            console.log(this.state.loading)
            this.setState({
                loading: false
            })
        }, 2000)
        let loader;
        if (this.state.loading)
            loader = <LinearProgress color="secondary" variant="query" />
        else loader = <p>Load complete</p>
        return (
            <div>
                <GridContainer>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>
                                    {loader}
                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="success">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Get more space
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="info">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                 </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="/tickets">
                                            Rail Reservation
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="rose">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                 </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Rail Reservation
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                </GridContainer>
                <GridContainer>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="primary">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                 </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Rail Reservation
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                 </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Rail Reservation
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>
                                    This is card Body
                                 </CardBody>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Rail Reservation
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(applicationStyle)(Services)