import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton'

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class ShowBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'English'
        }
    }

    handleChange = (value) => {
        console.log(value)
        //let result = this.props.blog.languages.filter(element => { return element.language == language })
        this.setState({
            value: value
        })
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
                // return 
                return (
                    <GridItem>
                        <Tabs value={this.state.value} onChange={() => this.handleChange(element.language)}>
                            <Tab label={element.language} />
                        </Tabs>
                        {this.state.value === element.language &&
                            <TabContainer>
                                <GridContainer>
                                    {element.description}
                                </GridContainer>
                            </TabContainer>}
                    </GridItem>
                )
            })
        }
        return (
            <div>
                <GridItem xs={12} sm={9} md={9}>
                    <Typography>
                        <h1>{blog.title}</h1>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}  ><i>Posted by {blog.postedBy} on {blog.postedOn}  </i></GridItem>
                        </GridContainer>
                        <GridContainer>
                            {languages}
                        </GridContainer>

                        {/* <div style={{
                            display: "flex",
                            justifyContent: "center",
                            wordWrap: "break-word"
                        }}>{blog.description}</div> */}

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
                            onClick={this.next} >Next</Button>
                    </Typography>
                </GridItem>
            </div>
        )
    }
}

export default ShowBlog;