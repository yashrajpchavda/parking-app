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
		minHeight: 120
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
						className={classes.height} 
					 >
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body1" component="p">
									Empty
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Sandesh Almaeida
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography noWrap variant="body2" component="p">
									Kunal Chandegaonkar
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={3} sm={3}>
							<Paper className={classes.paper}>
								<Typography variant="body2" component="p">
									Yashraj Chavda
								</Typography>
								<Typography variant="body2" component="p">
									GJ18 BF 8249
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</div>)
		
	)
};

export default Home;
