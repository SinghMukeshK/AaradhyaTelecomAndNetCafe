import React, { Component } from 'react'
import styles from '@material-ui/core/styles'


import withStyles from "@material-ui/core/styles/withStyles";
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

class Services extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div>
                 <GridContainer>                     
                    <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                    {/* <CardIcon color="warning">
                                        <Icon>
                                            <Store />
                                        </Icon>
                                    </CardIcon> */}
                                    <p >Used Space</p>
                                    <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                    </h3>
                                </CardHeader>
                                <CardBody>
                                    THis is card Body
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
                    <GridItem xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                    <CardIcon color="warning">
                                    {/* <Icon>content_copy</Icon> */}
                                    </CardIcon>
                                    <p >Used Space</p>
                                    <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                    </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Get more space
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>                     
                    <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="warning" stats icon>
                                    <CardIcon color="warning">
                                    {/* <Icon>content_copy</Icon> */}
                                    </CardIcon>
                                    <p >Used Space</p>
                                    <h3 className={classes.cardTitle}>
                                    49/50 <small>GB</small>
                                    </h3>
                                </CardHeader>
                                <CardFooter stats>
                                    <div className={classes.stats}>
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            Get more space
                                        </a>
                                    </div>
                                </CardFooter>
                            </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(applicationStyle)(Services)