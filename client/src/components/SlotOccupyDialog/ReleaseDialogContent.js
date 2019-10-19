import { h, Component } from 'preact';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const ReleaseDialogContent = ({ onDialogClose }) => {
    return (
        <>
            <DialogTitle id="form-dialog-title">Release slot</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                    </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onDialogClose} color="primary">
                    Cancel
                    </Button>
                <Button onClick={onDialogClose} color="primary">
                    Subscribe
                    </Button>
            </DialogActions>
        </>
    )
}

export default ReleaseDialogContent;