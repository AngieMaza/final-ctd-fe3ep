import { GetStaticPaths, GetStaticProps } from 'next'
import { getCharacter, getCharacterComics, getCharacters } from 'dh-marvel/services/marvel/marvel.service';
import CharacterDetails, { Character } from 'dh-marvel/components/characterDetails/characterDetails';
import { ReactElement } from 'react';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { NextPageWithLayout } from '../_app.page';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';
import Head from 'next/head'
import { Comic } from 'dh-marvel/components/comicDetails/comicDetails';

interface Props {
    data: Character,
    comics: Comic[]
}

const CharacterId: NextPageWithLayout<Props> = ({ data, comics }: Props) => {

    return (
        <>
            <Head>
                <title>Personajes - {data.name}</title>
            </Head>
            <BodySingle title={data.name}>
                <CharacterDetails character={data} comics={comics} />
            </BodySingle>
        </>)
}
CharacterId.getLayout = function getLayout(page: ReactElement) {
    return <LayoutGeneral>{page}</LayoutGeneral>
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id?.toString() || '0'
    const character = await getCharacter(parseInt(id))
    const comics = await getCharacterComics(parseInt(id))
    return {
        props: {
            data: character , comics
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getCharacters();
    const paths = data.data.results.map((data: Character) => {
        return { params: { id: data.id.toString() } }
    })
    return {
        paths,
        fallback: "blocking"
    }

}
export default CharacterId