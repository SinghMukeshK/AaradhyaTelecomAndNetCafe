import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

const style = {
  grid: {
    padding: "0 15px !important"
  }
};

function GridItem({ ...props }) {
  const { classes, children, ...rest } = props;
  
  console.log(...rest)
  return (
    <Grid item {...rest} className={classes.grid}>
    
      {children}
    </Grid>
  );
}

export default withStyles(style)(GridItem);
