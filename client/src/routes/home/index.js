import { h, Component } from 'preact';
import { useState, useCallback, useContext } from 'preact/hooks';
import { route } from 'preact-router';
import { useQuery } from '@apollo/react-hooks';

import { AuthContext } from './../../context/auth';

import style from './style';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ParkingSpots from '../../components/ParkingSpots';
import SpotOccupyDialog from '../../components/SpotOccupyDialog';

import { GET_PARKING_SPOTS } from '../../graphql/queries';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: 16
	}
}));

const Home = () => {
	const { user: contextUser } = useContext(AuthContext);

	// route to login if user does not exist
	if (!contextUser) {
		route('/login');
	}

	const { loading, data } = useQuery(GET_PARKING_SPOTS);
	const [dialogData, setDialogData] = useState({
		open: false
	});

	const classes = useStyles();

	const handleSpotClick = useCallback(({ id, number, user, car, isOccupied }) => {
		setDialogData({
			open: true,
			spotData: {
				id,
				number,
				user,
				car,
				isOccupied
			}
		});
	});

	const onDialogClose = useCallback(() => {
		setDialogData({
			open: false
		});
	});

	let parkingSpots = [];

	if (data) {
		parkingSpots = data.getParkingSpots;
	}

	return (
		loading ?
			<h1>Loading...</h1> :
			(<div class={style.home}>
				<Typography variant="h5">Update parking spot</Typography>
				<div className={classes.root}>
					<ParkingSpots
						parkingSpots={parkingSpots}
						handleSpotClick={handleSpotClick}
					/>
					<SpotOccupyDialog
						openDialog={dialogData.open}
						onDialogClose={onDialogClose}
						spotData={dialogData.spotData}
					/>
				</div>
			</div>)

	)
};

export default Home;
