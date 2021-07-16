import React, {Fragment } from 'react'; 
import Typography from '@material-ui/core/Typography' ; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '4px',
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: '4px'
    },
    label:{
        fontSize: '1.1rem',
        marginRight: '20px'
    },
    value:{
        fontSize: '1.1rem',
        textTransform: 'capitalize'
    }
}));

const previewBox = ({lable, value}) => {
    const classes = useStyles();
    const noDataLabel = 'No Data';
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.label}>{lable.inputLabel} :</Typography>
            <Typography className={classes.value}>{value ? value : noDataLabel}</Typography>
        </div>
    )
} 

export default previewBox;