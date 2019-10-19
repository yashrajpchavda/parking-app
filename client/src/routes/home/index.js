import { h, Component } from 'preact';
import { useState, useCallback } from 'preact/hooks';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import style from './style';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridItem from '../../components/GridItem';

import SlotOccupyDialog from '../../components/SlotOccupyDialog';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
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
	const { loading, data } = useQuery(GET_PARKING_SPOTS);
	const [dialogData, setDialogData] = useState({
		open: false
	});

	const classes = useStyles();

	const handleCardClick = useCallback(({ id, number, user, car, isOccupied }) => {
		setDialogData({
			open: true,
			slotData: {
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
				<h1>Loaded</h1>
				<p>This is the Home component.</p>
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
					<SlotOccupyDialog
						openDialog={dialogData.open}
						onDialogClose={onDialogClose}
						slotData={dialogData.slotData}
					/>
				</div>
			</div>)

	)
};

export default Home;
