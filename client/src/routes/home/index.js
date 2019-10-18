import { h, Component } from 'preact';
import style from './style';
import gql from 'graphql-tag';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
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
				username
				displayName
				email
			}
		}
	}
`;

const Home = () => {
	const { loading, data } = useQuery(GET_PARKING_SPOTS);

	const classes = useStyles();

	if(data) {
		console.log('data is', data);
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
					 >
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>1</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>2</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>3</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>4</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>5</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>6</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>7</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>8</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>9</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>10</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>11</Paper>
						</Grid>
					</Grid>
				</div>
			</div>)
		
	)
};

export default Home;
