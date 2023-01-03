import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';
import { CreateProposal } from '.';

describe('<CreateProposal />', () => {
  it('should render page create proposal', () => {
    renderWithTheme(<CreateProposal />);

    expect(screen.getByText('Proposta de Venda')).toBeInTheDocument();
  });
});
