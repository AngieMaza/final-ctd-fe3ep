export type Character = {
    id: number,
    name: string,
    description: string,
    thumbnail: {
        path: string,
        extension: string,
    },
}
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link as MUILink, Stack } from '@mui/material';
import NextLink from 'next/link'
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
type Props = {
    character: Character
}
const CharacterDetails = ({ character }: Props) => {
    return (
        <Paper elevation={16}
            sx={{
                p: 2,
                margin: 'auto',
                width: 0.9,
                height: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <Img alt={character.name} src={`${character.thumbnail.path}.${character.thumbnail.extension}`} height={470} width={300} />
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="body2" color="text.secondary">
                                {character.description === "" ? "Descripción : No disponible" : `Descripción: ${character.description}`}
                            </Typography>
                            {/*    <Typography component="div">
                                Personajes: {characters.length != 0 && characters.map((it) => <NextLink key={it.id} href={`/personajes/${it.id}`} passHref><MUILink sx={{
                                    textDecoration: 'none',
                                    fontSize: 16,
                                    color: "primary",
                                    mr: 1
                                }}>{it.name},</MUILink></NextLink>)}
                            </Typography> */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
export default CharacterDetails;