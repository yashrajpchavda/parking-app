
import { h, Component } from 'preact';
import { useCallback, useContext } from 'preact/hooks';
import clsx from 'clsx';

import { AuthContext } from '../../../context/auth';

import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(0.5),
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 140
    },
    occupied: {
        backgroundColor: blueGrey['50']
    },
    unUsable: {
        backgroundColor: blueGrey['200']
    },
    mySpot: {
        backgroundColor: blue['100']
    },
    card: {
        maxHeight: 150,
        cursor: 'pointer',
        position: 'relative'
    },
    spotNumber: {
        position: 'absolute',
        left: 10,
        top: 5
    },
    phoneLink: {
        fontSize: '0.85rem',
        color: blue['500']
    }
}));

const isCurrentUser = (user, contextUser) => user && user.id && contextUser && contextUser.id && user.id === contextUser.id;

const ParkingSpot = ({ number, id, isOccupied, unUsable, user, car, onSpotClick }) => {
    const { user: contextUser } = useContext(AuthContext);

    const classes = useStyles();
    const handleGridItemClick = useCallback((event) => {
        if(unUsable) return;
        onSpotClick({ id, number, user, car, isOccupied });
    }, [isOccupied, id, unUsable]);

    const stopPropagation = useCallback(
        (e) => {
            e.stopPropagation();
        }
    )

    let details;

    if (unUsable) {
        details = (
            <Typography variant="body1" component="p">
                Not usable
			</Typography>
        );
    }
    else if (isOccupied) {
        details = (
            <>
                <Typography variant="body2" component="p">
                    {user.displayName}
                </Typography>
                <Typography variant="body2" component="p">
                    {car.plate}
                </Typography>
                <a href={`tel:${user.mobile}`} className={classes.phoneLink} onClick={stopPropagation}>{user.mobile}</a>
            </>
        );
    } else {
        details = (
            <Typography variant="body1" component="p">
                Empty
			</Typography>
        );
    }

    return (
        <Grid className={classes.card} item xs={3} sm={3} onClick={unUsable ? null : handleGridItemClick}>
            <Paper className={clsx(classes.paper, isOccupied && classes.occupied, isCurrentUser(user, contextUser) && classes.mySpot, unUsable && classes.unUsable)}>
                <Typography className={classes.spotNumber} variant="caption">
                    {!unUsable && number}
                </Typography>
                {details}
            </Paper>
        </Grid>
    );
}

export default ParkingSpot;