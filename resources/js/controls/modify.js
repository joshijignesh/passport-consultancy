export const modifyControls = {
    orderRefNo: {
        inputLabel:'Order Ref. No.',
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
    mobileNo: {
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
            isNumeric: true
        },
        valid: false,
        touched: false    
    }
}