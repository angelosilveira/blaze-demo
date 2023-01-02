import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import Select from '.';

const arrMock = [
  { label: 'Acre', value: 'AC' },
  { label: 'Alagoas', value: 'AL' },
  { label: 'Amapá', value: 'AP' },
];

describe('<Select />', () => {
  it('should render the select', () => {
    const { container } = renderWithTheme(
      <Select title="Estados" options={arrMock} />
    );

    expect(screen.getByText('Estados')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
