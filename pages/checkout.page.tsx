import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout"
import { NextPageWithLayout } from "./_app.page"
import { ReactElement } from "react"
import Head from "next/head"
import BodySingle from "dh-marvel/components/layouts/body/single/body-single"
import { useForm } from 'react-hook-form';
import { Button, Stepper, Step, StepLabel} from '@mui/material';
import React from "react";
import PersonalDataForm from "../components/checkout/personalDataForm"
import DeliveryDataForm from "dh-marvel/components/checkout/deliveryDataForm"
import PaymentDataForm from "dh-marvel/components/checkout/paymentDataForm"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().min(5,"es minimo").matches(/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/, "segui la indicacion" ).required(),
    email: yup.string().email("Hola kaku").required("requirido bro"),
}).required();

const Checkout: NextPageWithLayout<[]> = () => {
    const {handleSubmit, control } = useForm({resolver: yupResolver(schema)});
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ["Datos Personales", "Dirección de entrega", "Datos del pago"];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (data:any) => {
        console.log(data);
    };

    const getStepContent = (step:number) => {
        switch (step) {
            case 0:
                return <PersonalDataForm control={control}/>;
            case 1:
                return <DeliveryDataForm control={control}/>;
            case 2:
                return <PaymentDataForm control={control}/>;
            default:
                throw new Error("Paso desconocido");
        }
    };
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <BodySingle title={"Checkout"}>
                <Stepper sx={{margin:4}} activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {getStepContent(activeStep)}
                <div style={{ marginTop: "2rem" }}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        color="primary"
                    >
                        Atrás
                    </Button>
                    <Button
                        style={{ marginLeft: "1rem" }}
                        variant="contained"
                        color="primary"
                        onClick={
                            activeStep === steps.length - 1 ? handleSubmit(onSubmit) : handleNext
                        }
                    >
                        {activeStep === steps.length - 1 ? "Enviar" : "Siguiente"}
                    </Button>
                </div>
            </BodySingle>
        </>
    )
}

Checkout.getLayout = function getLayout(page: ReactElement) {
    return <LayoutCheckout>{page}</LayoutCheckout>
}
export default Checkout