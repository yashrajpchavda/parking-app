import { h, Component } from 'preact';
import style from './style';
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
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

import { useQuery } from '@apollo/react-hooks';

const GET_PARKING_SPOTS = gql`
	query GetParkingSpots {
		getParkingSpots{
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

const GridItem = ({ number, id, isOccupied, user, car }) => {
	const classes = useStyles();

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

	const handleGridItemClick = (event) => {
		console.log('clicked', id, isOccupied);
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

const Home = () => {
	const { loading, data } = useQuery(GET_PARKING_SPOTS);

	const classes = useStyles();

	let parkingSpots = [];

	if(data) {
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
									key={number}
								 />
							 )
						 })}
					</Grid>
				</div>
			</div>)
		
	)
};

export default Home;
