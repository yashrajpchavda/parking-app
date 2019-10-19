
import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';

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
        console.log('clicked', id, isOccupied);
        onCardClick({ id, number, user, car });
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
            <Paper className={classes.paper}>
                <Typography className={classes.slotNumber} variant="caption">
                    {number}
                </Typography>
                {details}
            </Paper>
        </Grid>
    );
}

export default GridItem;