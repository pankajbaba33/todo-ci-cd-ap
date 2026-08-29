import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('adds and removes todo items', async () => {
  render(<App />);

  const input = screen.getByLabelText(/todo input/i);
  await userEvent.type(input, 'Write a blog post');
  await userEvent.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.getByText('Write a blog post')).toBeInTheDocument();
  expect(screen.getByText(/2 tasks left/i)).toBeInTheDocument();

  await userEvent.click(
    screen.getByRole('button', { name: /delete write a blog post/i })
  );

  expect(screen.queryByText('Write a blog post')).not.toBeInTheDocument();
});
