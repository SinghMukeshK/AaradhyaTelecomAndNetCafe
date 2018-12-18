import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';


export default class NewArticle extends Component {
    render() {
        return (
            <div>
                <TextField
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
                />
            </div>
        )
    }
}
