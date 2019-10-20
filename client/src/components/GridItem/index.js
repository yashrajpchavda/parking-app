
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
    mySlot: {
        backgroundColor: blue['200']
    },
    card: {
        maxHeight: 150,
        cursor: 'pointer',
        position: 'relative'
    },
    slotNumber: {
        position: 'absolute',
        left: 10,
        top: 5
    }
}));


const GridItem = ({ number, id, isOccupied, user, car, onCardClick }) => {
    const classes = useStyles();
    const handleGridItemClick = useCallback((event) => {
        onCardClick({ id, number, user, car, isOccupied });
    }, [isOccupied, id]);

    let details;

    if (isOccupied) {
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
        <Grid className={classes.card} item xs={3} sm={3} onClick={handleGridItemClick}>
            <Paper className={clsx(classes.paper, isOccupied && classes.occupied)}>
                <Typography className={classes.slotNumber} variant="caption">
                    {number}
                </Typography>
                {details}
            </Paper>
        </Grid>
    );
}

export default GridItem;