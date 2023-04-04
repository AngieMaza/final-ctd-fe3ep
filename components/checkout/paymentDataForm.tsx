import React from "react";
import { Grid } from '@mui/material';;
import Input from "./input";

const PaymentDataForm = ({ control }:any) => {

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="card-number"
                        type="text"
                        ph="Numero de la tarjeta"
                        rules={{ required: true }} 
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="card-name"
                        type="text"
                        ph="Nombre como aparece en la tarjeta"
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="card-date"
                        type="date"
                        ph="Fecha de Expiracion"
                        rules={{ required: true }} 
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="card-security"
                        type="password"
                        ph="Código de Seguridad"
                        rules={{ required: true }} 
                        />
                </Grid>
            </Grid>
        </form>
    );
};

export default PaymentDataForm;