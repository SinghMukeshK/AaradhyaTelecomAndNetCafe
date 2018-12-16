import React, { Component } from 'react';
import blogs from '../../blogs/blog1.json';
import ShowBlog from './ShowBlog.jsx';
import articles from '../../blogs/blog2.js';

import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import BlogComponent from '../Blogs/BlogComponent';

import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';
import CardBody from '../../components/Card/CardBody';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import BlogCategories from '../../views/Blogs/BlogCategories';

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
        console.log('_articles', _articles)
    }
    render() {
        let articles;
        if (this.state.totalArticles.length > 0) {
            articles = this.state.totalArticles.map((element, key) => {
                return (
                    <ShowBlog
                        blog={element}
                        next={this.next}
                        previous={this.previous}
                        changeLanguage={this.changeLanguageHandler}
                    />
                )
            })
        } else {
            articles = blogs.map((element, key) => {
                return (
                    <ShowBlog
                        blog={element}
                        next={this.next}
                        previous={this.previous}
                        changeLanguage={this.changeLanguageHandler}
                    />
                )
            })
        }
        return (
            <Typography>
                <GridContainer>
                    <br/>
                    <GridItem xs={12} sm={12} md={12}>
                        <BlogCategories handleCategoryClick={this.handleCategoryClick} />
                    </GridItem>
                     <GridItem xs={12} sm={12} md={12}>
                        {articles}
                    </GridItem>
                    {/*<GridItem xs={12} sm={3} md={3}>
                        <Card>
                            <CardHeader color="">Categories</CardHeader>
                            <CardBody>

                            </CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                        <Card>
                            <CardBody>Upcoming articles</CardBody>
                            <CardFooter></CardFooter>
                        </Card>
                    </GridItem> */}
                </GridContainer>
            </Typography>
        )
    }
}
