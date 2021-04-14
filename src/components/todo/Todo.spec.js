import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import Todo from './Todo';

test('has a checkbox that toggles strikethrough', () => {
  render(<Todo text="my first task!"/>);
  const element = screen.getByText("my first task!");

  expect(element).toHaveStyle({textDecoration: ''})

  userEvent.click(screen.getByRole('checkbox'))

  expect(element).toHaveStyle({textDecoration: 'line-through'})
});
