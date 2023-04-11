import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CharacterDetails from './characterDetails';




export default {
    title: 'Components/DetailsPapers/CharacterDetails',
    component: CharacterDetails,
    argTypes: {
    },
} as ComponentMeta<typeof CharacterDetails>;

const Template: ComponentStory<typeof CharacterDetails> = (args: any) => <CharacterDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    character: {
        id: 0,
        name: "Name Example Character",
        description: "Description Example Character",
        thumbnail: {
            path: "https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
            extension: "jpg"
        },
    },
    comics: [
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
    ]
};