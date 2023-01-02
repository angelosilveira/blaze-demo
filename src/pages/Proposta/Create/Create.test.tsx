import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import userEvent from '@testing-library/user-event';
import { CreateProposal } from '.';

describe('<CreateProposal />', () => {
  it('should render page create proposal', () => {
    renderWithTheme(<CreateProposal />);

    expect(screen.getByText('Proposta de Venda')).toBeInTheDocument();
  });

  it('should error fields empty when click on button', async () => {
    const { container } = renderWithTheme(<CreateProposal />);

    const buttonSave = screen.getByText('Salvar');

    userEvent.click(buttonSave);

    await waitFor(() => {
      expect(
        screen.getByText('Campo Data da proposta é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo CNPJ/CPF é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Nome do Títular é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Estado Cívil é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Estado é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Cidade é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Bairro é obrigatório')
      ).toBeInTheDocument();
      expect(
        screen.getByText('Campo Endereço é obrigatório')
      ).toBeInTheDocument();
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
