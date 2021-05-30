import React, {forwardRef} from 'react';
import {TextField} from "@material-ui/core";


const MyInput = forwardRef((props, ref) => {
    return <TextField
        fullWidth
        color={'primary'}
        variant={'filled'}
        margin={'normal'}
        inputRef={ref}
        {...props}
    />;
});


export default MyInput;
