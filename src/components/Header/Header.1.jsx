import React from 'react';
import classNames from "classnames";
import PropTypes from "prop-types";

// import { NavLink } from "react-router-dom";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

// @material-ui/icons
import MenuIcon from '@material-ui/icons/Menu';

// core components
import HeaderLinks from "./HeaderLinks.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerStyle from "../../assets/jss/components/headerStyle.jsx";
//import Carrousel from '../../components/Carrousel/Carrousel.jsx';


// const languageHeader = () => {
//   return (<LanguageConsumer>
//     {({ updateLanguage }) => (
//       <header> see this site in:
//         <select onChange={updateLanguage}>
//           <option value="french">french</option>
//           <option value="english">english</option>
//           <option value="italian">italian</option>
//         </select>
//       </header>
//     )}
//   </LanguageConsumer>);
// };
console.log(this.context)
function Header({ ...props }) {
  function makeBrand() {
    var name;
    props.routes.map((prop, key) => {
      if (prop.path === props.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
  const { classes, color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color
  });
  return (
    <div>
      <AppBar className={classes.appBar + appBarClasses}>
        <Toolbar className={classes.container}>
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <div className={classes.flex}>
            {/* Here we create navbar brand, based on route name  */}
            <Button color="transparent" href="#" className={classes.title}>
              {makeBrand()}
            </Button>
          </div>
          <Hidden smDown implementation="css">
            <HeaderLinks />

          </Hidden>
          <Hidden mdUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={props.handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
