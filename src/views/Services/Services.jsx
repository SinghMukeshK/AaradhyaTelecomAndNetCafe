import React, { Component } from 'react'
import styles from '@material-ui/core/styles'


import withStyles from "@material-ui/core/styles/withStyles";

import LinearProgress from '@material-ui/core/LinearProgress';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Icon from "@material-ui/core/Icon";
// import Store from "@material-ui/icons/Store";
// import Storea from "@material-ui/icons/";


import Slide from '@material-ui/core/Slide';
import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
import CardIcon from '../../components/Card/CardIcon.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import applicationStyle from '../../assets/jss/components/dashboardStyle.jsx';
import { Icon, IconButton } from '@material-ui/core';

import HomeHeader from '../../views/Home/HomeHeader';


class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true

        }
    }
    render() {
        const { classes } = this.props;

        // setTimeout(() => {
        //     this.setState({ loading: !this.state.loading })
        // }, 2000)
        let loader;
        if (this.state.loading)
            loader = <LinearProgress color="secondary" variant="query" />
        else loader = "Load Complete"
        return (
            <div>
                <HomeHeader />
                {/* <GridContainer>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={3}>
                            <Card>
                                <CardHeader color="">
                                    <IconButton onClick={() => { this.setState({ loading: !this.state.loading }) }}>
                                        <Icon>cached</Icon>
                                    </IconButton></CardHeader>
                                <CardBody>
                                    {loader}
                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                </GridContainer> */}
            </div>
        )
    }
}

export default withStyles(applicationStyle)(Services)