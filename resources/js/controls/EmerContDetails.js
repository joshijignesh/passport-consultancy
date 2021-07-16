export const emerContDetailsControls = {
    name_address: {
        inputLabel:'Name and Address',
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            autofocus: true
        },
        value:'',
        validation: {
            required: false
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
            required: false,
            isEmail: true
        },
        valid: false,
        touched: false    
    },
}