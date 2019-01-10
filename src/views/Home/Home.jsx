import React, { Component } from 'react'

import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import Blogs from '../../views/Blogs/Blogs';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';
import Slider from 'react-slick';

import HomeHeader from './HomeHeader'
import News from '../../views/Services/News';

import NewsContext from '../../context/NewsContext';

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
    }

    render() {
        // setInterval(async () => {
        //     await this.setState({
        //         welcomeMessage: `${Math.random()}`
        //     })
        // }, 3000);

        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500
        }
        return (
            <NewsContext.Consumer>
                {news => (
                    <div>
                        <HomeHeader />
                        <Blogs />
                        <News data={news} />
                    </div>
                )}
            </NewsContext.Consumer>
        )
    }
}
