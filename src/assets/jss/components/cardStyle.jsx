const cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "7px",
    color: "rgba(0, 0, 0, 0.87)",
    // background: `url(https://res.cloudinary.com/acloud-guru/image/fetch/w_300,h_300,q_auto,f_auto/https%3A%2F%2Facloudguru-content-assets-production.s3-accelerate.amazonaws.com%2Fintro-cloud-computing-2-square.png)`,
    background: "#fff",
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    minHeight: "200px"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

export default cardStyle;
