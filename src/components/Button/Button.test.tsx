import { screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { describe, it, expect } from 'vitest';
import { BiSave } from 'react-icons/bi';

import { Button } from '.';

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(<Button>salvar</Button>);

    expect(screen.getByRole('button', { name: /salvar/i })).toHaveStyle({
      padding: '0.375rem 0.75rem',
    });
    expect(screen.getByRole('button', { name: /salvar/i })).toHaveStyle({
      width: '100%',
    });
    expect(screen.getByRole('button', { name: /salvar/i })).toHaveStyle({
      fontSize: '1.2rem',
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the button with variant', () => {
    renderWithTheme(<Button variant="success">Salvar</Button>);
    expect(screen.getByRole('button', { name: /salvar/i })).toHaveStyle({
      borderColor: '#198754',
      backgroundColor: '#198754',
    });
  });

  it('should render the button with icon', () => {
    renderWithTheme(
      <Button icon={<BiSave data-testid="icon" />}>Salvar</Button>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});
