import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComicsDetails from './comicDetails';




export default {
    title: 'Components/DetailsPapers/ComicsDetails',
    component: ComicsDetails,
    argTypes: {
    },
} as ComponentMeta<typeof ComicsDetails>;

const Template: ComponentStory<typeof ComicsDetails> = (args: any) => <ComicsDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comic: {
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
    },
    characters: [{
        id: 0,
        name: "Name Example Character",
        description: "Description Example Character",
        thumbnail: {
            path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
            extension: "jpg"
        },
    }]
};