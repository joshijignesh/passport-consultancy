export const presentResiControls = {
    isPresentOutOfIndia: {
        inputLabel:'Is your present address out of India?',
        elementType: 'switch',
        elementConfig: {
             type: 'checkbox',
             label: 'Yes'
        },
        value: false, 
        validation: { 
            required: false
        },
        valid: false,
        touched: false 
    },
    house_street: {
        inputLabel:'House No. and Street Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: true
        },
        value:'',
        validation: {
            required: true
        },
        valid: false,
        touched: false    
    },
    village_town_city: {
        inputLabel:'Name of Village or Town or City',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: true
        },
        valid: false,
        touched: false    
    },
    country:{
        inputLabel:'Country',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Country'},
                {value: 'India', displayValue: 'India'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: false
        }
    },
    state_province_n:{
        inputLabel:'State / Province',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select State'},
                {value: 'Gujarat', displayValue: 'Gujarat'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    state_province_y: {
        inputLabel:'State / Province',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    district_n:{
        inputLabel:'District',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select District'},
                {value: 'Bhavnager', displayValue: 'Bhavnager'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    district_y: {
        inputLabel:'District / Country',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    zip_pin_n:{
        inputLabel:'Pin',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    zip_pin_y:{
        inputLabel:'Zip Code',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
    police_station_n:{
        inputLabel:'Police Station',
        elementType: 'select',
        elementConfig: { 
            autofocus: false,
            options: [ 
                {value: '', displayValue: 'Select Police Station'}
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: true
        }
    },
    police_station_y: {
        inputLabel:'Police Station',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: true
        },
        valid: false,
        touched: false    
    },
    mobile_no: {
        inputLabel:'Mobile No',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: true,
            isMobile: true,
            isNumeric: true
        },
        valid: false,
        touched: false    
    },
    email_id: {
        inputLabel:'E-mail ID',
        elementType: 'input',
        elementConfig: {
            type: 'email',
            autofocus: false
        },
        value:'',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false    
    },
    isPermanentAddress: {
        inputLabel:'Do you have a Permanent Address?',
        elementType: 'switch',
        elementConfig: {
             type: 'checkbox',
             label: 'Yes'
        },
        value: false, 
        validation: { 
            required: false
        },
        valid: false,
        touched: false 
    },
    isPermanentSameAsPresent: {
        inputLabel:'Is permanent address same as present address?',
        elementType: 'switch',
        elementConfig: {
             type: 'checkbox',
             label: 'Yes'
        },
        value: true, 
        validation: { 
            required: false
        },
        valid: false,
        touched: false 
    },
    house_street_temp: {
        inputLabel:'House No. and Street Name',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    village_town_city_temp: {
        inputLabel:'Name of Village or Town or City',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false    
    },
    country_temp:{
        inputLabel:'Country',
        elementType: 'select',
        elementConfig: {
            options: [ 
                {value: '', displayValue: 'Select Country'} 
            ], 
        },
        value:'', 
        valid: false,
        touched: false,
        validation: {
            required: false
        }
    },
    zip_pin_temp:{
        inputLabel:'Pin',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: false,
        touched: false 
    },
}