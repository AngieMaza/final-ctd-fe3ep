import { render, screen } from '@testing-library/react';
import ComicCard from './home-comic-card';


describe('Home-Comic-Card component', () => {
    const data = {
        id: 0,
        title: "StoryExample",
        thumbnail: {
            path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
            extension: "jpg"
        }
    }
    it('render a correct title', () => {
        render( <ComicCard data={data}/>)
        const title = screen.getByText("StoryExample");
        expect(title).toBeInTheDocument()
    });
});