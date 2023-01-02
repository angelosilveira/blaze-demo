import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { SectionTitle } from '.';

describe('<SectionTitle />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <SectionTitle title="app de vendas" />
    );

    expect(
      screen.getByRole('heading', { name: /app de vendas/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
