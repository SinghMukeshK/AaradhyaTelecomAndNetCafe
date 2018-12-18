import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

class LoginModal extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader color="warning">Login</CardHeader>
                <CardBody>
                    <GridContainer>
                        {/* <GridItem xs={12} sm={12} md={6}></GridItem> */}
                        <GridItem xs={12} sm={12} md={12}>
                            <TextField id="standard-name" label="Username" placeholder="Enter your username" margin="dense" fullWidth />
                            <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" margin="dense" fullWidth />
                            <Button variant="outlined" color="primary" fullWidth onClick={() => this.props.context.handleUserLogin('newname', 'password')}>Login </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    }
}
export default LoginModal;