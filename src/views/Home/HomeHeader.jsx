import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

import HomeHeaderImage from '../../assets/img/homeHeader.jpg';
import ContactUd from '../../views/ContactUs/ContactUs';
import services from '../../data/services.json';
import Typography from '@material-ui/core/Typography';

import Chip from '@material-ui/core/Chip';

import Slider from 'react-slick'
import Card from '../../components/Card/Card'
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer'
import GridItem from '../../components/Grid/GridItem'
import Blogs from '../../views/Blogs/Blogs'
import Slide from '@material-ui/core/Slide'

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
                return (
                    <Button component={Link} to={service.link} variant="outlined" color="primary" style={{ margin: "2px" }}>{service.title}</Button>
                    // <Chip
                    //     style={{ marginTop: "3px" }}
                    //     key={service.id}
                    //     color="primasecondaryry"
                    //     label={service.title}
                    //     onClick={() => alert('You selected', service.title)}
                    //     variant="outlined"
                    // />
                )
            });
        }
        return (
            <div>
                <Typography>
                    <GridContainer>

                        <GridItem xs={12} sm={12} md={12}>{servicesCard}</GridItem>

                    </GridContainer>
                </Typography>
            </div >
        )
    }
}
