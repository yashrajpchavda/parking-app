import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

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
            }
            car {
                id
                plate
                name
            }
        }
    }
`;


const useStyles = makeStyles(theme => ({

}));

const ReleaseDialogContent = ({ onDialogClose, slotData }) => {
    const classes = useStyles();
    const [releaseParkingSpot, {data: releaseMutationData}] = useMutation(RELEASE_PARKING_SPOT);

    const { id: spotId } = slotData;

    const handleYesClick = useCallback(() => {
        releaseParkingSpot({
            variables: {
                toggleInput: {
                    spotId
                }
            }
        }).then(() => {
            console.log('release successfully');
            onDialogClose();    
        });
    }, [spotId]);

    return (
        <>
            <DialogTitle id="form-dialog-title">Release slot</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Would you like to release the occupied slot?
                </DialogContentText>

            </DialogContent>
            <DialogActions>
                <Button onClick={handleYesClick} color="primary">
                    Yes
                </Button>
                <Button onClick={onDialogClose}>
                    Cancel
                </Button>
            </DialogActions>
        </>
    )
}

export default ReleaseDialogContent;