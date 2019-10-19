import { h, Component } from 'preact';

import Dialog from '@material-ui/core/Dialog';
import ReleaseDialogContent from './ReleaseDialogContent';
import OccupyDialogContent from './OccupyDialogContent';


const SlotOccupyDialog = ({ openDialog, onDialogClose, slotData }) => {
    let DialogInnerContent;

    if(slotData && slotData.isOccupied) {
        DialogInnerContent = ReleaseDialogContent;
    } else {
        DialogInnerContent = OccupyDialogContent;
    }

    return (
        <Dialog open={openDialog} onClose={onDialogClose} aria-labelledby="form-dialog-title">
            <DialogInnerContent
                onDialogClose={onDialogClose}
            />
        </Dialog>
    );
}

export default SlotOccupyDialog;