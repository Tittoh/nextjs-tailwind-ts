import { render, screen } from '@testing-library/react';

import Home from '../src/pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a next.js logo', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: 'Next.js 13 and Tailwind CSS Template',
    });

    expect(heading).toBeInTheDocument();
  });
});
