import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout"
import { NextPageWithLayout } from "./_app.page"
import { ReactElement } from "react"
import Head from "next/head"
import BodySingle from "dh-marvel/components/layouts/body/single/body-single"
import { useForm } from 'react-hook-form';
import { Stepper, Step, StepLabel, Button} from '@mui/material';
import React from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import PersonalDataDiv from "../components/checkout/personalDataDiv"
import DeliveryDataDiv from "dh-marvel/components/checkout/deliveryDataDiv"
import PaymentDataDiv from "dh-marvel/components/checkout/paymentDataDiv"

const schema = yup.object({
    name: yup.string().matches(/"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/, "segui la indicacion" ).required("requirido bro"),
    email: yup.string().email("Hola kaku").required("requirido bro"),
}).required();

type FormData = yup.InferType<typeof schema>;


const Checkout: NextPageWithLayout<[]> = () => {
    const {handleSubmit, control , trigger} = useForm<FormData>({resolver: yupResolver(schema)});
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ["Datos Personales", "Dirección de entrega", "Datos del pago"];

    const handleNext = async() => {
        const name = await trigger("name");
        name && setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const onSubmit = (data:any) => {
        console.log(data);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                {activeStep === 0 && <PersonalDataDiv control={control}  handler ={handleNext}/>}
                {activeStep === 1 && <DeliveryDataDiv control={control} handler ={handleNext} handler2 ={handleBack}/>}
                {activeStep === 2 && <PaymentDataDiv control={control} handler ={handleBack}/>}
                {activeStep === 2 && <Button type="submit"> Enviar </Button> }
                </form>
            </BodySingle>
        </>
    )
}

Checkout.getLayout = function getLayout(page: ReactElement) {
    return <LayoutCheckout>{page}</LayoutCheckout>
}
export default Checkout