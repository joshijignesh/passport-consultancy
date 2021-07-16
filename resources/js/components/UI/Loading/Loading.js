import React from 'react';
import Dialog  from '@material-ui/core/Dialog'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const loading = ({isOpen, loadingText}) => {

    return (
        <Dialog  open={isOpen}>
            <Box style={{
                    display:'flex', 
                    flexDirection: 'column',
                    justifyContent:'center', 
                    alignItems:'center', 
                    width:'auto', 
                    height:'200px',
                    padding: '50px'
                    }}> 
                 <CircularProgress color="secondary" size={60}/>
                <Typography variant="h6" align="center" style={{ marginTop: '20px'}}>{loadingText}</Typography>
            </Box> 
        </Dialog >
    );
}

export default loading;
