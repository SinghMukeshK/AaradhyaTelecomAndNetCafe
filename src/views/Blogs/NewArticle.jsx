import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import BlogsSchema from '../../forms/blogSchema'


export default class NewArticle extends Component {
    render() {
        let _form;
        _form = Object.keys(BlogsSchema).map((key, index) => {
            if (BlogsSchema[key].type === 'select') {
                return (
                    <Select>
                        {BlogsSchema[key].options.forEach(option => {
                           return <MenuItem value={option.key}>option.value</MenuItem>
                        })};
                    </Select>
                )
            }
            if (BlogsSchema[key].type === 'textbox') {
                return (
                    <TextField
                        id="outlined-full-width"
                        label={BlogsSchema[key].label}
                        style={{ margin: 8 }}
                        placeholder={key}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )
            }
            if (BlogsSchema[key].type === 'textarea') {
                return (
                    <TextField
                        id="outlined-full-width"
                        label={BlogsSchema[key].label}
                        style={{ margin: 8 }}
                        placeholder={key}
                        fullWidth
                        multiple
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                )
            }

        })
        return (
            <div>
                {_form}
                {/* <TextField
                    id="outlined-full-width"
                    label="Title"
                    style={{ margin: 8 }}
                    placeholder="Enter the title of your article"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="outlined-full-width"
                    label="Article"
                    style={{ margin: 8 }}
                    placeholder="Your article"
                    fullWidth
                    multiple
                    margin="dense"
                    variant="outlined"
                /> */}
            </div>
        )
    }
}
