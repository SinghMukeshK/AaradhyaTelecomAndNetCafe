import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import { FormHelperText} from '@material-ui/core';

class ShowBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleClick = (language, articleId) => {
        let result = this.props.blog.languages.filter(element => { return element.language == language })
    }
    next = () => {

    }
    render() {
        const { blog } = this.props;
        let comments; let languages;
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
                    onClick={() => this.props.changeLanguage(element.language, blog.id)}
                    variant="outlined"
                />
            })
        }
        return (
            <Typography>
                <GridContainer>
                    <GridItem>
                        <h1>{blog.title}</h1>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6} style={{ marginTop: "8px" }} >
                                <i>Posted by {blog.postedBy} on {blog.postedOn}  </i>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6} >
                                {languages}
                            </GridItem>
                        </GridContainer>
                        <Divider />
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            wordWrap: "break-word"
                        }}>{blog.description}</div>

                        <Button variant="outlined" size="small" color="primary" >Previous</Button>
                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            style={{ float: "right" }}
                            onClick={this.next} >Next</Button>
                        <IconButton onClick={this.like}>
                            <Icon color="primary">thumb_up</Icon>
                        </IconButton>
                        <IconButton onClick={this.like}>
                            <Icon color="primary">thumb_down</Icon>
                        </IconButton>
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
                    </GridItem>
                </GridContainer >
            </Typography>
        )
    }
}

export default ShowBlog;