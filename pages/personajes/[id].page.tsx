import { GetStaticPaths, GetStaticProps } from 'next'
import { getCharacter, getCharacters } from 'dh-marvel/services/marvel/marvel.service';
import CharacterDetails, { Character } from 'dh-marvel/components/characterDetails/characterDetails';
import { ReactElement } from 'react';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';
import { NextPageWithLayout } from '../_app.page';
import BodySingle from 'dh-marvel/components/layouts/body/single/body-single';

interface Props {
    data: Character
}

const CharacterId: NextPageWithLayout<Props> = ({ data }: Props) => {

    return (
        <BodySingle title={data.name}>
            <CharacterDetails character={data}/>
        </BodySingle>)
}
CharacterId.getLayout = function getLayout(page: ReactElement) {
    return <LayoutGeneral>{page}</LayoutGeneral>
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id?.toString() || '0'
    const character = await getCharacter(parseInt(id))
    return {
        props: {
            data: character
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