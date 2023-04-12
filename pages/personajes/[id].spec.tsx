import { render, screen } from "@testing-library/react";
import CharacterId from "./[id].page";

describe('IndexPage', () => {
    describe('when rendering default', () => {
        it('should render the title', () => {
            render(<CharacterId data={{
                id: 0,
                name: "Name Example Character",
                description: "Description Example Character",
                thumbnail: {
                    path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
                    extension: "jpg"
                },
            }} comics={[
                {
                    id: 0,
                    title: "StoryExample",
                    thumbnail: {
                        path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
                        extension: "jpg"
                    },
                    price: 75,
                    description: "StoryBookExample description",
                    pageCount: 1,
                    oldPrice: 72,
                    stock: 5,
                    creators: {
                        available: 1,
                        collectionURI: "exampleURL",
                        items: [{
                            resourceURI: "exampleURL",
                            name: "Autor Name",
                            role: "example Role",
                        }],
                        returned: 1
                    }
                }
            ]} />)
            const title = screen.getByText('Name Example Character')
            expect(title).toBeInTheDocument()
        })
    })
})