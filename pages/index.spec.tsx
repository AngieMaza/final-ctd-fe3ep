import {render, screen} from "@testing-library/react";
import Index from "dh-marvel/pages/index.page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<Index data={[]} totalPages={0} />)
            const title = screen.getByText('Cómics')
            expect(title).toBeInTheDocument()
        })
    })

})