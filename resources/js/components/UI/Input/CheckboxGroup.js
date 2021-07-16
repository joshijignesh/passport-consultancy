import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const checkboxGroup = (props) => { 
    
    return (
        <FormControlLabel
            control={<Checkbox checked={props.value} onChange={props.changed} value={props.value} />}
            label={props.inputLabel}/>
    );
}
export default checkboxGroup;

checkboxGroup.propTypes  = {
    value: PropTypes.bool.isRequired, 
    changed: PropTypes.func.isRequired, 
}