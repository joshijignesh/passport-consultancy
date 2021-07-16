export const orderControls = {
    name: {
        inputLabel:'Name',
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
    email: {
        inputLabel:'Email Id',
        elementType: 'input',
        elementConfig: {
            type: 'email',
            autofocus: false
        },
        value:'',
        validation: {
            required: true,
            isEmail: true,
        },
        valid: false,
        touched: false        
    },
    mobile: {
        inputLabel:'Mobile No.',
        elementType: 'input',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: true,
            isMobile: true,
        },
        valid: false,
        touched: false        
    },
    message: {
        inputLabel:'Notes',
        elementType: 'textarea',
        elementConfig: {
            type: 'text',
            autofocus: false
        },
        value:'',
        validation: {
            required: false
        },
        valid: true,
        touched: false    
    }
   
}