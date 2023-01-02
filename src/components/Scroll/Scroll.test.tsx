import '@testing-library/jest-dom';
import { renderWithTheme } from 'src/utils/tests/renderWithTheme';
import { it, describe } from 'vitest';
import { Scroll } from '.';

describe('<Scroll />', () => {
  it('should render the loading', () => {
    const { container, getByTestId } = renderWithTheme(
      <Scroll data-testid="scroll">
        <span>App vendas</span>
      </Scroll>
    );

    expect(getByTestId('scroll')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
