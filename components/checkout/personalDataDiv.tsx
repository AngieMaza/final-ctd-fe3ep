import React from "react";
import Grid from '@mui/material/Grid';
import Input from "./input";
import CheckButton from "../buttons/checkButton";


const PersonalDataDiv = ({ control, handler }: any) => {

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="name"
                        type="text"
                        ph="Nombre"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="last-name"
                        type="text"
                        ph="Apellido"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Input
                        control={control}
                        name="email"
                        type="text"
                        ph="E-mail"
                    />
                </Grid>
            </Grid>
            <div style={{ marginTop: "2rem" }}>
                <CheckButton onClick={handler} name= "Siguiente" disabled={false} />
            </div>
        </ >
    );
};

export default PersonalDataDiv;