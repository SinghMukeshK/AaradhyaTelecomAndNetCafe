import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import blogs from '../../blogs/blog1.json';
import ShowBlog from './ShowBlog.jsx';
import articles from '../../blogs/blog2.js';
import BlogComponent from '../Blogs/BlogComponent';

import Card from '../../components/Card/Card';
import GridItem from '../../components/Grid/GridItem';
import CardBody from '../../components/Card/CardBody';
import Carrousel from '../../components/Carrousel/Carrousel';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer';

import BlogCategories from '../../views/Blogs/BlogCategories';
import Button from '@material-ui/core/Button'

export default class Blogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalArticles: []
        }
    }
    getArticleByLanguage = (articleId, articleLanguage) => {
        let article = articles.filter((article, language) => {
            if (article.id == articleId) {
                article.languages.filter(element => {
                    return element.language == articleLanguage;
                })
            }
        })
        console.log('Artivcle', article)
    }
    next = () => {
        console.log('next clieck');
    }
    previous = () => {
        console.log('this is previous');
    }
    changeLanguageHandler = (language, articleId) => {
        this.getArticleByLanguage(articleId, language);
    }
    handleCategoryClick = (category) => {
        let _articles = articles.filter(article => {
            return article.category == category;
        })
        this.setState({
            totalArticles: _articles
        })
    }
    componentDidMount() {
        this.handleCategoryClick('Technology');
    }
    render() {
        let articles;
        if (this.state.totalArticles.length > 0) {
            articles = this.state.totalArticles.map((element, key) => {
                return (
                    <Card plain>
                        <CardBody>
                            <ShowBlog
                                blog={element}
                                next={this.next}
                                previous={this.previous}
                                changeLanguage={this.changeLanguageHandler}
                            />
                        </CardBody>
                        {/* <CardFooter>
                            <Button variant="flat" component={Link} to={service.link}>View</Button>
                        </CardFooter> */}
                    </Card>
                )
            })
        } else {
            articles = this.state.totalArticles.map((element, key) => {
                return (
                    <Card>
                        <CardBody>
                            <ShowBlog
                                blog={element}
                                next={this.next}
                                previous={this.previous}
                                changeLanguage={this.changeLanguageHandler}
                            />
                        </CardBody>
                        {/* <CardFooter>
                            <Button variant="flat" component={Link} to={service.link}>View</Button>
                        </CardFooter> */}
                    </Card>
                )
            })
        }
        return (
            <Typography>
                <GridContainer>

                    {/* <GridItem xs={12} sm={12} md={9} style={{ marginTop: "15px" }}>
                      <BlogCategories handleCategoryClick={this.handleCategoryClick} />
                    </GridItem> */}
                    <GridItem xs={12} sm={12} md={9}>
                        {articles}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                        <Card>
                            <CardHeader color="primary">Categories</CardHeader>
                            <CardBody>
                                <BlogCategories handleCategoryClick={this.handleCategoryClick} />
                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                        <Card>
                            <CardHeader color="rose">Upcoming articles</CardHeader>
                            <CardBody></CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    </GridItem>

                </GridContainer>
            </Typography>
        )
    }
}
