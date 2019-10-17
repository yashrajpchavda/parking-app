import style from './style';
import gql from 'graphql-tag';

import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';

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

	if(data) {
		console.log('data is', data);
	}
	return (
		loading ? 
			<h1>Loading...</h1> :
			(<div class={style.home}>
				<h1>Loaded</h1>
				<p>This is the Home component.</p>
				<div>
					<LayoutGrid>
						<LayoutGrid.Inner>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								1
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								2
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								3
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								4
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								5
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								6
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								7
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								8
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								9
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								10
							</LayoutGrid.Cell>
							<LayoutGrid.Cell cols="3" phoneCols="1">
								11
							</LayoutGrid.Cell>
						</LayoutGrid.Inner>
					</LayoutGrid>
				</div>
			</div>)
		
	)
};

export default Home;
