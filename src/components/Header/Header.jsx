import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Icon from "@material-ui/core/Icon";
import Modal from '@material-ui/core/Modal';
import LoginModal from '../../views/Login/LoginModal';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';


import routes from '../../routes/dashboard';
import headerStyle from "../../assets/jss/components/headerStyle.jsx";
// import GridContainer from '../../components/Grid/GridContainer';
// import GridItem from '../../components/Grid/GridItem';


import Poppers from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';

import Grid from '@material-ui/core/Grid';
import AuthContext from '../../context/AuthContext';



export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openDrawer: false
    }
  }

  toggleDrawer = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    })
  }
  openLoginModal = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    let links = routes.map((prop, key) => {
      return (
        <NavLink to={prop.path} activeClassName="active" key={key} >
          <ListItem button divider style={{ background: "" }} onClick={this.toggleDrawer} >
            <ListItemText primary={prop.sidebarName} disableTypography={true} />
          </ListItem>
        </NavLink>
      );
    });
    const drawer = <SwipeableDrawer open={this.state.openDrawer} onClose={this.toggleDrawer} style={{ width: "100px" }}>{links}</SwipeableDrawer>;

    const notifications = <Poppers
      open
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id="menu-list-grow"
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom"
          }}
        >
          <Paper>
            <ClickAwayListener>
              <div className={{ flex: '1' }}>
                <MenuList role="">
                  <MenuItem> Mike John responded to your email </MenuItem>
                </MenuList>
              </div>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Poppers>

    return (
      <AuthContext.Consumer>
        {(context) =>
          <AppBar style={{ display: "flex" }}>
            <Toolbar style={{ minHeight: "50px" }}>
              <Grid container spacing={16}>
                <Grid md direction="column" spacing={0}>
                  <IconButton onClick={this.toggleDrawer}>  <MenuIcon /> </IconButton>
                </Grid>
                {/* <Grid direction="column" spacing={0}>Aaradhya Telecom</Grid> */}
                {/* <Grid direction="column" >
                  {!context.isUserLoggedIn && <Button variant="flat" onClick={this.openLoginModal}> <PersonIcon />Login/Sign Up </Button>}

                  {context.isUserLoggedIn && <Button variant="flat" ><PersonIcon />Profile </Button>}
                </Grid> */}
                {drawer}
                <Modal open={this.state.open} onClose={this.openLoginModal} style={{ display: "flex", top: "10%", left: "35%", width: "30%", height: "60%" }}>
                  <LoginModal context={context} />
                </Modal>
              </Grid>
            </Toolbar>
          </AppBar>}
      </AuthContext.Consumer>
    )
  }
}



