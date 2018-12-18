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
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
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
          <ListItem button >
            <ListItemText primary={prop.sidebarName} disableTypography={true} />
          </ListItem>
        </NavLink>
      );
    });
    const drawer = <SwipeableDrawer open={this.state.openDrawer} onClose={this.toggleDrawer} style={{ width: "100px" }}>{links}</SwipeableDrawer>;


    return (
      <AuthContext.Consumer>
        {(context) =>
          <AppBar color="primary" style={{ display: "flex" }}>
            <Toolbar style={{ minHeight: "50px" }}>
              <IconButton onClick={this.toggleDrawer}>  <MenuIcon /> </IconButton>
              <Typography variant="h6" color="inherit" noWrap>

              </Typography>

              {!context.isUserLoggedIn && <Button variant="flat" style={{ float: "right" }} onClick={this.openLoginModal} >
                <PersonIcon />Login/Sign Up </Button>}

              {context.isUserLoggedIn && <Button variant="outlined" style={{ float: "right" }}>
                <PersonIcon />Profile </Button>}

              {drawer}

              <Modal open={this.state.open} onClose={this.openLoginModal} style={{ display: "flex", top: "10%", left: "35%", width: "30%", height: "60%" }}>
                <LoginModal context={context} />
              </Modal>

            </Toolbar>
          </AppBar>}
      </AuthContext.Consumer>
    )
  }
}



