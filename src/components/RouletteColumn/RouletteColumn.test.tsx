import { render, screen } from '@testing-library/react'

import RouletteColumn from '.'

describe('<RouletteColumn />', () => {
  it('should render the heading', () => {
    const { container } = render(<RouletteColumn />)

    expect(screen.getByRole('heading', { name: /RouletteColumn/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
