import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function CustomDialog({
	showDialog,
	setShowDialog,
	dialogTitleText,
	dialogContentText,
	parent,
	buttonText,
}) {
	return (
		<Dialog
			open={showDialog}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'
			fullWidth={true}
			maxWidth={'xs'}>
			<DialogTitle id='alert-dialog-title'>{dialogTitleText}</DialogTitle>
			<a
				id='fancybox-close'
				style={{ display: 'inline' }}
				onClick={() => setShowDialog(false)}></a>
			<DialogContent>{dialogContentText}</DialogContent>
			<DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
				<div className='buttons'>
					<div className='inner'>
						<a href='/' className='btn green'>
							{buttonText}
						</a>
					</div>
				</div>
			</DialogActions>
		</Dialog>
	);
}

export default CustomDialog;
