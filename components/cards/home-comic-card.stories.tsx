import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComicCard from './home-comic-card';




export default {
  title: 'Components/Cards/HomeComicCard',
  component: ComicCard,
  argTypes: {
  },
} as ComponentMeta<typeof ComicCard>;

const Template: ComponentStory<typeof ComicCard> = (args: any) => <ComicCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data:{
        id: 0,
        title: "StoryExample",
        thumbnail: {
            path:"https://fotografiamejorparavendermas.com/wp-content/uploads/2017/06/La-importancia-de-la-imagen",
            extension:"jpg"
        }
    }
};