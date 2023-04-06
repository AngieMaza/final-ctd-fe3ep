import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import GeneralButton from './generalButton';




export default {
  title: 'Components/Cards/CardComponent',
  component: GeneralButton,
  argTypes: {
  },
} as ComponentMeta<typeof GeneralButton>;

const Template: ComponentStory<typeof GeneralButton> = (args: any) => <GeneralButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    href: "/",
    disabled: false,
    name: "Example"
};