import { h, Component } from 'preact';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const SlotOccupyDialog = ({ openDialog, onDialogClose }) => {
    return (
        <Dialog open={openDialog} onClose={onDialogClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Slot</DialogTitle>
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
        </Dialog>
    );
}

export default SlotOccupyDialog;