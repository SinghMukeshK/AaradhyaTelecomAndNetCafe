import React, { Component } from 'react'

import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
import CardBody from '../../components/Card/CardBody.jsx'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: 'Hello.. I am here now!'
        }
        this.onSlideEntered = this.onSlideEntered.bind(this);
    }
    onSlideEntered() {
        this.setState({
            welcomeMessage: 'Hello.. I am here now!'
        })
        console.log(this.state.welcomeMessage)
    }
    render() {
        return (
            <div>
                <GridContainer>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit onEntered={() => this.onSlideEntered} >
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>
                                    {this.state.welcomeMessage}
                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                </GridContainer>

                <Zoom in={true}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>

                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                            <Card>
                                <CardHeader color="warning">This is card header</CardHeader>
                                <CardBody>

                                </CardBody>
                                <CardFooter>

                                </CardFooter>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </Zoom>
            </div>
        )
    }
}
