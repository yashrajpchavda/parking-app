import gql from 'graphql-tag';

const GET_PARKING_SPOTS = gql`
	query GetParkingSpots {
		getParkingSpots {
			id
			isOccupied
			unUsable
			number
			car {
				id
				name
				plate
			}
			user {
				id
				displayName
				mobile
			}
		}
	}
`;

const GET_ALL_USERS = gql`
    query GetAllUsers {
        getAllUsers {
            id
            displayName
            email
            mobile
            isAdmin
            cars {
                id
                name
                plate
            }
        }
    }
`;

export { GET_PARKING_SPOTS, GET_ALL_USERS };