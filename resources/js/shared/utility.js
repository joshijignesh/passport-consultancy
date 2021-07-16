export const updateObject = (oldObject, updatedProperties) => {

    return {
        ...oldObject,
        ...updatedProperties
    };
}

export const checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required){
        if(typeof(value) === 'string'){
            isValid = value.trim() !== '' && isValid;
        }else{
            isValid = value && isValid;
        }
        
    }

    if(rules.minLength){
        isValid = value.trim().length >= 6 && isValid;
    }

    if(rules.maxLength){
        isValid = value.trim().length <= 10 && isValid;
    }

    if(rules.isEmail){
        const pattern =  /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = pattern.test(value) && isValid;
    }

    if(rules.isMobile){
        let val = null;
        if(value){
            val = value.trim();
            val = val.length >= 10 && val.length<=13;
        }
        isValid =  val && isValid;
    }
    if(rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    if(rules.isAadhar){
        isValid = value ? value.trim().length === 12 && isValid : isValid;
    }

    if(rules.isPAN){
        const pattern = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        isValid = pattern.test(value) && isValid;
    }

    if(rules.isVoterID){
        const pattern = /^([a-zA-Z]){3}([0-9]){7}?$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
}

export const selectPreview = (control) => { 
  const options = control.elementConfig.options.filter((item) => {
                    return control.value == item.value;
                })[0];  

    return (options && options.value) ? options.displayValue : '';
}

export const booleanPreview = (control) => {
    return control.value ? 'Yes' : 'No';
}

export const multiCheckBoxList = (controls)=> {

    const filteredControls = controls.filter(control => {
        return control.value;
    })

    const filtredvalues= filteredControls.map(item => item.inputLabel);

    return filtredvalues.join(' ,');

}