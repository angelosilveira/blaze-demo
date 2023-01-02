import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { describe, test, expect } from 'vitest';

import { Container } from '.';

describe('<Container />', () => {
  test('should render the container', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>App vendas</span>
      </Container>
    );

    expect(screen.getByText(/app vendas/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
