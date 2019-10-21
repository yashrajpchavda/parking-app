
import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';
import clsx from 'clsx';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';

import Grid from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
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
        backgroundColor: blue['200']
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
    }
}));


const GridItem = ({ number, id, isOccupied, unUsable, user, car, onCardClick }) => {
    const classes = useStyles();
    const handleGridItemClick = useCallback((event) => {
        if(unUsable) return;
        onCardClick({ id, number, user, car, isOccupied });
    }, [isOccupied, id, unUsable]);

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
            <Paper className={clsx(classes.paper, isOccupied && classes.occupied, unUsable && classes.unUsable)}>
                <Typography className={classes.spotNumber} variant="caption">
                    {!unUsable && number}
                </Typography>
                {details}
            </Paper>
        </Grid>
    );
}

export default GridItem;