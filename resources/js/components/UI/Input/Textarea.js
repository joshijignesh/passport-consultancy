import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";

const CssTextField = withStyles({
    root: {
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#FFF",
                borderRadius: 50
            }
        }
    }
})(TextField);

const textarea = props => {
    let validationError = null;

    if (!props.valid && props.shouldValidate && props.touched) {
        validationError = <p>Please enter a valid {props.valueType}</p>;
    }

    return (
        <CssTextField
            label={props.inputLabel}
            variant="outlined"
            error={!props.valid && props.touched}
            required={props.validation.required}
            style={{ minWidth: 250 }}
            onChange={props.changed}
            value={props.value}
            type={props.elementConfig.type}
            autoFocus={props.elementConfig.autofocus}
            multiline
            rows={4}
            fullWidth
        />
    );
};
export default textarea;

textarea.propTypes = {
    value: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    elementType: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
};
