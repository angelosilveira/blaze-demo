import { render, screen } from '@testing-library/react'

import Roulette from '.'

describe('<Roulette />', () => {
  it('should render the heading', () => {
    const { container } = render(<Roulette />)

    expect(screen.getByRole('heading', { name: /Roulette/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
