import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckButton from './checkButton';




export default {
  title: 'Components/Button/CheckButton',
  component: CheckButton,
  argTypes: {
  },
} as ComponentMeta<typeof CheckButton>;

const Template: ComponentStory<typeof CheckButton> = (args: any) => <CheckButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    disabled: false,
    name: "Example",
    onClick : (e) => {"Clickie"}
};