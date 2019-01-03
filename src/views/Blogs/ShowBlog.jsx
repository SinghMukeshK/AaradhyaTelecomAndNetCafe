import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import PersonIcon from "@material-ui/icons/Person";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import { FormHelperText } from '@material-ui/core';

import AuthContext from '../../context/AuthContext';

class ShowBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReading: false,
            buttonText: 'More..',
            detailDescription: this.props.blog.description
        }
    }

    // handleClick = (language, articleId) => {
    //     let result = this.props.blog.languages.filter(element => { return element.language == language })
    // }
    changeLanguage = (language) => {
        this.props.blog.languages.filter(article => {
            if (article.language == language) {
                this.setState({
                    detailDescription: article.description
                })
            }
        })
    }

    showHideArticle = () => {
        if (this.state.isReading)
            this.setState({
                isReading: !this.state.isReading,
                buttonText: 'Less..',
                detailDescription: this.props.blog.detailDescription
            })
        else
            this.setState({
                isReading: !this.state.isReading,
                buttonText: 'More..',
                detailDescription: this.props.blog.description
            })
    }

    handleLike = (context) => {
        console.log(context)
    }
    render() {
        const { blog } = this.props;
        let comments; let languages; let detailDescription;

        // if (this.state.isReading) {
        //     this.setState({
        //         detailDescription: blog.detailDescription
        //     })
        // } else detailDescription = blog.description

        if (blog.comments) {
            comments = blog.comments.map((comment, key) => {
                return <p>{comment.message}</p>
            })
        }
        if (blog.languages) {
            languages = blog.languages.map((element, key) => {
                return <Chip
                    style={{ float: "right", margin: "2px" }}
                    label={element.language}
                    color="primary"
                    onClick={() => this.changeLanguage(element.language)}
                    variant="outlined"
                />
            })
        }
        return (
            <AuthContext.Consumer>
                {
                    (context) =>
                        <GridContainer>
                            <GridItem>
                                <Typography>
                                    <h1>{blog.title}</h1>
                                    <GridContainer>
                                        <GridItem xs={10} sm={10} md={10} style={{ display: "flex", alignContent: "space-around" }}>
                                            <PersonIcon color="primary" /> <i style={{ paddingTop: "5px" }}>Posted by {blog.postedBy} on {blog.postedOn}  </i>
                                        </GridItem>
                                        <GridItem xs={1} sm={2} md={2} >
                                            {/* {languages}  */}

                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12} >
                                            <div dangerouslySetInnerHTML={{ __html: this.state.detailDescription }}></div>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12} >
                                            <IconButton onClick={() => this.handleLike(context)}>
                                                <Icon color="primary">thumb_up</Icon>
                                            </IconButton>
                                            <IconButton onClick={this.like}>
                                                <Icon>thumb_down</Icon>
                                            </IconButton>
                                            <Button
                                                variant="flat"
                                                size="small"
                                                color="primary"
                                                style={{ float: "right" }}
                                                onClick={this.showHideArticle}>{this.state.buttonText}</Button>

                                        </GridItem>
                                    </GridContainer>

                                    {/* <Button variant="outlined" size="small" color="primary" >Previous</Button> */}


                                    {/* <IconButton onClick={this.like}>
                            <Icon color="primary">thumb_up</Icon>
                        </IconButton>
                        <IconButton onClick={this.like}>
                            <Icon color="primary">thumb_down</Icon>
                        </IconButton> */}
                                    {/* {comments}
                        <TextField
                            id="standard-full-width"
                            label="Comment"
                            style={{ margin: 1 }}
                            placeholder="Comment"
                            fullWidth
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /> */}
                                </Typography >
                            </GridItem>
                        </GridContainer >
                }
            </AuthContext.Consumer>
        )
    }
}

export default ShowBlog;