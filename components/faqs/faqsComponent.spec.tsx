import { render, fireEvent } from '@testing-library/react';
import FaqsComponent from './faqsComponent';
import { FaqsType } from './faqsData';

describe('FaqsComponent', () => {
    const faq: FaqsType = {
      id: 1,
      question: 'Question-test?',
      answer: 'Answer-test',
    };
  
    it('expands when clicked', () => {
      const { getByRole } = render(<FaqsComponent faq={faq} />);
      const summary = getByRole('button', { name: faq.question });
      fireEvent.click(summary);
      expect(summary).toHaveAttribute('aria-expanded', 'true');
    });
  });