import React from "react";
import { Grid } from '@mui/material';;
import Input from "./input";


const PersonalDataForm = ({control}:any) => {

    return (
        <form>
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
            <Input
                control={control}
                name="name"
                type="text"
                ph="Nombre"
                rules={{ required: true }}
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <Input
                control={control}
                name="last-name"
                type="text"
                ph="Apellido"
                rules={{ required: true }}
            />
        </Grid>
        <Grid item xs={12}>
            <Input
                control={control}
                name="email"
                type="text"
                ph="E-mail"
                rules={{ required: true }}
            />
        </Grid>
    </Grid>
        </form >
    );
};

export default PersonalDataForm;