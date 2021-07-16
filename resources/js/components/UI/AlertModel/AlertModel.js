import React from 'react';
import Dialog  from '@material-ui/core/Dialog'; 
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SyncIcon from '@material-ui/icons/Sync';

const alertModel = ({isOpen, alertTextMain, alertTextSecondary, alertIdentifier, handleClose}) => { 
 
    let buttonText = '';
    let alertIcon = null;
    if(alertIdentifier === 'isCreatingOrderFailed'){
        buttonText = "Edit Application";
        alertIcon = <InfoIcon color="error" style={{ fontSize: "5.25rem" }}/>;
    }

    if(alertIdentifier === 'isPaymentVerified'){
        buttonText = "OK";
        alertIcon = <CheckCircleIcon color="primary" style={{ fontSize: "5.25rem" }}/>;
    }

    if(alertIdentifier === 'isPaymentFailed'){
        buttonText = "Try again";
        alertIcon = <SyncIcon color="action" style={{ fontSize: "5.25rem" }}/>;
    }

    if(alertIdentifier === 'success'){
        buttonText = "OK";
        alertIcon = <CheckCircleIcon color="primary" style={{ fontSize: "5.25rem" }}/>;
    }

    if(alertIdentifier === 'failed'){
        buttonText = "Try again";
        alertIcon = <InfoIcon color="error" style={{ fontSize: "5.25rem" }}/>;
    }

    return (
        <Dialog  open={isOpen} onClose={handleClose}>
            <Box style={{
                    display:'flex', 
                    flexDirection: 'column',
                    justifyContent:'center', 
                    alignItems:'center', 
                    width:'auto', 
                    height:'auto',
                    padding: '50px'
                    }}> 
                {alertIcon}
                <Typography variant="h6" align="center" style={{ marginTop: '20px'}}>{alertTextMain}</Typography>
                <Typography align="center">{alertTextSecondary}</Typography>
                <Button variant="contained" onClick={ handleClose } color="primary" style={{ margin:"20px 0" }}>{ buttonText }</Button>
            </Box> 
        </Dialog >
    );
}

export default alertModel;
