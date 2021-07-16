import React from "react";
import PropTypes from "prop-types";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, OutlinedInput } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    },
    selectRoot: {
        width: "200px",
        "&:focus": {
            backgroundColor: "transparent"
        }
    },
    selected: {}
}));
const useOutlinedInputStyles = makeStyles(theme => ({
    root: {
        "& $notchedOutline": {
            borderRadius: 50
        },
        "&: ": {
            backgroundColor: "rgba(52, 52, 52, 0.8)"
        }
    },
    focused: {},
    notchedOutline: {}
}));

const select = props => {
    const classes = useStyles();

    const outlinedInputClasses = useOutlinedInputStyles();
    let validationError = null;

    const inputLabelRef = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabelRef.current.offsetWidth);
    }, []);

    if (!props.valid && props.shouldValidate && props.touched) {
        validationError = <p>Please enter a valid {props.valueType}</p>;
    }

    return (
        <FormControl
            variant="outlined"
            error={!props.valid && props.touched}
            required={props.validation.required}
            style={{ minWidth: 250 }}
            fullWidth
            root
        >
            <InputLabel ref={inputLabelRef}>{props.inputLabel}</InputLabel>
            <Select
                classes={{ root: classes.selectRoot }}
                input={
                    <OutlinedInput
                        labelWidth={labelWidth}
                        name="age"
                        id="outlined-age-simple"
                        classes={outlinedInputClasses}
                    />
                }
                value={props.value}
                onChange={props.changed}
                labelWidth={labelWidth}
                inputProps={{
                    readOnly: props.readonly
                }}
            >
                {props.elementConfig.options.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.displayValue}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
export default select;

select.propTypes = {
    value: PropTypes.any.isRequired,
    valid: PropTypes.bool.isRequired,
    elementType: PropTypes.any.isRequired,
    elementConfig: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    shouldValidate: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired
};
