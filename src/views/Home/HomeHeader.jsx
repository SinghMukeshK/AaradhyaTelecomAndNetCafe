import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import HomeHeaderImage from '../../assets/img/homeHeader.jpg';
import ContactUd from '../../views/ContactUs/ContactUs';
import services from '../../data/services.json';
import Typography from '@material-ui/core/Typography'

import Slider from 'react-slick'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Blogs from '../../views/Blogs/Blogs'

export default class HomeHeader extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500
        }
        let servicesCard;
        if (services) {
            console.log(services)
            servicesCard = services.map(service => {
                return (<GridItem xs={12} sm={6} md={3}>
                    <Card primary>
                        <CardHeader color="secondary">{service.title}</CardHeader>
                        <CardBody>{service.description}</CardBody>
                        <CardFooter>
                            <Button variant="outlined" component={Link} to={service.link}>View</Button>
                        </CardFooter>
                    </Card>
                </GridItem>)
            });
        }
        return (
            <div>
                <Typography>
                    <h1>Our Services</h1>
                    <GridContainer>
                        {servicesCard}
                    </GridContainer>

                </Typography>
            </div>
        )
    }
}
