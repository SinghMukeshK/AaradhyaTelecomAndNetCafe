import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import footerStyle from '../../assets/jss/components/footerStyle.jsx';
import Carrousel from '../../components/Carrousel/Carrousel.jsx';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <div></div>
    // <footer className={classes.footer}>
    //   <div className={classes.container}>
    //     <div className={classes.left}>
          /* <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="/" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/aboutUs" className={classes.block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="/contactUs" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}> */
              // <Carrousel/>
            /* </ListItem>
          </List> */
      //   </div>
      //   <p className={classes.right}>
         
      //   </p> 
      // </div>
    //</footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
