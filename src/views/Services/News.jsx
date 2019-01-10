import React, { Component } from 'react'
import axios from 'axios';

import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import Card from '../../components/Card/Card.jsx'
import CardHeader from '../../components/Card/CardHeader.jsx'
import CardFooter from '../../components/Card/CardFooter.jsx'
//import CardIcon from '../../components/Card/CardIcon.jsx'
import CardBody from '../../components/Card/CardBody.jsx'
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";


import MaterialCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import CircularProgress from '@material-ui/core/CircularProgress';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import { ScrollableTabsButtonAuto } from "../../components/Tab/ScrollableTabsButtonAuto.jsx";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import NewsContext from '../../context/NewsContext';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class News extends Component {
    // loadNews() {
    //     axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=69a9c2d337d4411f92c3b2ad26cc3103')
    //         .then(response => {
    //             this.setState({
    //                 news: response.data.articles
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }
    // loadNewsSources() {
    //     axios.get('https://newsapi.org/v2/sources?apiKey=69a9c2d337d4411f92c3b2ad26cc3103')
    //         .then(response => {
    //             console.log(response)
    //             this.setState({
    //                 sources: response.data.sources,
    //                 isloading: false
    //             })
    //         })
    //         .catch(err => console.log(err))
    // }
    componentDidMount() {
        //this.loadNews();
        //this.loadNewsSources();
    }
    handleChange = (events, value) => {
        this.setState({
            value: value
        })
    }
    render(props) {
        console.log(this.props)
        this.state = {
            value: 1,
            isloading: true,
            news: this.props.data.news,
            sources: []
        }
        let newsSource, _news;
        const { sources, isLoading, value, news } = this.state;
        if (sources && !isLoading) {
            let color;
            newsSource = sources.map((source, key) => {
                if (key % 4 === 0) color = "rose"
                else if ((key % 5 === 0)) color = "success"
                else if ((key % 3 === 0)) color = "info"
                else color = "warning"
                return (
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                        <GridItem xs={12} sm={6} md={4}>
                            <Card>
                                <CardHeader color={color}>{source.name}</CardHeader>
                                <CardBody>
                                    {source.description}
                                </CardBody>
                                <CardFooter stats>
                                    {source.url}
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Slide>
                )
            })
        } else {
            newsSource = <GridItem xs={12} sm={12} md={12}>
                <CircularProgress color="secondary" />
            </GridItem>
        }

        if (news) {
            _news = news.map((element, key) => {
                console.log(element)
                return (
                    <GridItem xs={12} sm={6} md={4}>
                        <MaterialCard>
                            <CardActionArea>
                                <CardMedia
                                    style={{ height: 140 }}
                                    image={element.urlToImage}
                                    title={element.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {element.title}
                                    </Typography>
                                    <Typography component="p">
                                        {element.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </MaterialCard>
                    </GridItem>
                )
            })
        }
        return (
            <div>

                <Tabs
                    value={value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollable
                    scrollButtons="auto"
                >
                    <Tab value={1} label="News" />
                    <Tab value={0} label="News Sources" />
                </Tabs>

                {value === 0 && <TabContainer>
                    <GridContainer>
                        {newsSource}
                    </GridContainer>
                </TabContainer>}

                {value === 1 && <TabContainer>
                    <GridContainer>
                        {_news}
                    </GridContainer>
                </TabContainer>}
            </div>
        )
    }
}

export default News