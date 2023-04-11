import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckCard from './checkout-card';




export default {
  title: 'Components/Cards/CheckoutCard',
  component: CheckCard,
  argTypes: {
  },
} as ComponentMeta<typeof CheckCard>;

const Template: ComponentStory<typeof CheckCard> = (args: any) => <CheckCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    data:{
        id: 0,
        title: "StoryExample",
        thumbnail: {
            path:"https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
            extension:"jpg"
        },
        price: 75,
        description: "StoryBookExample description",
        pageCount: 1,
        oldPrice: 72,
        stock: 5,
        creators:{
            available: 1,
            collectionURI:"exampleURL",
            items:[{
                resourceURI: "exampleURL",
                name: "Autor Name",
                role: "example Role",
            }],
            returned:1
        }
    }
};