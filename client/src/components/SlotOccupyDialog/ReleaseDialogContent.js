import { h, Component } from 'preact';
import { useCallback } from 'preact/hooks';

import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({

}));

const ReleaseDialogContent = ({ onDialogClose, slotData }) => {
    const classes = useStyles();

    const handleYesClick = useCallback(() => {
        console.log('yes clicked');
        onDialogClose();
    });

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
                <Button onClick={onDialogClose} color="secondary">
                    Cancel
                </Button>
            </DialogActions>
        </>
    )
}

export default ReleaseDialogContent;