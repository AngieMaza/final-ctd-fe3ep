import {render, screen} from "@testing-library/react";
import Index, { getServerSideProps } from "dh-marvel/pages/index.page";
import { GetServerSidePropsContext } from "next";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index data={[]} totalPages={0} />)
            const title = screen.getByText('Cómics')
            expect(title).toBeInTheDocument()
        })
    })
})