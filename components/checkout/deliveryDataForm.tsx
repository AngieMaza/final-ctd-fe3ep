import React from "react";
import { Grid } from '@mui/material';;
import Input from "./input";

const DeliveryDataForm = ({ control }:any) => {

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Input
                        control={control}
                        name="address"
                        type="text"
                        ph="Direccion"
                        rules={{ required: true }} 
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="depto"
                        type="text"
                        ph="Departmento, piso, etc..."
                        rules={{ required: false }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="city"
                        type="text"
                        ph="Ciudad"
                        rules={{ required: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="prov"
                        type="text"
                        ph="Provincia"
                        rules={{ required: true }} 
                        />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Input
                        control={control}
                        name="cp"
                        type="text"
                        ph="Codigo Postal"
                        rules={{ required: true }} 
                        />
                </Grid>
            </Grid>
        </form>
    );
};

export default DeliveryDataForm;