import { h, Component } from 'preact';

import Dialog from '@material-ui/core/Dialog';
import ReleaseDialogContent from './ReleaseDialogContent';
import OccupyDialogContent from './OccupyDialogContent';

const SpotOccupyDialog = ({ openDialog, onDialogClose, spotData }) => {
    let DialogInnerContent;

    if (spotData && spotData.isOccupied) {
        DialogInnerContent = ReleaseDialogContent;
    } else if (spotData) {
        DialogInnerContent = OccupyDialogContent;
    } else {
        DialogInnerContent = null;
    }

    return (
        <Dialog
            open={openDialog}
            onClose={onDialogClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogInnerContent
                onDialogClose={onDialogClose}
                spotData={spotData}
            />
        </Dialog>
    );
};

export default SpotOccupyDialog;
