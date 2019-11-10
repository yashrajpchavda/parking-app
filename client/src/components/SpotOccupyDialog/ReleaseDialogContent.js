import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';
import { useMutation } from '@apollo/react-hooks';

import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { RELEASE_PARKING_SPOT } from '../../graphql/mutations';

const ReleaseDialogContent = ({ onDialogClose, spotData }) => {
    const [releaseParkingSpot, {data: releaseMutationData}] = useMutation(RELEASE_PARKING_SPOT);

    const { id: spotId } = spotData;

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
            <DialogTitle id="form-dialog-title">Release spot</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Would you like to release the occupied spot?
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