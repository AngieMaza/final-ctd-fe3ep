import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FaqsComponent from './faqsComponent';
import { faqsData } from './faqsData';



export default {
  title: 'Components/Faqs/FaqsComponent',
  component: FaqsComponent,
  argTypes: {
  },
} as ComponentMeta<typeof FaqsComponent>;

const Template: ComponentStory<typeof FaqsComponent> = (args: any) => <FaqsComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  faq : faqsData[0]
};