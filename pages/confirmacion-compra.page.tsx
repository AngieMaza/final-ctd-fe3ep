import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app.page";
import LayoutCheckout from "dh-marvel/components/layouts/layout-checkout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import { GetServerSideProps, GetServerSidePropsContext } from "next/types";
import { getLocalStorage } from "utils/getData";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
type CheckoutData = {
    name: string,
    lastname: string,
    email: string,
    address: {
        address1: string,
        address2: string | null,
        state: string,
        city: string,
        zipCode: string
    },
    comicImage: string,
    comicName: string,
    comicPrice: number
}

const ConfirmedPurchase: NextPageWithLayout<[]> = () => {
    const [customerData, setCustomerData] = useState<CheckoutData>({
        name: "",
        lastname: "",
        email: "",
        address: {
            address1: "",
            address2: "",
            state: "",
            city: "",
            zipCode: ""
        },
        comicImage: "",
        comicName: "",
        comicPrice: 0
    });

    useEffect(() => {
        const data: any = getLocalStorage("CheckoutData");
        setCustomerData(data);
    }, [])
    return (
        <BodySingle>
            <Box sx={{ display: "flex", justifyContent: "center", width: 0.99, backgroundColor: "#ABEBC6", height: 70, margin: "auto" }}>
                <Typography variant="h4" sx={{ padding: 2 }}>
                    Que disfrutes tu compra
                </Typography>
            </Box>
            <Paper elevation={16}
                sx={{
                    p: 2,
                    margin: "auto",
                    marginTop: 5,
                    width: 0.9,
                    height: 500,
                    flexGrow: 1,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Grid container spacing={2}>
                    <Grid item>
                        <Img alt={customerData.comicName} src={customerData.comicImage} height={470} width={300} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Stack>
                            <Typography variant="h5" sx={{marginBottom:2}}>
                                Datos de la compra:
                            </Typography>
                            <Typography>
                                Nombre del comic: {customerData.comicName}
                            </Typography>
                            <Typography>
                                Precio: ${customerData.comicPrice}
                            </Typography>
                            <Typography variant="h5" sx={{marginBottom:2, marginTop:2}}>
                                Datos del Comprador:
                            </Typography>
                            <Typography>
                                Nombre y Apellido: {customerData.name} {customerData.lastname}
                            </Typography>
                            <Typography>
                                Email: {customerData.email}
                            </Typography>
                            <Typography variant="h5" sx={{marginBottom:2, marginTop:2}}>
                                Datos de Entrega:
                            </Typography>
                            <Typography>
                                Direccion: {customerData.address.address1} {customerData.address.address2}
                            </Typography>
                            <Typography>
                                Provincia: {customerData.address.state}
                            </Typography>
                            <Typography>
                                Ciudad: {customerData.address.city} - CP: {customerData.address.zipCode}
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Paper>
        </BodySingle>
    )
}
ConfirmedPurchase.getLayout = function getLayout(page: ReactElement) {
    return <LayoutCheckout>{page}</LayoutCheckout>
}
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { req } = context;
    const referer = req.headers.referer;
    if (!referer || !referer.includes('/')) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }
    return {
        props: {}
    }
}
export default ConfirmedPurchase;