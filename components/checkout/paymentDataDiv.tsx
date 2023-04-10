import React from "react";
import { Button, Grid, Typography } from '@mui/material';;
import Input from "./input";
import CheckButton from "../buttons/checkButton";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


const PaymentDataDiv = ({ control, handler, getValues }: any) => {
    const numberState = getValues("number")
    
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Grid item xs={12} sm={10} sx={{marginBottom: 2}}>
                        <Input
                            control={control}
                            name="number"
                            type="text"
                            ph="Numero de la tarjeta"
                        />
                    </Grid>
                    <Grid item xs={4} sm={10} sx={{marginBottom: 2}}>
                        <Input
                            control={control}
                            name="nameOnCard"
                            type="text"
                            ph="Nombre como aparece en la tarjeta"
                        />
                    </Grid>
                    <Grid item xs={4} sm={10} sx={{marginBottom: 2}}>
                        <Input
                            control={control}
                            name="expDate"
                            type="text"
                            ph="Fecha de Expiracion"
                        />
                    </Grid>
                    <Grid item xs={4} sm={10}>
                        <Input
                            control={control}
                            name="cvc"
                            type="password"
                            ph="Código de Seguridad"
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <Cards
                        cvc={''}
                        expiry={''}
                        name={''}
                        number={numberState}
                    // focused={this.state.focus}
                    />                
                </Grid>
            </Grid>
            <div style={{ marginTop: "2rem" }}>
                <CheckButton onClick={handler} name="Atras" disabled={false} />
                <Button type="submit" variant="contained" sx={{ marginLeft: "1rem", color: "primary" }}> Enviar </Button>
            </div>
        </>
    );
};

export default PaymentDataDiv;