import { render, screen } from '@testing-library/react';

import Heading from './Heading';

test('shows text', () => {
  render(<Heading text="a heading"/>);
  const element = screen.getByText("a heading");
  expect(element).toBeInTheDocument()
});
