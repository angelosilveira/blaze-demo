import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { describe, test, expect } from 'vitest';

import { Wrapper } from '.';

describe('<Wrapper />', () => {
  test('should render the wrapper', () => {
    const { container } = renderWithTheme(
      <Wrapper>
        <span>App vendas</span>
      </Wrapper>
    );

    expect(screen.getByText(/app vendas/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
