import gql from 'graphql-tag';

const RELEASE_PARKING_SPOT = gql`
    mutation ReleaseParkingSpot($toggleInput: ToggleParkingSpotInput!) {
        releaseParkingSpot(toggleInput: $toggleInput) {
            id
            number
            isOccupied
            occupiedAt
            user {
                id
                displayName
                mobile
            }
            car {
                id
                plate
                name
            }
        }
    }
`;

const OCCUPY_PARKING_SPOT = gql`
    mutation OccupyParkingSpot($toggleInput: ToggleParkingSpotInput!){
        occupyParkingSpot(toggleInput: $toggleInput) {
            id
            number
            isOccupied
            occupiedAt
            user {
                id
                displayName
                mobile
            }
            car {
                id
                plate
                name
            }
        }
    }
`;

const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            id
            email
            token
            displayName
        }
    }
`;

export { RELEASE_PARKING_SPOT, OCCUPY_PARKING_SPOT, LOGIN_USER };