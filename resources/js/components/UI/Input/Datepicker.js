import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import FormControl from '@material-ui/core/FormControl';
import { 
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const datepicker = (props) => {
    let validationError = null;
     
    

    if(!props.valid && props.shouldValidate && props.touched){ 
        validationError = (<p>Please enter a valid {props.valueType}</p>);
    }

    return (
        <FormControl component="fieldset" required={props.isRequired} fullWidth>
            <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                <KeyboardDatePicker  
                    id="date-picker-dialog"
                    label={ props.inputLabel }
                    format="dd/MM/yyyy"
                    value={props.value}
                    onChange={props.changed}
                    inputVariant="outlined" 
                    disableFuture={props.elementConfig.disableFuture} 
                    disablePast={props.elementConfig.disablePast} 
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />  
            </MuiPickersUtilsProvider>
        </FormControl>
    );
}
export default datepicker;

datepicker.propTypes  = {
    value: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    validation: PropTypes.any.isRequired,
    elementType: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired, 
}