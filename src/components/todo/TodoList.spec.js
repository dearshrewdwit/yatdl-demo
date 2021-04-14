import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import TodoList from './TodoList';

test('shows a heading', () => {
  render(<TodoList />);
  const element = screen.getByText("Yet Another Todo List!");

  expect(element).toBeInTheDocument();
});

test('save and display a task', () => {
  render(<TodoList />);
  // type into the text box, click the save button
  userEvent.type(screen.getByRole('textbox'), 'my first task!')
  userEvent.click(screen.getByRole('button'))

  const element = screen.getByText("my first task!");

  expect(element).toBeInTheDocument();
});

test('save and display multiple tasks', () => {
  render(<TodoList />);
  // type into the text box, click the save button
  userEvent.type(screen.getByRole('textbox'), 'my first task!')
  userEvent.click(screen.getByRole('button'))
  const element = screen.getByText("my first task!");

  userEvent.clear(screen.getByRole('textbox'))

  userEvent.type(screen.getByRole('textbox'), 'my second task!')
  userEvent.click(screen.getByRole('button'))
  const element2 = screen.getByText("my second task!");

  expect(element).toBeInTheDocument();
  expect(element2).toBeInTheDocument();
});

test('clears all todos', () => {
  render(<TodoList />);
  userEvent.type(screen.getByRole('textbox'), 'my first task!')
  userEvent.click(screen.getByRole('button'))
  const element = screen.getByText("my first task!");

  userEvent.click(screen.getByRole('link'))

  expect(element).not.toBeInTheDocument();
});
