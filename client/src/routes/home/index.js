import { Component } from 'preact';
import { useState, useCallback, useContext } from 'preact/hooks';
import { route } from 'preact-router';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { AuthContext } from './../../context/auth';

import style from './style';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import GridItem from '../../components/GridItem';
import SpotOccupyDialog from '../../components/SpotOccupyDialog';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		marginTop: 16
	}
}));

const GET_PARKING_SPOTS = gql`
	query GetParkingSpots {
		getParkingSpots {
			id
			isOccupied
			number
			car {
				id
				name
				plate
			}
			user {
				id
				displayName
			}
		}
	}
`;

const Home = () => {
	const { user } = useContext(AuthContext);

	// route to login if user does not exist
	if (!user) {
		route('/login');
	}

	const { loading, data } = useQuery(GET_PARKING_SPOTS);
	const [dialogData, setDialogData] = useState({
		open: false
	});

	const classes = useStyles();

	const handleCardClick = useCallback(({ id, number, user, car, isOccupied }) => {
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

	const onDialogClose = () => {
		setDialogData({
			open: false
		});
	}

	let parkingSpots = [];

	if (data) {
		parkingSpots = data.getParkingSpots;
	}
	return (
		loading ?
			<h1>Loading...</h1> :
			(<div class={style.home}>
				<Typography variant="h5">Choose / release a parking spot</Typography>
				<div className={classes.root}>
					<Grid
						container
						direction="row"
						justify="flex-start"
						alignItems="stretch"
						spacing={1}
						className={classes.height}
					>
						{parkingSpots.map(({ number, isOccupied, id, user, car }, index) => {
							return (
								<GridItem
									number={number}
									isOccupied={isOccupied}
									id={id}
									user={user}
									car={car}
									onCardClick={handleCardClick}
									key={number}
								/>
							)
						})}
					</Grid>
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
