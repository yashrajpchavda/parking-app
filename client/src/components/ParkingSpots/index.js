import { h, Component } from 'preact';

import Grid from '@material-ui/core/Grid';

import ParkingSpot from './ParkingSpot';

const ParkingSpots = ({ parkingSpots, handleSpotClick }) => {
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            spacing={1}
        >
            {parkingSpots.map(({ number, isOccupied, id, user, car, unUsable }, index) => {
                return (
                    <ParkingSpot
                        number={number}
                        isOccupied={isOccupied}
                        unUsable={unUsable}
                        id={id}
                        user={user}
                        car={car}
                        onSpotClick={handleSpotClick}
                        key={number}
                    />
                )
            })}
        </Grid>
    );
};

export default ParkingSpots;