import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

const ShowBlog = ({ ...props }) => {
    const { blog, next } = props;
    this.like = () => {
        console.log('liked');
    }
    let comments;
    if (blog.comments) {
        comments = blog.comments.map((comment, key) => {
            return <p>{comment.message}</p>
        })
    }

    return (
        <GridContainer>
            <GridItem xs={12} sm={9} md={9}>
                <Typography>
                    <h1>{blog.title}</h1>
                    <i>Posted by {blog.postedBy} on {blog.postedOn}  </i>
                    <p>{blog.description}</p>

                    <IconButton onClick={this.like}>
                        <Icon color="primary">thumb_up</Icon>
                    </IconButton>
                    <IconButton onClick={this.like}>
                        <Icon color="primary">thumb_down</Icon>
                    </IconButton>
                    {comments}
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
                    />
                    <Button variant="outlined" size="small" color="primary" >Previous</Button>
                    <Button
                        variant="outlined"
                        size="small"
                        color="primary"
                        style={{ float: "right" }}
                        onClick={next} >Next</Button>
                </Typography>
            </GridItem>
        </GridContainer>
    )
}

export default ShowBlog;