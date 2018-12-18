import {
  drawerWidth,
  transition,
  container
} from "../applicationStyles.jsx";

const appStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0"
    // height: "100vh"
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${0}px)`
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch"
  },
  content: {
    padding: "50px 0px",
    minHeight: "calc(100vh - 123px)"
  },
  container,
  map: {
    marginTop: "70px"
  },
  rightContainer: {
    width: "100px"
  }
});

export default appStyle;
