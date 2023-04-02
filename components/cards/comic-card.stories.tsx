import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComicCard from './comic-card';




export default {
  title: 'Components/Cards/CardComponent',
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
            path:"example",
            extension:"png"
        }
    }
};