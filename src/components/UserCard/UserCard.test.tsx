import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';

import { UserCard } from '.';

const user = {
  date_proposal: '2022-12-29',
  cnpj_cpf: '06276555507',
  name: 'angelo silveira',
  rg: '1173765482',
  marital: 'solteiro',
  phone: '77981031817',
  date_birth: '2022-12-29',
  cel: '77981379070',
  sex: 'masculino',
  email: 'angelo.silveira09@gmail.com',
  state: 'BA',
  city: 'Aracatu',
  neighborhood: 'centro',
  address: 'praça cel candido silveira santos',
  number: '49',
  zipcode: '46130000',
  complement: 'casa',
  id: 1,
};

describe('<UserCard />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<UserCard {...user} />);

    expect(
      screen.getByRole('heading', { name: user.name })
    ).toBeInTheDocument();

    expect(screen.getByText(user.cnpj_cpf)).toBeInTheDocument();

    expect(
      screen.getByText(user.city + ' - ' + user.state)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
