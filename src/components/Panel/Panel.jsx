import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
});

class DetailedExpansionPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes, route } = this.props;
        let panel;
        if (route) {
            return (
                panel =
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <div className={classes.column}>
                            <Typography className={classes.heading} key={route.station.code}>Source : {route.station.name}</Typography>
                            <Typography className={classes.heading} key={route.station.code}>Destination : {route.station.name}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>Scheduled Arrival : {route.scharr}</Typography>
                            <Typography className={classes.secondaryHeading}>Scheduled Departure : {route.schdep}</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>Actual Arrival : {route.actarr}</Typography>
                            <Typography className={classes.secondaryHeading}>Actual Departure : {route.actdep}</Typography>
                        </div>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails className={classes.details}>
                       
                        <div className={classNames(classes.column, classes.helper)}>
                            <Typography variant="caption">
                                Select your destination of choice
                                    <br />
                                <a href="#sub-labels-and-columns" className={classes.link}>
                                    Learn more
                                     </a>
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                            Save
                            </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            )
        }
        return (
            <div className={classes.root}>
                {panel}
            </div>
        );
    }
}

DetailedExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailedExpansionPanel);