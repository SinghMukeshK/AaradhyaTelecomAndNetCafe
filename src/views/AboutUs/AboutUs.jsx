import React, { Component } from 'react'

import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

class AboutUs extends Component {
    render() {
        return (
            <div>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="info">Our Mission</CardHeader>
                            <CardBody>

                            </CardBody>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="success">Our Goal</CardHeader>
                            <CardBody>

                            </CardBody>
                            <CardFooter>

                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default AboutUs