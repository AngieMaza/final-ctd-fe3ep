import type { GetStaticProps } from 'next'
import Head from 'next/head'
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import FaqsComponent from "../components/faqs/faqsComponent"
import { faqsData, FaqsType } from 'dh-marvel/components/faqs/faqsData';
import { NextPageWithLayout } from './_app.page';
import { ReactElement } from 'react';
import LayoutGeneral from 'dh-marvel/components/layouts/layout-general';

interface Props {
    data: FaqsType[]
}
const Faqs: NextPageWithLayout<Props> = ({ data }: Props) => {
    return (
        <>
            <Head>
                <title>Preguntas Frecuentes</title>
            </Head>
            <BodySingle title={"Preguntas Frecuentes"}>
                {data.map(faq => <FaqsComponent key={faq.id} faq={faq} />)}
            </BodySingle>
        </>
    )
}
Faqs.getLayout = function getLayout(page: ReactElement) {
    return <LayoutGeneral>{page}</LayoutGeneral>
}
export const getStaticProps: GetStaticProps = async () => {
    const data = faqsData;
    return {
        props: { data: data }
    }
}
export default Faqs;
