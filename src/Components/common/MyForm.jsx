import React from 'react';
import {useForm} from "react-hook-form";
import {Button, makeStyles} from "@material-ui/core";
import {yupResolver} from "@hookform/resolvers/yup";

import MyInput from "./MyInput";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
    },
    buttons: {
        display: 'flex',
        alignSelf: 'flex-end',

        '& button': {
            margin: theme.spacing(1),
        }
    }
}))

const MyForm = ({children, ...props}) => {
    const styles = useStyles();

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(props.schema),
    });

    return (
        <form onSubmit={handleSubmit(props.onSubmit)} className={styles.root}>
            <div>
                {children.fields.map(field => (
                    <MyInput
                        key={field.name}
                        label={field.label}
                        error={!!errors[field.name]?.message}
                        helperText={errors[field.name]?.message}
                        {...register(field.name)}
                        {...field.props}
                    />
                ))}
            </div>
            <div className={styles.buttons}>
                {children.buttons.map(button => {
                    if (button.type === 'submit') {
                        return <Button key={button.name} type={'submit'}
                                       color={'primary'} variant={'contained'} {...button.props}>
                            {button.name || 'submit'}
                        </Button>
                    }

                    return <Button key={button.name} variant={'outlined'} onClick={button.action} {...button.props}>
                        {button.name}
                    </Button>
                })}
            </div>
        </form>
    );
};

export default MyForm;
