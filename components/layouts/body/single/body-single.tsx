import * as React from 'react';
import { FC, PropsWithChildren } from "react";
import Container, { ContainerProps } from "@mui/material/Container";
import { Stack, Typography } from "@mui/material";
import background from "../../../../public/background.jpg";
interface BodySingleProps extends PropsWithChildren {
    title?: string,
    containerProps?: ContainerProps
}

const BodySingle: FC<BodySingleProps> = ({ title, containerProps, children }: BodySingleProps) => {
    return (
        <Container maxWidth="xl" {...containerProps}>
            <Stack direction={"column"} display={'flex'} justifyContent={'center'}>
                {title &&
                    <Typography variant={"h1"} my={5} textAlign={'center'} fontSize={28} fontWeight={600}>
                        {title}
                    </Typography>
                }
                {children}
            </Stack>
        </Container>
    );
};
export default BodySingle;
