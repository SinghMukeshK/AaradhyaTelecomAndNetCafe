import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter'
import Button from '@material-ui/core/Button'


const BlogComponent = ({ ...props }) => {
    const { blog } = props;
    return (
        <Typography>
            <Card>
                <CardBody>
                    <h1>  {blog.title}</h1>
                    <i>Posted by {blog.postedBy} on {blog.postedOn}  </i><br />
                    {blog.description}
                </CardBody>
                <CardFooter stats>
                    <Button variant="outlined" size="small" color="primary" >Previous</Button>
                    <Button variant="outlined" size="small" color="primary" style={{ float: "right" }} onClick={() => { }} >Next</Button>
                </CardFooter>
            </Card>
        </Typography>
    )
}

export default BlogComponent;
