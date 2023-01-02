import { fireEvent, screen } from '@testing-library/react';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { describe, expect, test } from 'vitest';

import Menu from '.';

describe('<Menu />', () => {
  test('should render the menu', () => {
    const { container } = renderWithTheme(<Menu />);

    expect(screen.getByLabelText(/menu/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  test('should handle open/close menu', () => {
    renderWithTheme(<Menu />);

    const menuElement = screen.getByRole('navigation', { hidden: true });
    const openMenu = screen.getByLabelText(/menu/i);

    expect(menuElement.getAttribute('aria-hidden')).toBe('true');
    expect(menuElement).toHaveStyle({ transform: 'translateX(100%)' });

    fireEvent.click(openMenu);
    expect(menuElement.getAttribute('aria-hidden')).toBe('false');
    expect(menuElement).toHaveStyle({ transform: 'translateX(0)' });
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/clientes/i)).toBeInTheDocument();
  });
});
